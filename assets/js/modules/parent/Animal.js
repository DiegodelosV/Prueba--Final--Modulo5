export class Animal { //clase padre
 
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }


  getNombre() {
    return this._nombre;
  }

  getEdad() {
    return this._edad;
  }

  getImg() {
    return this._img;
  }

  getSonido() {
    return this._sonido;
  }

  // Método setter para modificar los comentarios
  setComentarios(comentarios) {
    this._comentarios = comentarios;
  }
}


export default Animal;