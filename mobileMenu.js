
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const nav = menu?.querySelector("nav");

    if (!menu || !nav) return;

    // Evita criar os elementos mais de uma vez.
    if (document.getElementById("menuHamburguer")) return;

    // Cria o botão sem modificar o HTML original.
    const botao = document.createElement("button");
    botao.id = "menuHamburguer";
    botao.type = "button";
    botao.setAttribute("aria-label", "Abrir menu");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-controls", "menuNavMobile");
    botao.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    nav.id = "menuNavMobile";
    menu.insertBefore(botao, nav);

    // Fundo escuro criado dinamicamente.
    const fundo = document.createElement("div");
    fundo.id = "fundoMenuMobile";
    fundo.setAttribute("aria-hidden", "true");
    document.body.appendChild(fundo);

    function abrirMenu() {
        nav.classList.add("menuMobileAberto");
        botao.classList.add("ativo");
        fundo.classList.add("ativo");
        document.body.classList.add("menuMobileAberto");

        botao.setAttribute("aria-expanded", "true");
        botao.setAttribute("aria-label", "Fechar menu");
    }

    function fecharMenu() {
        nav.classList.remove("menuMobileAberto");
        botao.classList.remove("ativo");
        fundo.classList.remove("ativo");
        document.body.classList.remove("menuMobileAberto");

        botao.setAttribute("aria-expanded", "false");
        botao.setAttribute("aria-label", "Abrir menu");
    }

    botao.addEventListener("click", function () {
        if (nav.classList.contains("menuMobileAberto")) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    // Fecha ao clicar no fundo escuro.
    fundo.addEventListener("click", fecharMenu);

    // Mantém todas as opções originais do nav.
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", fecharMenu);
    });

    // Fecha ao pressionar ESC.
    document.addEventListener("keydown", function (evento) {
        if (
            evento.key === "Escape" &&
            nav.classList.contains("menuMobileAberto")
        ) {
            fecharMenu();
            botao.focus();
        }
    });

    // Fecha ao voltar para o desktop.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });
});