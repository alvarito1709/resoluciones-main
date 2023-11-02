//var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
var urlBase = "http://localhost:8080";

function retrieveGuests() {
    var url = urlBase+'/filtro-resoluciones';

    var tipoDeOferta = document.getElementById("tipoOfertaOut").value
    var tipoDeGestion = document.getElementById("tipoGetionOut").value
    let tipoDeTitulos ="";
    // switch(tipoDeOferta){
    //     case "EDUCACIÓN TECNICA PROFESIONAL":
    //          tipoDeTitulos = document.getElementById("tipoTituloOutETP").value
    //         break;
    //     case "SOCIO HUMANISTICA":
    //          tipoDeTitulos = document.getElementById("tipoTituloOutArSh").value
    //         break;
    //     case "ARTISTICA ESPECIFICA":
    //          tipoDeTitulos = document.getElementById("tipoTituloOutArSh").value
    //         break;
    //     case "CAPACITACIÓN LABORAL":
    //         tipoDeTitulos = document.getElementById("tipoTituloOutCp").value
    //         break;

    // }
   
    var vistaUsuario = true



    $.ajax({
        type: 'POST',
        url: url,
        data: {
            tipoDeOferta: tipoDeOferta,
            
            tipoDeGestion: tipoDeGestion,
            tipoDeTitulos: tipoDeTitulos,
            vistaUsuario: vistaUsuario,
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



var tipoOfertaOut = document.getElementById("tipoOfertaOut")

tipoOfertaOut.addEventListener("change",
    function (){
    var tipoDeOferta = document.getElementById("tipoOfertaOut").value

    if(tipoDeOferta == "EDUCACIÓN TECNICA PROFESIONAL"){
        console.log("esto esta ejecutando")
        document.querySelector(".ETP").style.display ="block";
        document.querySelector(".ArSh").style.display ="none";
        document.querySelector(".CP").style.display ="none";

    }
        if(tipoDeOferta == "SOCIO HUMANISTICA" || tipoDeOferta == "ARTISTICA ESPECIFICA"){
            console.log("esto esta ejecutando")
            document.querySelector(".ETP").style.display ="none";
            document.querySelector(".ArSh").style.display ="block";
            document.querySelector(".CP").style.display ="none";

        }

        if(tipoDeOferta == "CAPACITACIÓN LABORAL"){
            console.log("esto esta ejecutando")
            document.querySelector(".ETP").style.display ="none";
            document.querySelector(".ArSh").style.display ="none";
            document.querySelector(".CP").style.display ="block";

        }
})
