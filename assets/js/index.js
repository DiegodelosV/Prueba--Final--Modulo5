import { Leon, Lobo, Oso, Serpiente, Aguila } from "./modules/child/Especie.js"; //importar clases

const AnimalSalvajes = (() => {
  // funcion IIFE para encapsular el código
  const btn = document.getElementById("btnRegistrar");
  const previewDiv = document.getElementById("preview");
  const especieSelect = document.getElementById("animal");

  // Función para actualizar la imagen de previsualización
  const actualizarPrevisualizacion = () => {
    const especie = especieSelect.value;
    const imagenMap = {
      Leon: "./assets/imgs/Leon.png",
      Lobo: "./assets/imgs/Lobo.jpg",
      Oso: "./assets/imgs/Oso.jpg",
      Serpiente: "./assets/imgs/Serpiente.jpg",
      Aguila: "./assets/imgs/Aguila.png",
    };

    const imagen = imagenMap[especie] || "";

    // Mostrar la imagen en el div de previsualización
    previewDiv.innerHTML = imagen
      ? `<img src="${imagen}" alt="${especie}" class="img-fluid">`
      : "";
  };

  especieSelect.addEventListener("change", actualizarPrevisualizacion);
  //funcion para validar los datos del formulario
  const validarDatos = (especie, edad, comentarios) => {
    //funcion para validar datos
    if (
      especie === "Seleccione un animal" ||
      edad === "Seleccione un rango de años" ||
      comentarios === ""
    ) {
      alert("Todos los campos son obligatorios");
      return false;
    }
    return true;
  };
  // funcion para agregar los animales a la tabla con los datos del formulario
  btn.addEventListener("click", async () => {
    //evento en elemeto boton para agregar los animales
    try {
      const especie = document.getElementById("animal").value;
      const edad = document.getElementById("edad").value;
      const comentario = document.getElementById("comentarios").value;
      const preview = document.getElementById("preview");
      //validar datos del formulario
      const validar = validarDatos(especie, edad, comentario);
      {
        if (!validar) return;
      }

      const imagenMap = {
        Leon: "./assets/imgs/Leon.png",
        Lobo: "./assets/imgs/Lobo.jpg",
        Oso: "./assets/imgs/Oso.jpg",
        Serpiente: "./assets/imgs/Serpiente.jpg",
        Aguila: "./assets/imgs/Aguila.png",
      };

      const sonidoMap = {
        Leon: "./assets/sounds/Rugido.mp3",
        Lobo: "./assets/sounds/Aullido.mp3",
        Oso: "./assets/sounds/Grunido.mp3",
        Serpiente: "./assets/sounds/Siseo.mp3",
        Aguila: "./assets/sounds/Chillido.mp3",
      };

      const imagen = imagenMap[especie] || ""; //validar imagen
      const sonido = sonidoMap[especie] || ""; //validar sonido

      if (!imagen || !sonido) throw new Error("Animal no encontrado");

      let animal;
      switch (
        especie //validar especie y crear instancia de la clase
      ) {
        case "Leon":
          animal = new Leon(especie, edad, imagen, comentario, sonido);
          break;
        case "Lobo":
          animal = new Lobo(especie, edad, imagen, comentario, sonido);
          break;
        case "Oso":
          animal = new Oso(especie, edad, imagen, comentario, sonido);
          break;
        case "Serpiente":
          animal = new Serpiente(especie, edad, imagen, comentario, sonido);
          break;
        case "Aguila":
          animal = new Aguila(especie, edad, imagen, comentario, sonido);
          break;
        default:
          throw new Error("Animal no encontrado");
      }

      agregarAnimalATabla(animal);
      resetForm();
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

  const agregarAnimalATabla = (animal) => {
    //funcion para agregar los animales a la tabla
    const animalesContainer = document.getElementById("Animales");

    const animalCard = document.createElement("div");
    animalCard.className = "card text-white bg-dark m-2 shadow";
    animalCard.style.width = "13rem";
    animalCard.innerHTML = `
      <img src="${animal.getImg()}" class="card-img-top" alt="${animal.getNombre()}" data-bs-toggle="modal" data-bs-target="#animalModal">
     <div class="card-body text-center bg-secondary">
        <img src="./assets/imgs/audio.svg"  alt="Reproducir sonido" style="cursor: pointer; width: 40px; " onclick="new Audio('${animal.getSonido()}').play()">
      </div>
    `;

    animalesContainer.appendChild(animalCard);

    animalCard.querySelector("img").addEventListener("click", () => {
      mostrarModal(animal);
    });
  };

  const resetForm = () => {
    //funcion para resetear el formulario
    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
    previewDiv.innerHTML = "";
  };

  const mostrarModal = (animal) => {
    //funcion para mostrar el modal
    const modalTitle = document.querySelector("#animalModalLabel");
    const modalBody = document.querySelector("#animalModal .modal-body");

    modalTitle.textContent = animal.getNombre();
    modalBody.innerHTML = `
      <img src="${animal.getImg()}" class="card-img-top" alt="${animal.getNombre()}">
      <p>Edad: ${animal.getEdad()}</p>
      <p>Comentarios: ${animal._comentarios}</p>
    `;

    const animalModal = new bootstrap.Modal(
      document.getElementById("animalModal")
    );

    document
      .getElementById("animalModal")
      .addEventListener("hidden.bs.modal", function () {
        document
          .querySelectorAll(".modal-backdrop")
          .forEach((el) => el.remove()); //remueve el backdrop al cerrar el modal
      });

    animalModal.show();
  };

  return {
    agregarAnimalATabla,
    resetForm,
    mostrarModal,
  };
})();
