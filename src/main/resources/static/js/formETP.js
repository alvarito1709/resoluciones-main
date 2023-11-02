//var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
var urlBase = "http://localhost:8080";
function enviarDatosPOSTETP() {
  var id4 = document.getElementById('id4').value;
var usuarioDeCreacion4 = document.getElementById('usuarioDeCreacion4').value;
var tipoDeOfertaF4 = document.getElementById('tipoDeOfertaF4').value;
var tipoDeGestionF4 = document.getElementById('tipoDeGestionF4').value;
var tipoDeTitulosF4 = document.getElementById('tipoDeTitulosF4').value;
var resolucionAprobatoria4=document.getElementById("resolucionAprobatoria4").value;
  var numeroAnexo4=document.getElementById("numeroDeAnexo4").value;

var ambitoDeLaETP4 = document.getElementById('ambitoDeLaETP4').value;
var nominaDeFamiliasProfesionales4 = document.getElementById('nominaDeFamiliasProfesionales4').value;
var titulacionOTipoDeCertificacion4 = document.getElementById('titulacionOTipoDeCertificacion4').value;
var denominacionDeLaTitulacionOCertificacion4 = document.getElementById('denominacionDeLaTitulacionOCertificacion4').value;
var marcoDeReferencia4 = document.getElementById('marcoDeReferencia4').value;
//var normaAprobatoriaDelPlanDeEstudioDisenoCurricular4 = document.getElementById('normaAprobatoriaDelPlanDeEstudioDisenoCurricular4').value;
var normaDeValidezNacional4 = document.getElementById('normaDeValidezNacional4').value;
var cargaHorariaHSReloj4 = document.getElementById('cargaHorariaHSReloj4').value;
var institucionesDondeSeDictaLaOferta4 =document.getElementById('institucionesDondeSeDictaLaOferta4').value;
var plazoDeVigencia4 = document.getElementById('plazoDeVigencia4').value;
var plazoDeValidezNacional4 = document.getElementById('plazoDeValidezNacional4').value;
var url4 = document.getElementById('url4').value;

 var data = {     
id:id4,
usuarioDeCreacion:usuarioDeCreacion4,
tipoDeOferta:tipoDeOfertaF4,
tipoDeGestion:tipoDeGestionF4,
tipoDeTitulos:tipoDeTitulosF4,
resolucionAprobatoria:resolucionAprobatoria4,
numeroDeAnexo:numeroAnexo4,
ambitoDeLaETP:ambitoDeLaETP4,
nominaDeFamiliasProfesionales:nominaDeFamiliasProfesionales4,
titulacionOTipoDeCertificacion:titulacionOTipoDeCertificacion4,
denominacionDeLaTitulacionOCertificacion:denominacionDeLaTitulacionOCertificacion4,
marcoDeReferencia:marcoDeReferencia4,
//normaAprobatoriaDelPlanDeEstudioDisenoCurricular:normaAprobatoriaDelPlanDeEstudioDisenoCurricular4,
normaDeValidezNacional:normaDeValidezNacional4,
cargaHorariaHSReloj:cargaHorariaHSReloj4,
   institucionesDondeSeDictaLaOferta:institucionesDondeSeDictaLaOferta4,
plazoDeVigencia:plazoDeVigencia4,
plazoDeValidezNacional:plazoDeValidezNacional4,
url:url4
  };


  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(data);

  // URL del endpoint de la API
  var apiUrl = urlBase + "/admin/resoluciones/crearResolucionETP";

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
      borrarFormulariosETP()
      
      retrieveGuests()
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}



