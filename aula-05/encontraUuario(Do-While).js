
// solucao 4 (com do-while)

const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josoue', 'Natalia', 'Bianca']

let encontrouUsuarioOuAtingiuFimDaLista = false
let IndiceDeUsuario = 0

do {
    const usuarioAtual = listaDeContatos[IndiceDeUsuario]

    if(usuarioAtual && usuarioAtual.startsWith('Z')) { // startswith pega  aprimeira letra
        encontrouUsuarioOuAtingiuFimDaLista = true
        console.log(`Usuário Encontrado ${usuarioAtual}`)
    }

    IndiceDeUsuario += 1

    if(IndiceDeUsuario >= listaDeContatos.length) {
        encontrouUsuarioOuAtingiuFimDaLista = true
        console.log(`Usuário não encontrado`)
    }

} while (!encontrouUsuarioOuAtingiuFimDaLista)
