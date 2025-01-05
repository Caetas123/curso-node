const path = require('node:path') // se tiver outro modulo chamado path iria puxar o outro pacote
const fs = require('node:fs') // especificar que o modulo é do node
const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.NODE_ENV)

const filePath = path.join(process.cwd(),'aula-11', 'texto.txt')
const fileOutPath = path.join(process.cwd(),'aula-11', 'texto-com-linhass.txt')
// console.log(filePath)

console.time('manipular arquivos') // Onde começa o inicio do calculo de tempo

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.error(`Erro na leitura do arquivo no caminho ${filePath}`)
        return
    }
    const texto = dados.toString()
    const linhas = texto.split('\n')

    const linhasAjustadas = linhas.map((linha, index) => 
        `${index + 1} - ${linha}`
    )
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, (erro) => {
        if (erro) {
            console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
            return
        }
        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
        console.timeEnd('manipular arquivos') //  Fim do calculo de tempo
    })
})
