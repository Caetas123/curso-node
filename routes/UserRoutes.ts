import {Router} from 'express'
import { randomUUID } from 'crypto'
import {readFileSync, writeFileSync} from 'fs'
import dbJson from '.././server.json'
import { writeFile } from 'fs/promises'
import path from 'path'


type User = {
    id: string
    name: string
    age: number
}

type  ICreateUserDTO = Omit<User, "id">

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const users = dbJson.users
const userRoutes = Router()


userRoutes.get('/api/users', function (req, res) {
        res.json(users)
})


userRoutes.post('/api/users', async function (req, res) {
    const {name, age}: ICreateUserDTO = req.body

    if(!name || age < 0) {
        const errMessage = 'O usuário a ser criado precisa de nome e idade'
        res.status(400).send(errMessage)
    }
    
    const user = {id: randomUUID(),name, age}

    users.push(user)
    
    await writeFile(dbJsonPath, JSON.stringify({...dbJson, users}))

    res.status(201).json(user)
})

userRoutes.delete('/api/users/:id', async function (req, res) {
    const { id } = req.params

    if(!id) {
        const errMessage = 'O usuário a ser deletado precisa de um id'
        res.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id === id)
    
    if(!foundUser) {
        const errMessage = `Usuário com id ${id} não foi encontrado`
        res.status(400).send(errMessage)
    }

    const updatedUsers = users.filter(user => user.id !== id)

    await writeFile(dbJsonPath, JSON.stringify(
        {...dbJson, users: updatedUsers}
    ))
    
    res.status(204).json()

    res.json(users)
})

export {userRoutes}