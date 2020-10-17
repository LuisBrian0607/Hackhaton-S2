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

    let palabra_larga= arreglo_palabras[0];
    arreglo_palabras.map((palabra) => {
      if(palabra.length > palabra_larga.length) {
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
let verificador_numerico=function(numero){
    if(numero%2==0){
       return console.log(`el numero: ${numero}es par`);
    }else{
      return  console.log(`el numero: ${numero} es impar`);
    }   
}
verificador_numerico(15);
/*Ejercicio #3: Escriba una función de JavaScript que acepte una cadena
como parámetro y encuentre la palabra más corta dentro de la cadena */
console.log('***********Ejercicio3****************')
let buscador_menor = (frase) => {
    
    let arreglo_palabras = frase.split(" ");

    let palabra_menor= arreglo_palabras[0];
    arreglo_palabras.map((palabra) => {
      if(palabra.length < palabra_menor.length) {
        palabra_menor = palabra;
      }
    });
    return palabra_menor;
}
console.log(buscador_menor("no tengo tiempo para trabajar mañana"));

/*Ejercicio #4: Escriba una función de JavaScript para contar el número
de vocales en una cadena dada */
