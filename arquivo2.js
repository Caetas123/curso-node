const numero1 = 10  //NaN = Not a Number
const numero2 = 30
const numero3 = 3
const numero4 = 2

//correçao/conversao implicita

const resultado = numero2 + numero1 
const subtracao = numero2 - numero1
const divisao = numero2 / numero1
const multiplicacao = numero2 * numero1
const elevado = numero3 ** numero4
const elevado2 = Math.pow(3,2)
const restoDaDivisao = numero3 % numero4

//const resultado = 'ab' - numero1 = NaN
//Null convertido para zero
//const soma = numero2 + 'ab'

const numeroNegativo = -3
const numeroAbsoluto = Math.abs(numeroNegativo) //Tira os sinaiss

console.log({resultado})
console.log({subtracao})
console.log({divisao})
console.log({multiplicacao})
console.log({elevado})
console.log({elevado2})
console.log({restoDaDivisao})
console.log({numeroNegativo})
console.log({numeroAbsoluto})