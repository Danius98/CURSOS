var color = ["red", "yellow", "blue"]
let contador = -1

function cambiar(){
    contador++
    if(contador >= color.length){
        contador = 0
    }
    return color[contador]
}

console.log(cambiar())
console.log(cambiar())
console.log(cambiar())
console.log(cambiar())
console.log(cambiar())
console.log(cambiar())

var array = [1, 2, 3]
var array1 = []

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for(var i = 0; i < array.length; i++){
      if(array.includes(elemento)){
        return true
      } 
      return false
    }
  }

console.log(arrayContiene(array, true))

var numero = [0,1,2,3]

function agregarNumeros(numero) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var total = 0
    for(var i = 0; i < numero.length; i++){
      if((numero[i] % 1) == 0){
        total = total + numero[i]
        console.log(total)
      }
    }
    return total;
  }

console.log(agregarNumeros(numero))

var resultadosTest = [1, 2, 3, 4.5]

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var total = 0;
    for(var i = 0; i < resultadosTest.length; i++){
        if((resultadosTest[i] % 1) == 0){
            total = total + resultadosTest[i];
            console.log(total)
            var promedio = total/resultadosTest.length
        }
    }
    return promedio;
  }

console.log(promedioResultadosTest(resultadosTest)


var numeros = [1, 2, 3]
function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var grande = [];
    for(var i = 0; i < numeros.length; i++){
        for(var j = 0; j < numeros.length; j++){
            if(numeros[i] > numeros[j]){
                grande.push(numeros[i])
        }
      }
    }
    return grande;
  }

console.log(numeroMasGrande(numeros))

var array = [1, 2, 3]
function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var total = 1
    for(var i = 0; i < array.length; i++){
      console.log(array[i])
      return array[i];
    }
  }

console.log(incrementarPorUno(array))