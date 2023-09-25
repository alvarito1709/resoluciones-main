var urlBase = "https://inscripcionesagencia.com.ar/resoluciones-v2";
//var urlBase = "http://localhost:8080";


function modificarResolucionUsu(id) {
  fetch(urlBase + `/admin/usuarios/get?id=${id}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        const id = data.id;
        const nombre = data.nombre;
        const apellido = data.apellido;
        const documento = data.documento;
        const email = data.email;
        const telefono = data.telefono;
       
        const permisos = data.permisos;

        const user_id = document.getElementById("user-id");        
        const user_nombre = document.getElementById("user-nombre");
        const user_apellido = document.getElementById("user-apellido");
        const user_documento = document.getElementById("user-documento");
        const user_email = document.getElementById("user-email");
        const user_telefono = document.getElementById("user-telefono");
       
        const user_permisos = document.getElementById("user-permisos");

        user_id.value=id
        user_nombre.value=nombre
        user_apellido.value=apellido
        user_documento.value=documento
        user_email.value=email
        user_telefono.value=telefono
        user_username.value=username
        user_permisos.value=permisos       

      } else {
        console.log('No se encontró la resolución.');
      }
    })
    .catch(error => {
      console.error('Error al obtener la resolución:', error);
    });
}
// const idResolucion = '0074d23a-b269-4bdd-8e43-c87ef4e84ff5'; // Coloca el ID que desees aquí
// modificarResolucionAR(idResolucion);

function abrirPopUsu(id){
  modificarResolucionUsu(id);
  const popupContainer = document.getElementById("containerGralFormUsu");
   
popupContainer.style.display = "flex";
 

 
}
function abrirPopUsuCrear(){
  const user_id = document.getElementById("user-id");        
        const user_nombre = document.getElementById("user-nombre");
        const user_apellido = document.getElementById("user-apellido");
        const user_documento = document.getElementById("user-documento");
        const user_email = document.getElementById("user-email");
        const user_telefono = document.getElementById("user-telefono");
        const user_username = document.getElementById("user-username");
        const user_permisos = document.getElementById("user-permisos");

        user_id.value=""
        user_nombre.value=""
        user_apellido.value=""
        user_documento.value=""
        user_email.value=""
        user_telefono.value=""
      
        user_permisos.value="" 
  const popupContainer = document.getElementById("containerGralFormUsu");
   
popupContainer.style.display = "flex";
 

 
}


function borrarFormulariosAR(){
  var fields1 = [
    "url1",
    "id1",
    "usuarioDeCreacion1",
    "tipoDeOfertaF1",
    "tipoDeGestionF1",
    "tipoDeTitulosF1",
    "ambitoDeLaEducacion1",
    "lenguajeDisciplina1",
    "area1",
    "denominacionDeLaTitulacionOCertificacion1",
    "marcoDeReferencia1",
    "normaAprobatoriaDelPlanDeEstudioDisenoCurricular1",
    "normaDeValidezNacional1",
    "cargaHorariaHSReloj1",
    "institucionesDondeSeDictaLaOferta1",
    "plazoDeVigencia1",
    "plazoDeValidezNacional1"
  ];

  fields1.forEach(function (field) {
    var element = document.getElementById(field);
    if (element) {
      element.value = ""; // Asignar valor en blanco
    }
  });
}




document.addEventListener("DOMContentLoaded", function () {

  
  const closePopupUSU = document.getElementById("closePopupUSU");

  const containerGralFormUsu = document.getElementById("containerGralFormUsu");


  closePopupUSU.addEventListener("click", function () {
      containerGralFormUsu.style.display = "none";
     
  });

});