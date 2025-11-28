function Simbolo() {

    this.indice = Math.floor(Math.random() * 5) + 1;

    this.getImagen = function () {
        return "imagenes/simbolos/simbolo" + this.indice + ".png";
    };
}
