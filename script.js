document.addEventListener('DOMContentLoaded', function () {
  // Toggle de menú para pantallas pequeñas
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
    });

    // Cerrar menú si el usuario hace clic fuera (opcional)
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && e.target !== menuToggle) {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Funciones para cambiar el texto del hero (migradas del HTML inline)
  const texto_a_cambiar = document.getElementById('hero-text');
  const boton_volver = document.getElementById('volver');

  window.cambiar_texto = function () {
    if (boton_volver) boton_volver.style.display = 'inline-block';
    if (texto_a_cambiar) {
      texto_a_cambiar.innerHTML = 'En muebles soñados, te ayudamos a crear espacios con estilo y comodidad. Ofrecemos muebles con diseños modernos, funcionales y duraderos, con envío a todo el país y atención personalizada. Comprá fácil, seguro y desde donde estés...';
    }
  };

  window.cambiar_texto_1 = function () {
    if (boton_volver) boton_volver.style.display = 'none';
    if (texto_a_cambiar) texto_a_cambiar.innerHTML = 'Haciendo realidad<br>casas soñadas.';
  };

});