var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
//var urlBase = "http://localhost:8080";
function enviarDatosPOSTAR() {
  var url1 = document.getElementById("url1");
  var id1 = document.getElementById("id1");
  var usuarioDeCreacion1 = document.getElementById("usuarioDeCreacion1");
  var tipoDeOferta1 = document.getElementById("tipoDeOfertaF1");
  var tipoDeGestion1 = document.getElementById("tipoDeGestionF1");
  var tipoDeTitulos1 = document.getElementById("tipoDeTitulosF1");

  var resolucionAprobatoria1=document.getElementById("resolucionAprobatoria1")
  var numeroAnexo1=document.getElementById("numeroDeAnexo1")


  var ambitoDeLaEducacion1 = document.getElementById("ambitoDeLaEducacion1");
  var lenguajeDisciplina1 = document.getElementById("lenguajeDisciplina1");
  var area1 = document.getElementById("area1");
  var denominacionDeLaTitulacionOCertificacion1 = document.getElementById("denominacionDeLaTitulacionOCertificacion1");
  var marcoDeReferencia1 = document.getElementById("marcoDeReferencia1");
  // var normaAprobatoriaDelPlanDeEstudioDisenoCurricular1 = document.getElementById("normaAprobatoriaDelPlanDeEstudioDisenoCurricular1");
  var normaDeValidezNacional1 = document.getElementById("normaDeValidezNacional1");
  var cargaHorariaHSReloj1 = document.getElementById("cargaHorariaHSReloj1");
  var institucionesDondeSeDictaLaOferta1 = document.getElementById("institucionesDondeSeDictaLaOferta1");
  var plazoDeVigencia1 = document.getElementById("plazoDeVigencia1");
  var plazoDeValidezNacional1 = document.getElementById("plazoDeValidezNacional1");
  var nombreDeLaOfertaEducativa1 = document.getElementById("nombreDeLaOfertaEducativa");

  // Crear un objeto con los datos que deseas enviar
  var data = {
    url: url1.value,
    id: id1.value,
    usuarioDeCreacion: usuarioDeCreacion1.value,
    tipoDeOferta: tipoDeOferta1.value,
    tipoDeGestion: tipoDeGestion1.value,
    tipoDeTitulos: tipoDeTitulos1.value,
    resolucionAprobatoria:resolucionAprobatoria1.value,
    numeroDeAnexo:numeroAnexo1.value,

    ambitoDeLaEducacion: ambitoDeLaEducacion1.value,
    lenguajeDisciplina: lenguajeDisciplina1.value,
    area: area1.value,
    denominacionDeLaTitulacionOCertificacion: denominacionDeLaTitulacionOCertificacion1.value,
    marcoDeReferencia: marcoDeReferencia1.value,
   // normaAprobatoriaDelPlanDeEstudioDisenoCurricular: normaAprobatoriaDelPlanDeEstudioDisenoCurricular1.value,
    normaDeValidezNacional: normaDeValidezNacional1.value,
    cargaHorariaHSReloj: cargaHorariaHSReloj1.value,
    institucionesDondeSeDictaLaOferta: institucionesDondeSeDictaLaOferta1.value,
    plazoDeVigencia: plazoDeVigencia1.value,
    plazoDeValidezNacional: plazoDeValidezNacional1.value,
      nombreDeLaOfertaEducativa: nombreDeLaOfertaEducativa1.value,
  };


  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(data);

  // URL del endpoint de la API
  var apiUrl = urlBase + "/admin/resoluciones/crearResolucionAR";

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
      borrarFormulariosAR()
      
      retrieveGuests()
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}



