import Animal from "../parent/Animal.js"; //importar clase padre

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    const audio = document.getElementById("player");
    audio.setAttribute("src", this._sonido); //seleccion de sonido con uso de atributo de HTML
    audio.play();
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  aullar() {
    const audio = document.getElementById("player");
    audio.setAttribute("src", this._sonido);
    audio.play();
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  grunir() {
    const audio = document.getElementById("player");
    audio.setAttribute("src", this._sonido); 
    audio.play();
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  sisear() {
    const audio = document.getElementById("player");
    audio.setAttribute("src", this._sonido);
    audio.play();
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  chillar() {
    const audio = document.getElementById("player");
    audio.setAttribute("src", this._sonido);
    audio.play();
  }
}

export default { Leon, Lobo, Oso, Serpiente, Aguila }; //exportar clases
