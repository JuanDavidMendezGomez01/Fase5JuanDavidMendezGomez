
// 1. MENSAJE DINÁMICO DE BIENVENIDA
function mostrarMensajeBienvenida() {
    const elementoMensaje = document.getElementById("mensaje-bienvenida");
    const horaActual = new Date().getHours();
    let mensaje = "";

    // Lógica para saludar según la hora del día
    if (horaActual >= 5 && horaActual < 12) {
        mensaje = "Ohayō gozaimasu (おはようございます) - ¡Buenos días!";
    } else if (horaActual >= 12 && horaActual < 19) {
        mensaje = "Konnichiwa (こんにちは) - ¡Buenas tardes!";
    } else {
        mensaje = "Konbanwa (こんばんは) - ¡Buenas noches!";
    }

    // Inyectar el texto en el HTML (Manipulación del DOM)
    elementoMensaje.textContent = mensaje;
}

// 2. MENÚ DESPLEGABLE (Eventos del Mouse)
function configurarMenuDesplegable() {
    const menuElementos = document.getElementById("menu-elementos");
    const submenu = document.getElementById("submenu-elementos");

    // Evento al poner el ratón encima (mouseover)
    menuElementos.addEventListener("mouseover", function() {
        submenu.style.display = "flex";
    });

    // Evento al quitar el ratón (mouseout)
    menuElementos.addEventListener("mouseout", function() {
        submenu.style.display = "none";
    });
}

// 3. SLIDER DE IMÁGENES AUTOMÁTICO Y MANUAL
function inicializarSlider() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let slideIndex = 0;
    let intervaloSlider;

    // Función principal para cambiar la foto
    function mostrarSlide(index) {
        // Quitar la clase 'active' de todas las imágenes
        slides.forEach(slide => slide.classList.remove("active"));
        
        // Controlar los límites (volver al inicio o al final)
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        // Mostrar solo la imagen actual
        slides[slideIndex].classList.add("active");
    }

    // Evento: Botón Siguiente
    nextBtn.addEventListener("click", function() {
        slideIndex++;
        mostrarSlide(slideIndex);
        reiniciarIntervalo(); // Pausa y reinicia si el usuario hace clic
    });

    // Evento: Botón Anterior
    prevBtn.addEventListener("click", function() {
        slideIndex--;
        mostrarSlide(slideIndex);
        reiniciarIntervalo();
    });

    // Función para pasar fotos automáticamente (setInterval)
    function iniciarIntervalo() {
        intervaloSlider = setInterval(function() {
            slideIndex++;
            mostrarSlide(slideIndex);
        }, 4000); // Cambia cada 4 segundos
    }

    // Función para reiniciar el temporizador si el usuario usa los botones
    function reiniciarIntervalo() {
        clearInterval(intervaloSlider);
        iniciarIntervalo();
    }

    // Iniciar el slider
    mostrarSlide(slideIndex);
    iniciarIntervalo();
}

// EJECUTAR TODO CUANDO LA PÁGINA CARGUE
document.addEventListener("DOMContentLoaded", function() {
    mostrarMensajeBienvenida();
    configurarMenuDesplegable();
    inicializarSlider();
});