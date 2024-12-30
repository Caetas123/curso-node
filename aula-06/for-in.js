const user = {
    name: 'JoSÉ mARIA SOUSA santos',
    email: 'JOSE.M1@GMAIL.COM',
    age: 23,
    address: 'X street'
}

for(const key in user) { // in = usado em objetos

    if(key === 'name') {

        const names = user[key].split(' ') // split = string em array
        user[key] = ''

        for (const name of names) { // of = usado em arrays

            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName
            
            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('') // Join = array em string
            user[key] = user[key].trim()
        }
    }

    if(key === 'email') {
        user[key] = user[key].toLowerCase() // todas as casas em minusculo
    }

}

console.log(user)
