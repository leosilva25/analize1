
const myObserver = new IntersectionObserver((entries) =>{
       entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
       })
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));


const observar = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
     if(entry.isIntersecting){
         entry.target.classList.add('show')
     } else{
         entry.target.classList.remove('show')
     }
    })
});

const elementos = document.querySelectorAll('.assunto');

elementos.forEach((element) => observar.observe(element));


function clickMenu(){
    if(itens.style.display == 'none'){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}

function mudouTamanho(){
    if(window.innerWidth >=768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

var opta = document.querySelector("#option1");
var optb = document.querySelector("#option2");
var optc = document.querySelector("#option3");
var optd = document.querySelector("#option4");
var opte = document.querySelector("#option5");

        opta.addEventListener("click", function mudouTamnaho(){
            var clicado = document.querySelector("#itens");

            if(window.innerWidth >=768){
                clicado.style.display = 'block'
            } else{
                clicado.style.display = 'none'
            }
          
        });

        optb.addEventListener("click", function mudouTamanho(){

            var clicado = document.querySelector("#itens");

            if(window.innerWidth >=768){
                clicado.style.display = 'block'
            } else {
                clicado.style.display = 'none'
            }
           
        });

        optc.addEventListener("click", function mudouTamanho(){
            var clicado = document.querySelector("#itens");
            if(window.innerWidth >=768){
                clicado.style.display = 'block'
            } else{
                clicado.style.display  = 'none'
            }
        });

        optd.addEventListener("click", function mudouTamanho(){

            var clicado = document.querySelector("#itens");
            if(window.innerWidth >=768){
                clicado.style.display = 'block'
            } else {
                clicado.style.display = 'none'
            }
        });

        opte.addEventListener("click", function mudouTamanho(){

            var clicado = document.querySelector("#itens");
            if(window.innerWidth >=768){
                clicado.style.display = 'block'
            } else {
                clicado.style.display = 'none'
            }
        });


