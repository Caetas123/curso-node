const querystring = require('node:querystring')
const url = require('node:url')

const baseUrl = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'Verão'
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl)

const parsedUri = querystring.parse(uri)
console.log(uri)
console.log(parsedUri.destino)
console.log(url.parse(fullUrl))


const uri2 = querystring.escape('São Paulo') // escape passa string
console.log(uri2)
const unescapeUri2 = querystring.unescape(uri2) // Unescape para volta
console.log(unescapeUri2)