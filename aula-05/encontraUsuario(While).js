const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josoue', 'Natalia', 'Bianca']

// solucao 1

// let encontrouUsuario = false
// let atingiuFimDaLista = false
// let IndiceDeUsuario = 0

// while (!encontrouUsuario && !atingiuFimDaLista) {

//     const usuarioAtual = listaDeContatos[IndiceDeUsuario]

//     if(usuarioAtual.startsWith('Z')) { // startswith pega  aprimeira letra
//         encontrouUsuario = true
//         console.log(`Usuário Encontrado ${usuarioAtual}`)
//     }

//     IndiceDeUsuario += 1

//     if(IndiceDeUsuario === listaDeContatos.length) {
//         atingiuFimDaLista = true
//         console.log(`Usuário não encontrado`)
//     }

// }


// solucao 2

// let encontrouUsuarioOuAtingiuFimDaLista = false
// let IndiceDeUsuario = 0

// while (!encontrouUsuarioOuAtingiuFimDaLista) {

//     const usuarioAtual = listaDeContatos[IndiceDeUsuario]

//     if(usuarioAtual.startsWith('Z')) { // startswith pega  aprimeira letra
//         encontrouUsuarioOuAtingiuFimDaLista = true
//         console.log(`Usuário Encontrado ${usuarioAtual}`)
//     }

//     IndiceDeUsuario += 1

//     if(IndiceDeUsuario === listaDeContatos.length) {
//         encontrouUsuarioOuAtingiuFimDaLista = true
//         console.log(`Usuário não encontrado`)
//     }

// }



// solucao 3

let IndiceDeUsuario = 0

while (true) {

    const usuarioAtual = listaDeContatos[IndiceDeUsuario]

    if(usuarioAtual.startsWith('Z')) { // startswith pega  aprimeira letra
        console.log(`Usuário Encontrado ${usuarioAtual}`)
        break
    }

    IndiceDeUsuario += 1

    if(IndiceDeUsuario === listaDeContatos.length) {
        console.log(`Usuário não encontrado`)
        break
    }
}

