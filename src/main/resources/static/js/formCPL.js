var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
// var urlBase = "http://localhost:8080";
function enviarDatosPOSTCPL() {
  var url2 = document.getElementById("url2");
  var id2 = document.getElementById("id2");
  var usuarioDeCreacion2 = document.getElementById("usuarioDeCreacion2");
  var tipoDeOferta2 = document.getElementById("tipoDeOfertaF2");
  var resolucionAprobatoria2=document.getElementById("resolucionAprobatoria2")
  var numeroAnexo2=document.getElementById("numeroDeAnexo2")
  var nominaDeFamiliasProfesionales2 = document.getElementById("nominaDeFamiliasProfesionales2");
  var denominacionDeLaTitulacionOCertificacion2 = document.getElementById("denominacionDeLaTitulacionOCertificacion2");
  // var resolucionAprobatoriaDeCapacitacionLaboral2 = document.getElementById("resolucionAprobatoriaDeCapacitacionLaboral2");
  var cargaHorariaHSReloj2 = document.getElementById("cargaHorariaHSReloj2");
  var institucionesDondeSeDictaLaOferta2 = document.getElementById("institucionesDondeSeDictaLaOferta2");
  var cenofDondeSeDictaLaOferta = document.getElementById("cenofDondeSeDictaLaOferta");
  var otrasInstitucionesDondeSeDictaLaOferta2 = document.getElementById("otrasInstitucionesDondeSeDictaLaOferta");
  var plazoDeVigencia2 = document.getElementById("plazoDeVigencia2");
  var fechaDeAprobacionDeCapacitacionLaboral2 = document.getElementById("fechaDeAprobacionDeCapacitacionLaboral2");
  var fechaDeVencimientoDeCapacitacionLaboral2 = document.getElementById("fechaDeVencimientoDeCapacitacionLaboral2");


  var data = {
    id:id2.value,
    tipoDeOferta:tipoDeOferta2.value,
    resolucionAprobatoria:resolucionAprobatoria2.value,
    numeroDeAnexo:numeroAnexo2.value,
    usuarioDeCreacion: usuarioDeCreacion2.value,
    nominaDeFamiliasProfesionales:nominaDeFamiliasProfesionales2.value,
    denominacionDeLaTitulacionOCertificacion:denominacionDeLaTitulacionOCertificacion2.value,
    // resolucionAprobatoriaDeCapacitacionLaboral:resolucionAprobatoriaDeCapacitacionLaboral2.value,
    cargaHorariaHSReloj:cargaHorariaHSReloj2.value,
    institucionesDondeSeDictaLaOferta:institucionesDondeSeDictaLaOferta2.value,
    cnofDondeSedictaLaOferta:cenofDondeSeDictaLaOferta.value,
    otrasInstitucionesDondeSeDictaLaOferta:otrasInstitucionesDondeSeDictaLaOferta2.value,
    plazoDeVigencia:plazoDeVigencia2.value,
    fechaDeAprobacionDeCapacitacionLaboral: fechaDeAprobacionDeCapacitacionLaboral2.value,
    fechaDeVencimientoDeCapacitacionLaboral: fechaDeVencimientoDeCapacitacionLaboral2.value,
    url:url2.value
  };


  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(data);

  // URL del endpoint de la API
  var apiUrl = urlBase + "/admin/resoluciones/crearResolucionCPL";

  // Configuración de la solicitud
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  };

  // Realizar la solicitud POST
  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('Respuesta del servidor:', result);

      var popupContainer = document.getElementById("containerGralForm");
      popupContainer.setAttribute("style","display:none")
      borrarFormulariosCPL()

      retrieveGuests()
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}



