var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
//var urlBase = "http://localhost:8080";

function retrieveGuests() {
    var url = urlBase+'/filtro-resoluciones';

    var tipoDeOferta = document.getElementById("tipoOfertaOut").value
    var tipoDeGestion = document.getElementById("tipoGetionOut").value
    var tipoDeTitulos = document.getElementById("tipoTituloOut").value
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