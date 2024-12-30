// let teste //Sem atribuicao funciona com var e let(hoisting jogar a variavel pra cima)

const qualquerCoisa = null
console.log(qualquerCoisa)
console.log(teste)

var teste = 'Meu teste'

let numero = 20
const numero2 = 300 //Int
const numeroFavorito = 5.5 //Float
const estaChovendo = false

const nome = 'Felipe'

console.log(teste)
console.log(numero)
console.log(numero2)

numero = 8

console.log(numero)
console.log("Hello World")

console.log('Oi', nome,'!') //Espaco ruim
console.log(`Oi ${nome}! Seu número favorito é ${numeroFavorito}`) //Espaco bom

console.log(`Condição do clima é chuvoso: ${estaChovendo}`)