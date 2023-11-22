// var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
var urlBase = "http://localhost:8080";
function enviarDatosPOSTSH() {
  var id = document.getElementById("id3").value;
  var usuarioDeCreacion = document.getElementById("usuarioDeCreacion3").value;
  var tipoDeOferta = document.getElementById("tipoDeOfertaF3").value;
  var tipoDeGestion = document.getElementById("tipoDeGestionF3").value;
  var tipoDeTitulos = document.getElementById("tipoDeTitulosF3").value;
  var resolucionAprobatoria3=document.getElementById("resolucionAprobatoria3").value
  var numeroAnexo3=document.getElementById("numeroDeAnexo3").value
  var ambitoDeLaEducacion = document.getElementById("ambitoDeLaEducacion3").value;
  var disciplinaSociohumanistica = document.getElementById("disciplinaSociohumanistica3").value;
  var area = document.getElementById("area3").value;
  var denominacionDeLaTitulacionOCertificacion3 = document.getElementById("denominacionDeLaTitulacionOCertificacion3").value;
  var marcoDeReferencia = document.getElementById("marcoDeReferencia3").value;
  //var normaAprobatoriaDelPlanDeEstudioDisenoCurricular = document.getElementById("normaAprobatoriaDelPlanDeEstudioDisenoCurricular3").value;
  var normaDeValidezNacional = document.getElementById("normaDeValidezNacional3").value;
  var cargaHorariaHSReloj = document.getElementById("cargaHorariaHSReloj3").value;
  var institucionesDondeSeDictaLaOferta = document.getElementById("institucionesDondeSeDictaLaOferta3").value;
  var plazoDeVigencia = document.getElementById("plazoDeVigencia3").value;
  var plazoDeValidezNacional = document.getElementById("plazoDeValidezNacional3").value;
  var url = document.getElementById("url3").value

  var data = {     
    id:  id,
    usuarioDeCreacion:usuarioDeCreacion,
    tipoDeOferta:tipoDeOferta,
    tipoDeGestion:tipoDeGestion,
    tipoDeTitulos:tipoDeTitulos, 
    resolucionAprobatoria:resolucionAprobatoria3,
    numeroDeAnexo:numeroAnexo3,
    ambitoDeLaEducacion:ambitoDeLaEducacion,
    disciplinaSociohumanistica:disciplinaSociohumanistica,
    area:area,
    denominacionDeLaTitulacionOCertificacion: denominacionDeLaTitulacionOCertificacion3,
    marcoDeReferencia:marcoDeReferencia,
    //normaAprobatoriaDelPlanDeEstudioDisenoCurricular:normaAprobatoriaDelPlanDeEstudioDisenoCurricular,
    normaDeValidezNacional:normaDeValidezNacional,
    cargaHorariaHSReloj:cargaHorariaHSReloj,
    institucionesDondeSeDictaLaOferta:institucionesDondeSeDictaLaOferta,
    plazoDeVigencia:plazoDeVigencia,
    plazoDeValidezNacional:plazoDeValidezNacional,
    url:url
  };


  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(data);

  // URL del endpoint de la API
  var apiUrl = urlBase + "/admin/resoluciones/crearResolucionSH";

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
      borrarFormulariosSH()
      
      retrieveGuests()
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}



