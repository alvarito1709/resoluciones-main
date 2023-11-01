var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
//var urlBase = "http://localhost:8080";





var tipoOferta = document.getElementById("tipoOferta")
var tipoDeGestion = document.getElementById("tipoDeGestion")
var tipoTitulo = document.getElementById("tipoTitulo")

function toggleNoVisible(elementId) {
    const contenedorBotones = document.getElementById("contenedorBotones");
    var clase = "noVisible"
    var element = document.getElementById(elementId);
    if (elementId === 'botonBuscarResoluciones') {
        contenedorBotones.appendChild(element);
    }
    if (element) {
        element.classList.toggle(clase);
    }

}
toggleNoVisible('tipoDeGestion')
toggleNoVisible('tipoTitulo')






document.addEventListener("DOMContentLoaded", function () {

    const openPopup = document.getElementById("openPopup");
    const closePopupUSU = document.getElementById("closePopupUSU");
    const closePopupButton = document.getElementById("closePopup");
    const popupContainer = document.getElementById("containerGralForm");
    const containerGralFormUsu = document.getElementById("containerGralFormUsu");


    closePopupButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
        borrarFormulariosETP()
        borrarFormulariosCPL()
        borrarFormulariosAR()
        borrarFormulariosSH()
    });
    closePopupUSU.addEventListener("click", function () {
        containerGralFormUsu.style.display = "none";
       
    });
    openPopup.addEventListener("click", function () {
        popupContainer.style.display = "flex";
        borrarFormularios(1)
        borrarFormularios(2)
        borrarFormularios(3)
        borrarFormularios(4)
    });
});



function redirigirA(url) {
    window.location.href = urlBase+url; // Redirigir a la URL proporcionada
}






    const popupContainer = document.getElementById("containerGralForm");
    popupContainer.style.display = "flex";

   






  const confirmationPopupDelete = document.getElementById('confirmationPopupDelete');
  const cancelButtonDelete = document.getElementById('cancelButtonDelete');
  const confirmButtonDelete = document.getElementById('confirmButtonDelete');
  


  
  
