// Detect visibility of sections and add 'visible' class
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Detectar el movimiento del mouse cerca de la parte superior
const navbar = document.querySelector('nav');

window.addEventListener('mousemove', (e) => {
  // Si el mouse está cerca de la parte superior (por ejemplo, dentro de los 50px)
  if (e.clientY < 50) {
    navbar.classList.add('visible'); // Mostrar la navbar
  } else {
    navbar.classList.remove('visible'); // Ocultar la navbar
  }
});