function modificarResolucionETP(id) {
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
        const lenguajeDisciplina = data.lenguajeDisciplina;
        // const resolucionAprobatoriaDeCapacitacionLaboral = data.resolucionAprobatoriaDeCapacitacionLaboral;
        var id4 = document.getElementById('id4');
        var usuarioDeCreacion4 = document.getElementById('usuarioDeCreacion4');
        var tipoDeOfertaF4 = document.getElementById('tipoDeOfertaF4');
        var tipoDeGestionF4 = document.getElementById('tipoDeGestionF4');
        var tipoDeTitulosF4 = document.getElementById('tipoDeTitulosF4');
        var ambitoDeLaETP4 = document.getElementById('ambitoDeLaETP4');
        var nominaDeFamiliasProfesionales4 = document.getElementById('nominaDeFamiliasProfesionales4');
        var titulacionOTipoDeCertificacion4 = document.getElementById('titulacionOTipoDeCertificacion4');
        var denominacionDeLaTitulacionOCertificacion4 = document.getElementById('denominacionDeLaTitulacionOCertificacion4');
        var marcoDeReferencia4 = document.getElementById('marcoDeReferencia4');
        var normaAprobatoriaDelPlanDeEstudioDisenoCurricular4 = document.getElementById('normaAprobatoriaDelPlanDeEstudioDisenoCurricular4');
        var normaDeValidezNacional4 = document.getElementById('normaDeValidezNacional4');
        var cargaHorariaHSReloj4 = document.getElementById('cargaHorariaHSReloj4');
        var institucionesDondeSeDictaLaOferta4 = document.getElementById('institucionesDondeSeDictaLaOferta4');
        var plazoDeVigencia4 = document.getElementById('plazoDeVigencia4');
        var plazoDeValidezNacional4 = document.getElementById('plazoDeValidezNacional4');
        var url4 = document.getElementById('url4');
        id4.value=id;
        usuarioDeCreacion4.value=usuarioDeCreacion
        tipoDeOfertaF4.value=tipoDeOferta
        tipoDeGestionF4.value=tipoDeGestion
        tipoDeTitulosF4.value=tipoDeTitulos

        var resolucionAprobatoria4=document.getElementById("resolucionAprobatoria4");
        resolucionAprobatoria4.value=resolucionAprobatoria

        var numeroDeAnexo4=document.getElementById("numeroDeAnexo4");
        numeroDeAnexo4.value=numeroDeAnexo
        
        ambitoDeLaETP4.value=ambitoDeLaETP
        nominaDeFamiliasProfesionales4.value=nominaDeFamiliasProfesionales
        titulacionOTipoDeCertificacion4.value=titulacionOTipoDeCertificacion
        denominacionDeLaTitulacionOCertificacion4.value=denominacionDeLaTitulacionOCertificacion
        marcoDeReferencia4.value=marcoDeReferencia
       // normaAprobatoriaDelPlanDeEstudioDisenoCurricular4.value=normaAprobatoriaDelPlanDeEstudioDisenoCurricular
        normaDeValidezNacional4.value=normaDeValidezNacional
        cargaHorariaHSReloj4.value=cargaHorariaHSReloj
        institucionesDondeSeDictaLaOferta4.value=institucionesDondeSeDictaLaOferta
        plazoDeVigencia4.value=plazoDeVigencia
        plazoDeValidezNacional4.value=plazoDeValidezNacional
        url4.value=url
            

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

function abrirPopETP(id){

  modificarResolucionETP(id);
  const popupContainer = document.getElementById("containerGralForm");
   
popupContainer.style.display = "flex";
 

 
}


function borrarFormulariosETP(){
  var variables = [
    'id4', 'usuarioDeCreacion4', 'tipoDeOfertaF4', 'tipoDeGestionF4',
    'tipoDeTitulosF4', 'ambitoDeLaETP4', 'nominaDeFamiliasProfesionales4',
    'titulacionOTipoDeCertificacion4', 'denominacionDeLaTitulacionOCertificacion4',
    'marcoDeReferencia4', 'normaAprobatoriaDelPlanDeEstudioDisenoCurricular4',
    'normaDeValidezNacional4', 'cargaHorariaHSReloj4', 'plazoDeVigencia4',
    'plazoDeValidezNacional4', 'url4',"resolucionAprobatoria4",
    "numeroDeAnexo4",
  ];

  variables.forEach(function(variableName) {
    var element = document.getElementById(variableName);
    if (element) {
      element.value = '';
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

