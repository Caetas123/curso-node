const dns = require('node:dns')


// dns.resolve4(searchedUrl, (err, addresses) => {// retorna o ipv4
// if(err) {
//     console.error('URL não encontrada')
//     return
// }
// console.log(addresses)
// } )

async function bootstrap () {
    const searchedUrl = 'google.com'

    console.time('Pesquisando url por DNS padrão')
    const adresses = await dns.promises.resolve4(searchedUrl) // Achar ipv4
    console.timeEnd('Pesquisando url por DNS padrão')
    console.log(adresses)

    
    const nameServers = await dns.promises.resolveNs(searchedUrl) // Achar o dns = nameServes
    console.log(nameServers)

    const ipNameServer = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNameServer) // Se tiver pega o name servers 1 se nao tiver pega a segunda

    // ?? = testa contra undefined e null

    console.time('Pesquisando url por DNS especifico')
    resolver.resolve4(searchedUrl, (error, adresses) => {
        if(error) {
            console.error(`Não foi possível encontrar o ipv4`)
        }
        console.timeEnd('Pesquisando url por DNS especifico')
        console.log(adresses)
    })
}

bootstrap()


