var urlBase = "https://inscripcionesagencia.com.ar/resoluciones-v2";
//var urlBase = "http://localhost:8080";
document.getElementById('exportarResoluciones').addEventListener('click', function () {
    let tipoDeOferta = document.getElementById("tipoOfertaOut").value
   
    var url = urlBase+"/admin/downloadExcel?tipoDeOferta=" + tipoDeOferta;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
        if (xhr.status === 200) {
            var blob = xhr.response;
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download =tipoDeOferta+'.xlsx'; // Nombre del archivo de descarga
            link.click();
        }
    };

    xhr.send();
});


