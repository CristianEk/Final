/*Abrir Menu*/
$("#MenuIcon").click(function(){
    $("#Menu").toggleClass("abrirmenu");
}
);
//funcion de slide
$(function() {
    $(".rslides").responsiveSlides({         
        nav: true,             
        prevText: '<i class="fa-solid fa-arrow-left"></i>',   
        nextText: '<i class="fa-solid fa-arrow-right"></i>'       
    });
    $(".rslides2").responsiveSlides({         
        nav: true,             
        prevText: '<i class="fa-solid fa-arrow-left"></i>',   
        nextText: '<i class="fa-solid fa-arrow-right"></i>'       
    });
});
//WOW
new WOW().init();
//Galeria de fotos
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
/* Acordeones*/
$("#abrirAcordeon").click(function(){
    $("#mostrarAcordeon").slideToggle();
    $(".icono").toggleClass("rotar")
});

$("#abrirAcordeon2").click(function(){
    $("#mostrarAcordeon2").slideToggle();
    $(".icono2").toggleClass("rotar")
});

$("#abrirAcordeon3").click(function(){
    $("#mostrarAcordeon3").slideToggle();
    $(".icono3").toggleClass("rotar")
});
//formulario
    document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const nombre=document.getElementById('nombre').value.trim();
    const email=document.getElementById('mail').value.trim();
    const mensaje=document.getElementById('mensaje').value.trim();
    const error=document.getElementById('error');

    error.style.color='green';
    error.textContent='Forms send'
    this.reset();
})
//modal
var modalVideo = document.getElementById("contModalVideo");
var btnAbrirVideo = document.getElementById("btnAbrirModal");
var btnCerrarVideo = document.getElementById("btnCerrarModal");
var videoElement = modalVideo.querySelector("video");
//abrir modal
btnAbrirVideo.onclick = function(e) {
    e.preventDefault(); 
    modalVideo.style.display = "flex";
};
//cerrar modal 
btnCerrarVideo.onclick = function() {
    modalVideo.style.display = "none";
    pausarVideo();
};
//cerrar el modal haciendo clic afuera
window.addEventListener("click", function(event) {
    if (event.target == modalVideo) {
        modalVideo.style.display = "none";
        pausarVideo();
    }
});
//pausar el video
function pausarVideo() {
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0; 
    }
}       