const idade = 18
const temCNH = true

const podeDirigir = idade >= 18 && temCNH

if(podeDirigir) {
    console.log(`Pessoa pode dirigir`)
} else {
    console.log(`Pessoa nao pode dirigir`)
}
// Ternario
const numeroDePassageiros = podeDirigir ? 4 : 0

// let numeroDePassageiros
// if(podeDirigir) {
//     numeroDePassageiros = 4
// } else {
//     numeroDePassageiros = 0
// }

console.log({numeroDePassageiros})