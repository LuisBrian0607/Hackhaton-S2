/*#0: Escriba una función de JavaScript que acepte una cadena
como parámetro y convierta la primera letra de cada palabra de la
cadena en mayúsculas*/
console.log('***********Ejercicio0****************')
let Convertion = (frase) => {
    let letraInicial = frase.charAt(0).toUpperCase();
    let cadena = frase.substring(1, frase.lenght);
    return letraInicial.concat(cadena);
}

console.log(Convertion('erika'));
/*Ejercicio #1: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más larga dentro de la cadena */
console.log('***********Ejercicio1****************')
let buscador = (frase) => {

    let arreglo_palabras = frase.split(" ");

    let palabra_larga = arreglo_palabras[0];
    arreglo_palabras.map((palabra) => {
        if (palabra.length > palabra_larga.length) {
            palabra_larga = palabra;
        }
    });
    return palabra_larga;
}
console.log(buscador("no tengo tiempo para trabajar mañana"));
/*
Ejercicio #2: Escriba una función recursiva de JavaScript que determine
si un número es par o impar*/
console.log('***********Ejercicio2****************')
let verificador_numerico = function (numero) {
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 == 0) {
             console.log('el numero:'+ [i] +'es par');
        } else {
             console.log('el numero:'+ [i] +'es impar');
        }
    }
}
verificador_numerico([15,4,3]);

/*Ejercicio #3: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más corta dentro de la cadena */
console.log('***********Ejercicio3****************')
let buscador_menor = (frase) => {

    let arreglo_palabras = frase.split(" ");

    let palabra_menor = arreglo_palabras[0];
    arreglo_palabras.map((palabra) => {
        if (palabra.length < palabra_menor.length) {
            palabra_menor = palabra;
        }
    });
    return palabra_menor;
}
console.log(buscador_menor("no tengo tiempo para trabajar mañana"));

/*Ejercicio #4: Escriba una función de JavaScript para contar el número
de vocales en una cadena dada */
console.log('***********Ejercicio4****************')
var ContadorVocales = function (frase) {
    var count = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() == 'a' || frase[i].toLowerCase() == 'e' || frase[i].toLowerCase() == 'i' || frase[i].toLowerCase() == 'o' || frase[i].toLowerCase() == 'u') {
            count += 1;
            console.log('las vocales encontradas son:'+frase[i])
        }
      
    } return count;
}
console.log(ContadorVocales('telfono de hoy'));

/*Ejercicio #5: Escriba una función de JavaScript para imprimir un número
entero con comas como miles de separadores*/
console.log('***********Ejercicio5****************')
function agregar_separador(numero) {
    var sep = ',';
    numero += '';
    let x = numero.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + sep + '$2');
    }
    return x1 + x2;
}
console.log(agregar_separador(204500.25));

