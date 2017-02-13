// Esto es un comentario simple. Solo se utiliza en una linea

/* Comentario de bloque. Puede 
agrupar varias lineas de comentario.
Fin de comentario. */

/* Tipos */
var numero = 1;
var otronumero = 1.44997;
var cadena = 'texto';
var otracadena = "texto2";
var booleano = true;
var fecha = new Date();

/* Funciones */
var unaFuncion = function(){
  alert("hola mundo");
}
//unaFuncion();
function otraFuncion(){
  alert("hola de nuevo");
}
//otraFuncion();

/* Pintado de variables */
console.log(numero);
console.log(otronumero);
console.log(cadena);
console.log(otracadena);
console.log(booleano);
console.log(fecha);
console.log(unaFuncion);
console.log(otraFuncion);
//unaFuncion.call();
console.log();

/* Operaciones matemáticas: */
console.log(1 + 2 - 5 / 5 * 9);
console.log(5 % 2);

console.log();

/* Comparadores '<', '>', '<=', '>=', '!=' */
console.log(1 > 1);
console.log(1 < 5);
console.log(2 <= 3);
console.log(5 >= 8);

console.log();

/* Comparadores '==' y '===' */
console.log(1 == "1");
console.log(1 === "1");
console.log(1 === 1);
console.log(1 == true);

console.log();

console.log(0 == false);
console.log(0 == null);
console.log(0 == undefined);

console.log();

console.log(0 === "0");
console.log(0 === 0);
console.log(0 == "0");

console.log();

console.log(null == false);
console.log(undefined == false);

console.log();

/* Evaluaciones */
var variablePrueba;

console.log(variablePrueba);
if(variablePrueba){
  console.log("Esto nunca se va a imprimir");
}

variablePrueba = null;
console.log(variablePrueba);
if(variablePrueba){
  console.log("Esto tampoco se imprime");
}

variablePrueba = 0;
console.log(variablePrueba);
if(variablePrueba){
  console.log("Linea forever alone");
}