function modificarResolucionAR(id) {
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
        const nombreDeLaOfertaEducativa =data.nombreDeLaOfertaEducativa
        // const resolucionAprobatoriaDeCapacitacionLaboral = data.resolucionAprobatoriaDeCapacitacionLaboral;
// 
console.log('ID:', id);
console.log('Usuario de Creación:', usuarioDeCreacion);
console.log('Usuario de Última Modificación:', usuarioDeUltimaModificacion);
console.log('Fecha y Hora de Creación:', fechaYHoraDeCreacion);
console.log('Fecha y Hora de Última Modificación:', fechaYHoraDeUltimaModificacion);
console.log('URL:', url);
console.log('Tipo de Oferta:', tipoDeOferta);
console.log('Tipo de Gestión:', tipoDeGestion);
console.log('Tipo de Títulos:', tipoDeTitulos);
console.log('Ámbito de la ETP:', ambitoDeLaETP);
console.log('Nómina de Familias Profesionales:', nominaDeFamiliasProfesionales);
console.log('Titulación o Tipo de Certificación:', titulacionOTipoDeCertificacion);
console.log('Denominación de la Titulación o Certificación:', denominacionDeLaTitulacionOCertificacion);
console.log('Marco de Referencia:', marcoDeReferencia);
console.log('Norma Aprobatoria del Plan de Estudio/ Diseño Curricular:', normaAprobatoriaDelPlanDeEstudioDisenoCurricular);
console.log('Norma de Validez Nacional:', normaDeValidezNacional);
console.log('Carga Horaria (HS Reloj):', cargaHorariaHSReloj);
console.log('Plazo de Vigencia:', plazoDeVigencia);
console.log('Plazo de Validez Nacional:', plazoDeValidezNacional);
console.log('Ámbito de la Educación:', ambitoDeLaEducacion);
console.log('Disciplina Sociohumanística:', disciplinaSociohumanistica);
console.log('Área:', area);
console.log('Instituciones donde se Dicta la Oferta:', institucionesDondeSeDictaLaOferta);
console.log('Lenguaje Disciplina:', lenguajeDisciplina);
// console.log('Resolución Aprobatoria de Capacitación Laboral:', resolucionAprobatoriaDeCapacitacionLaboral);

// 

        var id1 = document.getElementById("id1");
        id1.value = id;

        var usuarioDeCreacion1 = document.getElementById("usuarioDeCreacion1");
        usuarioDeCreacion1.value = usuarioDeCreacion

        var tipoDeOferta1 = document.getElementById("tipoDeOfertaF1");
        tipoDeOferta1.value = tipoDeOferta

        var tipoDeGestion1 = document.getElementById("tipoDeGestionF1");
        tipoDeGestion1.value = tipoDeGestion

        var tipoDeTitulos1 = document.getElementById("tipoDeTitulosF1");
        tipoDeTitulos1.value = tipoDeTitulos

        var resolucionAprobatoria1=document.getElementById("resolucionAprobatoria1");
        resolucionAprobatoria1.value=resolucionAprobatoria

        var numeroDeAnexo1=document.getElementById("numeroDeAnexo1");
        numeroDeAnexo1.value=numeroDeAnexo




        var ambitoDeLaEducacion1 = document.getElementById("ambitoDeLaEducacion1");
        ambitoDeLaEducacion1.value = ambitoDeLaEducacion

        var lenguajeDisciplina1 = document.getElementById("lenguajeDisciplina1");
        lenguajeDisciplina1.value = lenguajeDisciplina

        var area1 = document.getElementById("area1");
        area1.value = area

        var denominacionDeLaTitulacionOCertificacion1 = document.getElementById("denominacionDeLaTitulacionOCertificacion1");
        denominacionDeLaTitulacionOCertificacion1.value = denominacionDeLaTitulacionOCertificacion

        var marcoDeReferencia1 = document.getElementById("marcoDeReferencia1");
        marcoDeReferencia1.value = marcoDeReferencia

        //var normaAprobatoriaDelPlanDeEstudioDisenoCurricular1 = document.getElementById("normaAprobatoriaDelPlanDeEstudioDisenoCurricular1");
        //normaAprobatoriaDelPlanDeEstudioDisenoCurricular1.value = normaAprobatoriaDelPlanDeEstudioDisenoCurricular

        var normaDeValidezNacional1 = document.getElementById("normaDeValidezNacional1");
        normaDeValidezNacional1.value = normaDeValidezNacional

        var cargaHorariaHSReloj1 = document.getElementById("cargaHorariaHSReloj1");
        cargaHorariaHSReloj1.value = cargaHorariaHSReloj

        var institucionesDondeSeDictaLaOferta1 = document.getElementById("institucionesDondeSeDictaLaOferta1");
        institucionesDondeSeDictaLaOferta1.value = institucionesDondeSeDictaLaOferta

        var plazoDeVigencia1 = document.getElementById("plazoDeVigencia1");
        plazoDeVigencia1.value = plazoDeVigencia

        var plazoDeValidezNacional1 = document.getElementById("plazoDeValidezNacional1");
        plazoDeValidezNacional1.value = plazoDeValidezNacional

        var url1 = document.getElementById("url1");
        url1.value = url

          var nombreDeLaOfertaEducativa1 = document.getElementById("nombreDeLaOfertaEducativa");
          nombreDeLaOfertaEducativa1.value = nombreDeLaOfertaEducativa
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

function abrirPopAR(id){
  modificarResolucionAR(id);
  const popupContainer = document.getElementById("containerGralForm");
   
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
    "resolucionAprobatoria1",
    "numeroDeAnexo1",
    "area1",
    "denominacionDeLaTitulacionOCertificacion1",
    "marcoDeReferencia1",
    "normaAprobatoriaDelPlanDeEstudioDisenoCurricular1",
    "normaDeValidezNacional1",
    "cargaHorariaHSReloj1",
    "institucionesDondeSeDictaLaOferta1",
    "plazoDeVigencia1",
    "plazoDeValidezNacional1",
      "nombreDeLaOfertaEducativa"
  ];

  fields1.forEach(function (field) {
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