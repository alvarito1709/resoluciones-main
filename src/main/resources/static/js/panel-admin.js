var urlBase = "https://inscripcionesagencia.com.ar/resoluciones-v2";
//var urlBase = "http://localhost:8080";
function validarDatos() {

    let tipoDeOferta = document.getElementById("tipoOfertaOut").value
    let tipoDeGestion = document.getElementById("tipoGetionOut").value
    let tipoDeTitulo = document.getElementById("tipoTituloOut").value
    let exportarResoluciones = document.getElementById("exportarResoluciones");
    // let cargaMasica = document.getElementById("cargaMasica");
    let cargaResolucion = document.getElementById("cargaResolucion");

    let botonesMenu = [exportarResoluciones, cargaResolucion]

    if (tipoDeOferta === "CAPACITACIÓN LABORAL") {

        for (let iterator of botonesMenu) {
            iterator.classList.remove("noVisible")
        }
        document.getElementById("grafico").setAttribute("style", "display:none !important")

    } else if (tipoDeOferta !== "" && tipoDeGestion !== "" & tipoDeTitulo != "") {
        
        for (let iterator of botonesMenu) {
            iterator.classList.remove("noVisible")
        }
        document.getElementById("grafico").setAttribute("style", "display:none !important")
       
    } else {
       
        for (let iterator of botonesMenu) {
            iterator.classList.add("noVisible")
        }
        document.getElementById("grafico").removeAttribute("style", "display:none !important")
        var element = document.getElementById("tablaQueCargo")
        element.remove();
       
    }

    CualFormularioVer(tipoDeOferta)
}
setInterval(function () {
    validarDatos()
}, 500);


