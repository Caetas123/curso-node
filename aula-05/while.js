const nomeDeUsuario = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

// console.log(`Olá ${nomeDeUsuario[0]}`)
// console.log(`Olá ${nomeDeUsuario[1]}`)
// console.log(`Olá ${nomeDeUsuario[2]}`)
// console.log(`Olá ${nomeDeUsuario[3]}`)

let indiceDoUsuario = 0
// let IndiceAtual = nomeDeUsuario.length - Quantas coisas tem na lista

while (indiceDoUsuario < nomeDeUsuario.length) {
    console.log(`Olá ${nomeDeUsuario[indiceDoUsuario]}`)
    indiceDoUsuario += 1
}