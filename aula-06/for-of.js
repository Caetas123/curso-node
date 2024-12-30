
const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56]
const usuarios = ['José', 'Antônia']

//codigo imperativo
// for (let contador = 0; contador < listaDeNumeros.length; contador += 1) {
//     console.log(listaDeNumeros[contador])
// }


// let indiceDoNumero = 0

// console.log(`\nPrint via while`)
// while(indiceDoNumero < listaDeNumeros.length) {
//     console.log(listaDeNumeros[indiceDoNumero])
//     indiceDoNumero += 1
// }

// codigo declarativo

console.log(`Print via for `)
for(const numero of listaDeNumeros) {
    console.log(numero)
}

for(const usuario of usuarios) {
    console.log(usuario)
}