function retrieveGuests() {
    var url = urlBase + '/filtro-resoluciones';

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


var totalProductos = document.getElementById('totalResolInput').value;
var productosVencidos = document.getElementById('menosUnMesInput').value;
var productosPorVencer =document.getElementById('entreUnMesYSeisMesesInput').value;
var productosEnBuenEstado =document.getElementById('masSeisMesesInput').value;




// var ctx = document.getElementById('productChart').getContext('2d');

// var productChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['RIESGO/VENCIDO', 'POR VENCER', 'CON PLAZO', 'TOTAL'],
//         datasets: [{
//             data: [productosVencidos, productosPorVencer, productosEnBuenEstado, totalProductos],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.8)',
//                 'rgba(255, 205, 86, 0.8)',
//                 'rgba(75, 192, 192, 0.8)',
//                 'rgba(54, 162, 235, 0.8)' // Nuevo color
//             ],
//             hoverBackgroundColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(255, 205, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(54, 162, 235, 1)' // Nuevo color
//             ],
//             borderWidth: 2,
//             borderColor: 'rgba(255, 255, 255, 0.8)',

//         }]
//     },
//     options: {
//         responsive: true,

//         maintainAspectRatio: true,
//         cutoutPercentage: 20, // Espacio central para mostrar el número total
//         legend: {
//             position: 'top'
//         }
//     }
// });



function crearBotonEnvio() {
    const contenedorBotones = document.getElementById("contenedorBotones");
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = "BUSCAR  ";
    nuevoBoton.id = "botonBuscarResoluciones";
    nuevoBoton.classList.add("boton");
    nuevoBoton.classList.add("amarillo");

    const iconSpan = document.createElement("span");
    iconSpan.classList.add("iconify");
    iconSpan.setAttribute("data-icon", "bi:send-fill"); // Icono proporcionado



    nuevoBoton.addEventListener("click", () => {
        retrieveGuests()
    });

    contenedorBotones.appendChild(nuevoBoton);
}
crearBotonEnvio()


const TG1 = document.getElementById("TG1");
const TG2 = document.getElementById("TG2");
const TG3 = document.getElementById("TG3");
const TG4 = document.getElementById("TG4");

const TT1 = document.getElementById("TT1");
const TT2 = document.getElementById("TT2");
const TT3 = document.getElementById("TT3");
const TT4 = document.getElementById("TT4");
const botonBuscarResoluciones = document.getElementById("botonBuscarResoluciones");

let botones = [TG1, TG2, TG3, TG4, TT1, TT2, TT3, TT4, botonBuscarResoluciones]
for (const iterator of botones) {
    iterator.classList.add("noVisible")
}

var identidicador = 0;

//crea la linea de botones
const contenedorBotones = document.getElementById("contenedorBotones");
function crearNuevoBoton(name, clase, padre, siguiente) {
    var idCombinado = padre + identidicador
    // Crea un elemento de botón
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = name;
    nuevoBoton.id = idCombinado;

    nuevoBoton.classList.add("boton"); // Agrega una clase para estilos opcionales
    nuevoBoton.classList.add(clase); // Agrega una clase para estilos opcionales
    nuevoBoton.addEventListener("click", () => {
        removeElementById(idCombinado, padre, siguiente);
    });

    // Agrega el nuevo botón al contenedor de botones
    contenedorBotones.appendChild(nuevoBoton);
    toggleNoVisible(padre);
    toggleNoVisible(siguiente);
    for (const iterator of botones) {
        console.log(iterator.id)
    }
    viewOrNotButtom(name, botones)
    if (padre === "tipoOferta") {
        setTipoOferta(name)

    }
    if (padre === "tipoDeGestion") {
        setTipoGetion(name)
    }
    if (padre === "tipoTitulo") {
        setTipoTitulo(name)
    }

    identidicador++;
}



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
function removeElementById(elementId, padre, siguiente) {
    document.getElementById('botonBuscarResoluciones').classList.add('noVisible')
    switch (padre) {
        case 'tipoOferta':
            tipoOferta.classList.remove("noVisible")
            tipoDeGestion.classList.add("noVisible")
            tipoTitulo.classList.add("noVisible")
            for (let index = 0; index < 100; index++) {
                var element = document.getElementById("tipoDeGestion" + index);
                if (element) {
                    element.remove();
                }

            }
            for (let index = 0; index < 100; index++) {
                var element = document.getElementById("tipoTitulo" + index);
                if (element) {
                    element.remove();
                }

            }
            setTipoOferta("")
            setTipoGetion("")
            setTipoTitulo("")
            break;
        case 'tipoDeGestion':
            tipoOferta.classList.add("noVisible")
            tipoDeGestion.classList.remove("noVisible")
            tipoTitulo.classList.add("noVisible")
            for (let index = 0; index < 100; index++) {
                var element = document.getElementById("tipoDeGestion" + index);
                if (element) {
                    element.remove();
                }

            }
            for (let index = 0; index < 100; index++) {
                var element = document.getElementById("tipoTitulo" + index);
                if (element) {
                    element.remove();
                }

            }

            setTipoGetion("")
            setTipoTitulo("")
            break;
        case 'tipoTitulo':
            tipoOferta.classList.add("noVisible")
            tipoDeGestion.classList.add("noVisible")
            tipoTitulo.classList.remove("noVisible")
            for (let index = 0; index < 100; index++) {
                var element = document.getElementById("tipoTitulo" + index);
                if (element) {
                    element.remove();
                }

            }

            setTipoTitulo("")
            break;
    }

    var element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }

}
function viewOrNotButtom(name, botones) {
    switch (name) {
        case "EDUCACIÓN TECNICA PROFESIONAL":
            for (const iterator of botones) {
                if (iterator.id === "TG1" || iterator.id === "TG2" ||
                    iterator.id === "TT1" || iterator.id === "TT2" ||
                    iterator.id === "TT3"
                ) {
                    iterator.classList.remove("noVisible")
                } else {
                    iterator.classList.add("noVisible")
                }

            }

            break;
        case "SOCIO HUMANISTICA":
            for (const iterator of botones) {
                if (iterator.id === "TG3" || iterator.id === "TG2" ||
                    iterator.id === "TT1" || iterator.id === "TT4") {
                    iterator.classList.remove("noVisible")
                } else {
                    iterator.classList.add("noVisible")
                }
            }

            break;
        case "ARTISTICA ESPECIFICA":
            for (const iterator of botones) {
                if (iterator.id === "TG4" || iterator.id === "TG2"
                    || iterator.id === "TT1" || iterator.id === "TT4"
                ) {
                    iterator.classList.remove("noVisible")
                } else {
                    iterator.classList.add("noVisible")
                }
            }
            break;
        case "ARTISTICA ESPECIFICA":
            for (const iterator of botones) {
                if (iterator.id === "TG4" || iterator.id === "TG2") {
                    iterator.classList.remove("noVisible")
                } else {
                    iterator.classList.add("noVisible")
                }
            }
            break;

    }
}