function modificarResolucionCPL(id) {
  fetch(urlBase + `/admin/resolucion?id=${id}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        const id = data.id;
        const usuarioDeCreacion = data.usuarioDeCreacion;
        const usuarioDeUltimaModificacion = data.usuarioDeUltimaModificacion;
        const fechaYHoraDeCreacion = data.fechaYHoraDeCreacion;
        const fechaYHoraDeUltimaModificacion = data.fechaYHoraDeUltimaModificacion;
        const url = data.url;
        const tipoDeOferta = data.tipoDeOferta;
        const tipoDeGestion = data.tipoDeGestion;
        const tipoDeTitulos = data.tipoDeTitulos;
        const resolucionAprobatoria=data.resolucionAprobatoria;
        const numeroDeAnexo=data.numeroDeAnexo;
        const ambitoDeLaETP = data.ambitoDeLaETP;
        const nominaDeFamiliasProfesionales = data.nominaDeFamiliasProfesionales;
        const titulacionOTipoDeCertificacion = data.titulacionOTipoDeCertificacion;
        const denominacionDeLaTitulacionOCertificacion = data.denominacionDeLaTitulacionOCertificacion;
        const marcoDeReferencia = data.marcoDeReferencia;
        const normaAprobatoriaDelPlanDeEstudioDisenoCurricular = data.normaAprobatoriaDelPlanDeEstudioDisenoCurricular;
        const normaDeValidezNacional = data.normaDeValidezNacional;
        const cargaHorariaHSReloj = data.cargaHorariaHSReloj;
        const plazoDeVigencia = data.plazoDeVigencia;
        const plazoDeValidezNacional = data.plazoDeValidezNacional;
        const ambitoDeLaEducacion = data.ambitoDeLaEducacion;
        const disciplinaSociohumanistica = data.disciplinaSociohumanistica;
        const area = data.area;
        const institucionesDondeSeDictaLaOferta = data.institucionesDondeSeDictaLaOferta;
        const cenofDondeSeDictaLaOferta = data.cnofDondeSedictaLaOferta;
        const otrasInstitucionesDondeSeDictaLaOferta = data.otrasInstitucionesDondeSeDictaLaOferta;
        const lenguajeDisciplina = data.lenguajeDisciplina;
        const fechaDeAprobacionDeCapacitacionLaboral= data.fechaDeAprobacionDeCapacitacionLaboral;
        const fechaDeVencimientoDeCapacitacionLaboral = data.fechaDeVencimientoDeCapacitacionLaboral;
        // const resolucionAprobatoriaDeCapacitacionLaboral = data.resolucionAprobatoriaDeCapacitacionLaboral;
        var url2 = document.getElementById("url2");
        var id2 = document.getElementById("id2");
        var usuarioDeCreacion2 = document.getElementById("usuarioDeCreacion2");
        var tipoDeOferta2 = document.getElementById("tipoDeOfertaF2");
        var nominaDeFamiliasProfesionales2 = document.getElementById("nominaDeFamiliasProfesionales2");
        var denominacionDeLaTitulacionOCertificacion2 = document.getElementById("denominacionDeLaTitulacionOCertificacion2");
        // var resolucionAprobatoriaDeCapacitacionLaboral2 = document.getElementById("resolucionAprobatoriaDeCapacitacionLaboral2");
        var cargaHorariaHSReloj2 = document.getElementById("cargaHorariaHSReloj2");
        var institucionesDondeSeDictaLaOferta2 = document.getElementById("institucionesDondeSeDictaLaOferta2");
        var cenofDondeSeDictaLaOferta2 = document.getElementById("cenofDondeSeDictaLaOferta");
        var otrasInstitucionesDondeSeDictaLaOferta2 = document.getElementById("otrasInstitucionesDondeSeDictaLaOferta");
        var plazoDeVigencia2 = document.getElementById("plazoDeVigencia2");
        var fechaDeAprobacionDeCapacitacionLaboral2 = document.getElementById("fechaDeAprobacionDeCapacitacionLaboral2");
        var fechaDeVencimientoDeCapacitacionLaboral2 = document.getElementById("fechaDeVencimientoDeCapacitacionLaboral2");



          id2.value=id
          tipoDeOferta2.value=tipoDeOferta

          var resolucionAprobatoria2=document.getElementById("resolucionAprobatoria2");
          resolucionAprobatoria2.value=resolucionAprobatoria

          var numeroDeAnexo2=document.getElementById("numeroDeAnexo2");
          numeroDeAnexo2.value=numeroDeAnexo

          usuarioDeCreacion2.value=usuarioDeCreacion
          nominaDeFamiliasProfesionales2.value=nominaDeFamiliasProfesionales
          denominacionDeLaTitulacionOCertificacion2.value=denominacionDeLaTitulacionOCertificacion
          // resolucionAprobatoriaDeCapacitacionLaboral2.value=resolucionAprobatoriaDeCapacitacionLaboral
          cargaHorariaHSReloj2.value=cargaHorariaHSReloj
          institucionesDondeSeDictaLaOferta2.value=institucionesDondeSeDictaLaOferta
          plazoDeVigencia2.value=plazoDeVigencia
          cenofDondeSeDictaLaOferta2.value=cenofDondeSeDictaLaOferta;
          otrasInstitucionesDondeSeDictaLaOferta2.value=otrasInstitucionesDondeSeDictaLaOferta;
          url2.value=url
        fechaDeAprobacionDeCapacitacionLaboral2.value= fechaDeAprobacionDeCapacitacionLaboral;
        fechaDeVencimientoDeCapacitacionLaboral2.value = fechaDeVencimientoDeCapacitacionLaboral;


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

function abrirPopCPL(id){

  modificarResolucionCPL(id);
  const popupContainer = document.getElementById("containerGralForm");

popupContainer.style.display = "flex";



}


function borrarFormulariosCPL(){
  var fields2 = [
    "url2",
    "id2",
    "usuarioDeCreacion2",
    "tipoDeOfertaF2",
    "resolucionAprobatoria2",
    "numeroDeAnexo2",
    "nominaDeFamiliasProfesionales2",
    "denominacionDeLaTitulacionOCertificacion2",
    // "resolucionAprobatoriaDeCapacitacionLaboral2",
    "cargaHorariaHSReloj2",
    "institucionesDondeSeDictaLaOferta2",
    "cnofDondeSeDictaLaOferta",
      "otrasInstitucionesDondeSeDictaLaOferta2",
    "plazoDeVigencia2",
      "fechaDeAprobacionDeCapacitacionLaboral2",
      "fechaDeVencimientoDeCapacitacionLaboral2",
  ];

  fields2.forEach(function (field) {
    var element = document.getElementById(field);
    if (element) {
      element.value = ""; // Asignar valor en blanco
    }
  });


}

function retrieveGuests() {
  var url = urlBase+'/filtro-resoluciones';

  var tipoDeOferta = document.getElementById("tipoOfertaOut").value
  var tipoDeGestion = document.getElementById("tipoGetionOut").value
  var tipoDeTitulos = document.getElementById("tipoTituloOut").value
  var tipoDeNomina = null;
  var area = null;
  var nombreDeTitulos = null;
  var institucionDondeSeDicta = null;
  var id = null;

  $.ajax({
      type: 'POST',
      url: url,
      data: {
          tipoDeOferta: tipoDeOferta,
          tipoDeGestion: tipoDeGestion,
          tipoDeTitulos: tipoDeTitulos,
          tipoDeNomina: tipoDeNomina,
          area: area,
          nombreDeTitulos: nombreDeTitulos,
          institucionDondeSeDicta: institucionDondeSeDicta,
          id: id
      },
      success: function (response) {
          // Aquí puedes manejar la respuesta del servidor, si es necesario
          $("#tablaResoluciones").html(response); // Actualizar el contenido de la tabla
      },
      error: function (xhr, status, error) {
          // Manejar errores aquí
      }
  });
}

