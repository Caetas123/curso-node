import express from 'express'
import {config} from 'dotenv'
import path from 'path'
import fs from 'fs'

interface IUser {
    name: string
    age: number
}

config()
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? `http://localhost`
const port = process.env.API_PORT ?? 3300
const users: IUser[] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 35
    }
]

app.get('/api', function (req, res) {
    // const homePagePath = path.join(__dirname, 'home.html')
    // const homePage = fs.readFileSync(homePagePath)

    // res.status(200).send(homePage)
    res.status(200).send('<h1>Hello World 2</h1>')
})

app.get('/api/users', function (req, res) {
        res.json(users)
})


app.listen(port,() => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})
