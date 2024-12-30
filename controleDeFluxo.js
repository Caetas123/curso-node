const numero1 = 20
const numero2 = 20

const numeroCorreto = 30
const stringDeNumero = '30'

if(numero1 > 1) {
    console.log(`Este número é maior que 1`)
}

if(numero1 > 200) {
    console.log(`Este número é menor que 200`)
} else {
    console.log(`O número é menor ou igual a 200`)
}

if(numero2 <= numero1) {
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}

if(numeroCorreto == stringDeNumero) { 
    console.log(`Os números são iguais em valor apenas`)
}

if(numeroCorreto === stringDeNumero) { //Se um deles for string tipo num1 = 20 e num2 = "20" ele transforma em number
    console.log(`Os números são iguais em valor e tipos`)
}
