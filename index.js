function cambio() {
  const templateElement = document.getElementById("template");

  const dataA = {
    letra: "A",
    texto1: "¿Cómo armar oraciones?",
    tituloinfo: "Visualizador de oraciones",
    parrafo:
      "Funciona para conformar oraciones a partir de las múltiples opciones de pictogramas",
    video_src: "https://www.youtube.com/embed/hvThJ7P4mIs",
  };

  const dataB = {
    letra: "B",
    texto1: "¿Comó correguir oraciones?",
    tituloinfo: "Botón de borrar",
    parrafo: "Funciona para borrar por completo o correguir oraciones.",
    video_src: "https://www.youtube.com/embed/tJWh1prT6no",
  };

  const dataC = {
    letra: "C",
    texto1: "¿Comó guardar oraciones?",
    tituloinfo: "Botón de Guardar",
    parrafo:
      "Funciona para guardar oraciones frecuentes y después visualizarlas sin necesidad de volverlas a escribir.",
    video_src: "https://www.youtube.com/embed/Rx-s9gRjHsM",
  };

  const dataD = {
    letra: "D",
    texto1: "Métricas y configuraciones",
    tituloinfo: "Botón de Ajustes",
    parrafo:
      "Funciona para acceder a las métricas de seguimiento (pictogramas/semana y oraciones guardadas/semana) y activar o desactivar la retroalimentación auditiva.",
    video_src: "https://www.youtube.com/embed/9hrS21Bt2S8",
  };

  const dataE = {
    letra: "E",
    texto1: "Oraciones guardadas",
    tituloinfo: "Botón de Oraciones",
    parrafo:
      "Funciona para acceder a todas las oraciones guardadas por el usuario, con el fin de que no necesite volverlas a escribir y que pueda visualizarlas con un clic.",
    video_src: "https://www.youtube.com/embed/ZtMdFUeuZjc",
  };

  const dataF = {
    letra: "F",
    texto1: "Caracterización",
    tituloinfo: "Botón de Personaje",
    parrafo:
      "Funciona para acceder a la ventana de personalización con el fin de que pueda caracterizar a su preferencia un avatar con el que interactuará en la aplicación.",
    video_src: "https://www.youtube.com/embed/WIVXlzUXQPc",
  };

  const dataG = {
    letra: "G",
    texto1: "Pictogramas y <br>Categorías semánticas",
    tituloinfo: "Botón de tableros",
    parrafo:
      "Funciona para acceder a los tableros que hacen referencia a las categorías semánticas compuestas por pictogramas y que tiene la finalidad de componer<br>oraciones.",
    video_src: "https://www.youtube.com/embed/YIrHgKDVZrk",
  };

  const dataH = {
    letra: "H",
    texto1: "Tableros rápidos",
    tituloinfo: "Deslizador de tableros",
    parrafo:
      "Funciona para tener un acceso rápido a los tableros y navegar por ellos sin necesidad de utilizar una ventana alterna, es una alternativa para accecer y visualizar los tableros rapidamente.",
    video_src: "https://www.youtube.com/embed/sEVtDjMYg6k",
  };

  const dataI = {
    letra: "I",
    texto1: "Pictogramas y modelos 3D",
    tituloinfo: "Pictogramas",
    parrafo:
      "Permite visualizar los pictogramas de una misma categoria semantica, con un clic se muestra una previsualización animada del pictograma y con otro clic adicional coloca este pictograma en la barra superior para conformar oraciones.",
    video_src: "https://www.youtube.com/embed/ScvVwR3eQ80",
  };

  const dataJ = {
    letra: "J",
    texto1: "Navegar entre pictogramas",
    tituloinfo: "Botónes de Navegación",
    parrafo:
      "Funciona para navegar entre todas las opciones de pictogramas de cada categría semantíca.",
    video_src: "https://www.youtube.com/embed/5VqgOPZMhHg",
  };

  const dataK = {
    letra: "K",
    texto1: "Activar animaciones",
    tituloinfo: "Botónes de Interpretar",
    parrafo:
      "Funciona para activar las retroalimentaciones visuales animadas porterior a la conformación de oraciones.",
    video_src: "https://www.youtube.com/embed/idQkZEqw8ZM",
  };

  const dataL = {
    letra: "L",
    texto1: "Visualizar animaciones",
    tituloinfo: "Visualizador 3D",
    parrafo:
      "Funciona para visualizar las animaciones 3D posterior a activar el botón de interpretar.",
    video_src: "https://www.youtube.com/embed/6KFgf-x7VH8",
  };


  function applyTemplate(data) {
    const templateHTML = `
        <img src="img/contenedor_carita.svg" alt="" class="carafeliz">
        <div class="contenedor_letra">
            <h2 class="letra">${data.letra}</h2>
        </div>
        <div class="contenido_info animate__animated animate__fadeIn">
        <span class="texto1">${data.texto1}</span>
        <div class="texto_info">
            <h2 class="tituloinfo">${data.tituloinfo}</h2>
            <p>${data.parrafo}</p>
        </div>
        <iframe class="video_info" src="${data.video_src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    `;

    const previousContent = templateElement.querySelector(".contenido_info");
    if (previousContent) {
      previousContent.classList.add(
        "animate__animated",
        "animate__fadeOutDown"
      );
      setTimeout(() => {
        previousContent.remove();
      }, 500); // Esperar 500ms antes de eliminar el contenido anterior
    }

    templateElement.innerHTML = templateHTML;
  }

  elementoA.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataA);
  });

  elementoB.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataB);
  });

  elementoC.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataC);
  });

  elementoD.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataD);
  });

  elementoE.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataE);
  });

  elementoF.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataF);
  });

  elementoG.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataG);
  });

  elementoH.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataH);
  });

  elementoI.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataI);
  });

  elementoJ.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataJ);
  });

  elementoK.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataK);
  });

  elementoL.addEventListener("click", () => {
    event.preventDefault();
    applyTemplate(dataL);
  });

  applyTemplate(dataA);
}

document.addEventListener("DOMContentLoaded", cambio);

function openModalDesktop() {

  var modal = document.getElementById("modal");
  
  var boton = document.getElementById("cerrarBoton");

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  boton.onclick = function() {
    closeModal();
  };

  function closeModal() {
    modal.style.opacity = "0";
    modal.style.transition = "opacity 0.4s ease-in-out";
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
  }
}

window.onload = function() {
  openModalDesktop();
};