function setTipoOferta(valor) {
    let tipoDeOferta = document.getElementById("tipoOfertaOut")
    tipoDeOferta.value = valor;



}
function setTipoGetion(valor) {
    let tipoDeGestion = document.getElementById("tipoGetionOut")
    tipoDeGestion.value = valor;


}
function setTipoTitulo(valor) {
    let tipoDeTitulo = document.getElementById("tipoTituloOut")
    tipoDeTitulo.value = valor;


}



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



function borrarFormularios(num) {
    var id1 = document.getElementById("id" + num);
    id1.value = "";

    var usuarioDeCreacion1 = document.getElementById("usuarioDeCreacion" + num);
    usuarioDeCreacion1.value = ""

    var tipoDeOferta1 = document.getElementById("tipoDeOferta" + num);
    tipoDeOferta1.value = ""

    var tipoDeGestion1 = document.getElementById("tipoDeGestion" + num);
    tipoDeGestion1.value = ""

    var tipoDeTitulos1 = document.getElementById("tipoDeTitulos" + num);
    tipoDeTitulos1.value = ""

    var ambitoDeLaEducacion1 = document.getElementById("ambitoDeLaEducacion" + num);
    ambitoDeLaEducacion1.value = ""

    var lenguajeDisciplina1 = document.getElementById("lenguajeDisciplina" + num);
    lenguajeDisciplina1.value = ""

    var area1 = document.getElementById("area" + num);
    area1.value = ""

    var denominacionDeLaTitulacionOCertificacion1 = document.getElementById("denominacionDeLaTitulacionOCertificacion" + num);
    denominacionDeLaTitulacionOCertificacion1.value = ""

    var marcoDeReferencia1 = document.getElementById("marcoDeReferencia" + num);
    marcoDeReferencia1.value = ""

    var normaAprobatoriaDelPlanDeEstudioDisenoCurricular1 = document.getElementById("normaAprobatoriaDelPlanDeEstudioDisenoCurricular" + num);
    normaAprobatoriaDelPlanDeEstudioDisenoCurricular1.value = ""

    var normaDeValidezNacional1 = document.getElementById("normaDeValidezNacional" + num);
    normaDeValidezNacional1.value = ""

    var cargaHorariaHSReloj1 = document.getElementById("cargaHorariaHSReloj" + num);
    cargaHorariaHSReloj1.value = ""

    var institucionesDondeSeDictaLaOferta1 = document.getElementById("institucionesDondeSeDictaLaOferta" + num);
    institucionesDondeSeDictaLaOferta1.value = ""

    var plazoDeVigencia1 = document.getElementById("plazoDeVigencia" + num);
    plazoDeVigencia1.value = ""

    var plazoDeValidezNacional1 = document.getElementById("plazoDeValidezNacional" + num);
    plazoDeValidezNacional1.value = ""

    var url1 = document.getElementById("url" + num);
    url1.value = ""

}


