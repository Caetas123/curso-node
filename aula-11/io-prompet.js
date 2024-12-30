const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Callback - funcao pos alguma operacao
// Querry - perguntar ao usuario

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta ))
        }   catch (error) {
            reject (error)
        }
    }),
    close: () => prompt.close()
}

// prompt.question('Qual seu número favorito?: ', (respostaDoUsuario) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(respostaDoUsuario * 2)}`) // PaarseInt = transforma string em numero inteiro
//     // prompt.close() == Espera a resposta e fecha o prompet terminando o terminal

//     prompt.question('Qual sua cor favorito?: ', (respostaDoUsuario) => {
//         console.log(`Sua cor favorita é: ${respostaDoUsuario}`) 
//         prompt.close()
//     })
// })

async function askUser() {

    const numero = await promptPromise.question('Qual seu número favorito?: ')
    console.log(`O dobro do seu número favorito é: ${parseInt(numero * 2)}`) 

    const cor = await promptPromise.question('Qual sua cor favorita?: ')
    console.log(`Sua cor favorita é: ${cor}`) 
    promptPromise.close()
}

// PaarseInt = transforma string em numero inteiro
// prompt.close() == Espera a resposta e fecha o prompet terminando o terminal

askUser()




