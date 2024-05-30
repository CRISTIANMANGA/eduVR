document.addEventListener('DOMContentLoaded', function() {
    // Efecto de desplazamiento suave para los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animaciones al cargar la página
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');

    elementsToAnimate.forEach(element => {
        element.classList.add('visible');
    });

    // Efecto de desplazamiento para el botón de regreso al inicio
    const scrollButton = document.querySelector('.scroll-btn');

    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Agregar efectos adicionales aquí, como eventos de clic, cambios de estilo, etc.
});
