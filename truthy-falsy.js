// true
// truthy: [], {}, numero diferente de 0, string não vazia 
// falsy: null, undefined, 0, "", NaN

console.log(!![], !!{}, !!1, !!'abc')

// if([] && {} && 1 && 'adasd') {
//     console.log(`Tudo é truthy`)
// }

console.log(!!null, !!undefined, !!0, !!'', !!NaN)

// console.log(!true)
// console.log(!false)
// console.log(!!true)
// console.log(!!false)
