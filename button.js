const button = document.getElementById("formulario");
const btnBlog = document.getElementById("btn-blog");
const btnBlog2 = document.getElementById("btn-blog2");
const btnBlog3 = document.getElementById("btn-blog3");
const btnServicos = document.getElementById("btn-area");

button.addEventListener("click", function(){
    window.open("formulario.html", "_self");
});

btnBlog.addEventListener("click", function(){
    window.open("blog.html", "_self");
});

btnBlog2.addEventListener("click", function(){
    window.open("blog.html", "_self");
});

btnBlog3.addEventListener("click", function(){
    window.open("blog.html", "_self");
});

btnServicos.addEventListener("click", ()=>{
    window.open("servicos.html", "_self");
});