function modificarResolucionSH(id) {
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
        const marcoDeReferencia = data.marcoDeReferencia;
        const normaAprobatoriaDelPlanDeEstudioDisenoCurricular = data.normaAprobatoriaDelPlanDeEstudioDisenoCurricular;
        const normaDeValidezNacional = data.normaDeValidezNacional;
        const cargaHorariaHSReloj = data.cargaHorariaHSReloj;
        const plazoDeVigencia = data.plazoDeVigencia;
        const plazoDeValidezNacional = data.plazoDeValidezNacional;
        const ambitoDeLaEducacion = data.ambitoDeLaEducacion;
        const disciplinaSociohumanistica = data.disciplinaSociohumanistica;
        const area = data.area;
        const denominacionDeLaTitulacionOCertificacion = data.denominacionDeLaTitulacionOCertificacion;
        const institucionesDondeSeDictaLaOferta = data.institucionesDondeSeDictaLaOferta;
        const lenguajeDisciplina = data.lenguajeDisciplina;
        // const resolucionAprobatoriaDeCapacitacionLaboral = data.resolucionAprobatoriaDeCapacitacionLaboral;
        var id3 = document.getElementById("id3")
        var usuarioDeCreacion3 = document.getElementById("usuarioDeCreacion3")
        var tipoDeOferta3 = document.getElementById("tipoDeOfertaF3")
        var tipoDeGestion3 = document.getElementById("tipoDeGestionF3")
        var tipoDeTitulos3 = document.getElementById("tipoDeTitulosF3")
        var ambitoDeLaEducacion3 = document.getElementById("ambitoDeLaEducacion3")
        var disciplinaSociohumanistica3 = document.getElementById("disciplinaSociohumanistica3")
        var area3 = document.getElementById("area3")
        var denominacionDeLaTitulacionOCertificacion3 = document.getElementById("denominacionDeLaTitulacionOCertificacion3")
        var marcoDeReferencia3 = document.getElementById("marcoDeReferencia3")
        var normaAprobatoriaDelPlanDeEstudioDisenoCurricular3 = document.getElementById("normaAprobatoriaDelPlanDeEstudioDisenoCurricular3")
        var normaDeValidezNacional3 = document.getElementById("normaDeValidezNacional3")
        var cargaHorariaHSReloj3 = document.getElementById("cargaHorariaHSReloj3")
        var institucionesDondeSeDictaLaOferta3 = document.getElementById("institucionesDondeSeDictaLaOferta3")
        var plazoDeVigencia3 = document.getElementById("plazoDeVigencia3")
        var plazoDeValidezNacional3 = document.getElementById("plazoDeValidezNacional3")
        var url3 = document.getElementById("url3")
        id3.value=id
        usuarioDeCreacion3.value=usuarioDeCreacion
        tipoDeOferta3.value=tipoDeOferta
        tipoDeGestion3.value=tipoDeGestion
        tipoDeTitulos3.value=tipoDeTitulos
        ambitoDeLaEducacion3.value=ambitoDeLaEducacion
        disciplinaSociohumanistica3.value=disciplinaSociohumanistica
        area3.value=area
        denominacionDeLaTitulacionOCertificacion3.value = denominacionDeLaTitulacionOCertificacion
        marcoDeReferencia3.value=marcoDeReferencia
        //normaAprobatoriaDelPlanDeEstudioDisenoCurricular3.value=normaAprobatoriaDelPlanDeEstudioDisenoCurricular
        normaDeValidezNacional3.value=normaDeValidezNacional
        cargaHorariaHSReloj3.value=cargaHorariaHSReloj
        institucionesDondeSeDictaLaOferta3.value=institucionesDondeSeDictaLaOferta
        plazoDeVigencia3.value=plazoDeVigencia
        plazoDeValidezNacional3.value=plazoDeValidezNacional
        url3.value=url

        var resolucionAprobatoria3=document.getElementById("resolucionAprobatoria3");
        resolucionAprobatoria3.value=resolucionAprobatoria

        var numeroDeAnexo3=document.getElementById("numeroDeAnexo3");
        numeroDeAnexo3.value=numeroDeAnexo
            

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

function abrirPopSH(id){

  modificarResolucionSH(id);
  const popupContainer = document.getElementById("containerGralForm");
   
popupContainer.style.display = "flex";
 

 
}


function borrarFormulariosSH(){
  var fields = [
    "id3",
    "usuarioDeCreacion3",
    "tipoDeOfertaF3",
    "tipoDeGestionF3",
    "tipoDeTitulosF3",
    "resolucionAprobatoria3",
    "numeroDeAnexo3",
    "ambitoDeLaEducacion3",
    "disciplinaSociohumanistica3",
    "area3",
    "denominacionDeLaTitulacionOCertificacion3",
    "marcoDeReferencia3",
    "normaAprobatoriaDelPlanDeEstudioDisenoCurricular3",
    "normaDeValidezNacional3",
    "cargaHorariaHSReloj3",
    "institucionesDondeSeDictaLaOferta3",
    "plazoDeVigencia3",
    "plazoDeValidezNacional3",
    "url3"
  ];

  fields.forEach(function (field) {
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