function abrirCargaReso() {

    const popupContainer = document.getElementById("containerGralForm");

    popupContainer.style.display = "flex";



}
function abrirCargaResoParaCrear() {
    let tipoDeOferta = document.getElementById("tipoOfertaOut").value
    let tipoDeGestion = document.getElementById("tipoGetionOut").value
    let tipoDeTitulo = document.getElementById("tipoTituloOut").value
    let incorporarTipoDeOferta = ""
    let incorporarTipoDeGestion = ""
    let incorporarTipoDeTitulo = ""
    switch (tipoDeOferta) {
        case "ARTISTICA ESPECIFICA":
            incorporarTipoDeOferta = document.getElementById("tipoDeOfertaF1")
            incorporarTipoDeGestion = document.getElementById("tipoDeGestionF1")
            incorporarTipoDeTitulo = document.getElementById("tipoDeTitulosF1")
            incorporarTipoDeOferta.value =tipoDeOferta 
            incorporarTipoDeGestion.value =tipoDeGestion 
            incorporarTipoDeTitulo.value =tipoDeTitulo
            break;
        case "SOCIO HUMANISTICA":
            incorporarTipoDeOferta = document.getElementById("tipoDeOfertaF3")
            incorporarTipoDeGestion = document.getElementById("tipoDeGestionF3")
            incorporarTipoDeTitulo = document.getElementById("tipoDeTitulosF3")
            incorporarTipoDeOferta.value =tipoDeOferta 
            incorporarTipoDeGestion.value =tipoDeGestion 
            incorporarTipoDeTitulo.value =tipoDeTitulo
            break;
        case "EDUCACIÓN TECNICA PROFESIONAL":
            incorporarTipoDeOferta = document.getElementById("tipoDeOfertaF4")
            incorporarTipoDeGestion = document.getElementById("tipoDeGestionF4")
            incorporarTipoDeTitulo = document.getElementById("tipoDeTitulosF4")
            incorporarTipoDeOferta.value =tipoDeOferta 
            incorporarTipoDeGestion.value =tipoDeGestion 
            incorporarTipoDeTitulo.value =tipoDeTitulo
            break;
        case "CAPACITACIÓN LABORAL":
            incorporarTipoDeOferta = document.getElementById("tipoDeOfertaF2")
           
            incorporarTipoDeOferta.value =tipoDeOferta 
           
            break;
    }
    const popupContainer = document.getElementById("containerGralForm");
    popupContainer.style.display = "flex";

   

}


function CualFormularioVer(tipoDeOferta) {
    const adicionales = ["AR", "CPL", "SH", "ETP"];
    let adicional = "";

    switch (tipoDeOferta) {
        case "ARTISTICA ESPECIFICA":
            adicional = "AR";
            break;
        case "SOCIO HUMANISTICA":
            adicional = "SH";
            break;
        case "EDUCACIÓN TECNICA PROFESIONAL":
            adicional = "ETP";
            break;
        case "CAPACITACIÓN LABORAL":
            adicional = "CPL";
            break;
    }

    for (const adicionalItem of adicionales) {
        const displayValue = adicional === adicionalItem ? "block" : "none";
        document.getElementById("formResolucion" + adicionalItem).style.display = displayValue;
        document.getElementById("enviarFormPost" + adicionalItem).style.display = displayValue;
    }
}

function eliminarResolucion(id) {
  
    var apiUrl = urlBase + "/admin/resoluciones/delete";
  
    // Configuración de la solicitud
    var requestOptions = {
      method: 'DELETE'
    };
  
    // Realizar la solicitud DELETE
    fetch(apiUrl + "?id=" + id, requestOptions)
      .then(response => {
        if (response.status === 204) {
          console.log('Resolución eliminada con éxito');
          retrieveGuests();
          // Realizar cualquier acción adicional después de eliminar la resolución
        } else if (response.status === 404) {
          console.log('Resolución no encontrada');
        } else {
          console.log('Error al eliminar la resolución');
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  }
  const confirmationPopupDelete = document.getElementById('confirmationPopupDelete');
  const cancelButtonDelete = document.getElementById('cancelButtonDelete');
  const confirmButtonDelete = document.getElementById('confirmButtonDelete');
  
  // Mostrar el popup de confirmación
  function showConfirmationPopupDelete(id) {
      var resolucion=document.getElementById("resolucionAEliminar")
      resolucion.value=id
      confirmationPopupDelete.style.display = 'flex';
  }
  
  // Ocultar el popup de confirmación
  function hideConfirmationPopupDelete() {
      var resolucion=document.getElementById("resolucionAEliminar")
      resolucion.value=""
      confirmationPopupDelete.style.display = 'none';
  }
  
  // Función para confirmar la eliminación
  function confirmDeletion() {
      
      var resolucion=document.getElementById("resolucionAEliminar").value
      eliminarResolucion(resolucion)
      hideConfirmationPopupDelete();
  }
  
  
  cancelButtonDelete.addEventListener('click', hideConfirmationPopupDelete);
  confirmButtonDelete.addEventListener('click', confirmDeletion);