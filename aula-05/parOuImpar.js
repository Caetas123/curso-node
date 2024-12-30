const listaDeNumeros = [25, 38, 71, 192, 333, 222, 10, 11, 62]
const listaDePares = []
const listaDeImpares = []
let contador = 0

while (contador < listaDeNumeros.length) {

    if(listaDeNumeros[contador] % 2 === 0) {
        listaDePares.push(listaDeNumeros[contador])
    } 
    else {
        listaDeImpares.push(listaDeNumeros[contador])
    }
    
    contador += 1
}
console.log(listaDePares)
console.log(listaDeImpares )