var urlBase = "https://inscripcionesagencia.bue.edu.ar/catalogodetitulaciones";
//var urlBase = "http://localhost:8080";
function toggleMobileNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("desloguearse").addEventListener("click", function() {
        var targetUrl = urlBase + "/logout";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", targetUrl, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // La llamada AJAX ha sido exitosa, redirigir al usuario
                window.location.href = targetUrl;
            }
        };
        xhr.send();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loguearse").addEventListener("click", function() {
        var targetUrl = urlBase + "/login";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", targetUrl, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // La llamada AJAX ha sido exitosa, redirigir al usuario
                window.location.href = targetUrl;
            }
        };
        xhr.send();
    });
});









