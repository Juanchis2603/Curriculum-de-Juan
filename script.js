// Mostrar proyectos
function mostrarProyecto(nombre) {
  // Oculta todos los proyectos
  document.querySelectorAll(".tarjeta-proyecto").forEach((proyecto) => {
    proyecto.style.display = "none";
  });

  // Quita la clase activa de todos los botones
  document.querySelectorAll(".selector-proyecto").forEach((boton) => {
    boton.classList.remove("activo");
  });

  // Muestra el proyecto seleccionado y activa su botón
  const proyecto = document.getElementById(`proyecto-${nombre}`);
  const boton = document.querySelector(
    `.selector-proyecto[onclick="mostrarProyecto('${nombre}')"]`
  );

  if (proyecto) proyecto.style.display = "flex";
  if (boton) boton.classList.add("activo");
}

// Animación de scroll para las secciones
document.addEventListener("DOMContentLoaded", function () {
  // Muestra el primer proyecto por defecto
  mostrarProyecto("daka");

  // Observador de intersección para animaciones
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observa todas las secciones
  document
    .querySelectorAll(".seccion, .seccion-destacada")
    .forEach((section) => {
      observer.observe(section);
    });
});

// Efecto hover suave para los botones de navegación
document.querySelectorAll(".navegacion button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
    button.style.boxShadow = "0 5px 15px rgba(26, 188, 156, 0.3)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
    button.style.boxShadow = "none";
  });
});

// Animación para las tarjetas de habilidades
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("click", function () {
    this.querySelector(".card-inner").classList.toggle("flipped");
  });
});

// Efecto hover para las tarjetas de contacto
document.querySelectorAll(".contacto-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(41, 128, 185, 0.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
  });
});

// Observar también la sección de contacto
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observa la sección de contacto
  document.querySelectorAll(".seccion-contacto").forEach((section) => {
    observer.observe(section);
  });
});

// Efecto hover para botones de ver proyecto
document.querySelectorAll(".btn-ver-proyecto").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
    button.style.boxShadow = "0 5px 15px rgba(26, 188, 156, 0.3)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
    button.style.boxShadow = "none";
  });
});
