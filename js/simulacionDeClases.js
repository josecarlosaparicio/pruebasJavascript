// Clase Libro
var Libro = (function() {
    // Atributo privados
    var id;  
    // Constructor
    function Libro(isbn, titulo, autor){      
      id =  Math.floor(Math.random() * 999999) + 10000;
      // Atributos publicos
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;  
      // Incrementado atributo estático
      Libro.contador++;
    }
    // Métodos públicos    
    Libro.prototype.generateIsbn = function() {
        this.isbn = calculoIsbn();
    };
    Libro.prototype.getIsbn = function() {
        return this.isbn;
    };
    Libro.prototype.getTitulo = function() {
        return this.titulo;
    };
    Libro.prototype.getAutor = function() {
        return this.autor;
    };
    Libro.prototype.setIsbn = function(isbn) {
        this.isbn = isbn;
    };
    Libro.prototype.setTitulo = function(titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function(autor) {
        this.autor = autor;
    };
    Libro.prototype.toString = function() {
        return id + " -> " + this.titulo + ", " + this.autor + " (" + this.isbn + ") - " + Libro.contador;
    };
    Libro.prototype.toJSON = function() {
        return {
            id: id,
            isbn: this.isbn,
            titulo: this.titulo,
            autor: this.autor
        };
    };
    // Métodos privados
    var calculoIsbn = function(){
        return (Math.floor(Math.random() * 99999999999999999999) + 10000000000000000000).toString();
    };
    return Libro;
}());

// Variable estática
Libro.contador = 0;
// Funciones estáticas
Libro.ordenarPorAutorAZ = function(objectLibro1,objectLibro2){
  return objectLibro1.getAutor() > objectLibro2.getAutor();
};
Libro.ordenarPorAutorZA = function(objectLibro1,objectLibro2){
  return objectLibro1.getAutor() < objectLibro2.getAutor();
};

/************************************************************************************/
var libro1 = new Libro();
libro1.generateIsbn();
libro1.setTitulo("Los pilares de la tierra");
libro1.setAutor("Ken Follett");
console.log(libro1);

var libro2 = new Libro();
libro2.generateIsbn();
libro2.setTitulo("El código Da Vinci");
libro2.setAutor("Dan Brown");
//console.log(libro2.toString());

var libro3 = new Libro();
libro3.generateIsbn();
libro3.setTitulo("El principito");
libro3.setAutor("Antoine de Saint-Exupéry");
//console.log(libro3.toString());

/*console.log(libro1.toString());
console.log(libro1);
console.log(typeof libro1);
console.log(libro1 instanceof Libro);
console.log(libro1.toJSON());*/


/***********************************************************************/

var biblioteca = [libro1, libro2, libro3];
var biblioteca2 = [libro1, libro2, libro3];

biblioteca.sort(Libro.ordenarPorAutorZA);
//console.log(biblioteca);
biblioteca2.sort(Libro.ordenarPorAutorAZ);
//console.log(biblioteca2);
