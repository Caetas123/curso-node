const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora.month)

console.log(new Date().toLocaleString())
console.log(new Date().toLocaleString('en-US'))

const dataDoAniversario = DateTime.fromFormat('03/02/1998', 'dd/MM/yyyy')
console.log(dataDoAniversario.day)
console.log(dataDoAniversario.month)

// console.log(new Date().getMonth()) // começa no 0

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('years')
console.log(Math.floor(idade)) // Arredondar pra baixo

const isoDate = '2020-11-19T21:22:00-0300'
const RFC = 'Thu, 19 Nov 2020 21:22:00 -0300'

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())