const fs = require('fs')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = Number(process.env.PORT) || 3000

const apiURL = `http://localhost:${PORT}/api/tasks`
fs.writeFileSync('../frontend/.env', `VITE_API_URL=${apiURL}\n`)

let currentId = 2
let tasks = [{ id: 1, title: 'Example task', description: 'Task Description...', completed: true, createdAt: '20/04/2025' }]

app.get('/api/tasks', (_, res) => {
    res.status(200).json({ data: tasks })
})
app.get('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = tasks.findIndex(t => t.id === id)
    if (index < 0) {
        return res.status(404).json({ error: 'Task not found' })
    }

    res.status(200).json({ data: tasks[index] })
})

app.post('/api/tasks', (req, res) => {
    const newTask = { id: currentId++, ...req.body }
    tasks.push(newTask)

    res.status(201).json({ data: newTask })
})

app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id) 
    const index = tasks.findIndex(t => t.id === id)
    if (index < 0) {
        return res.status(404).json({ error: 'Task not found' })
    }
    
    tasks[index] = { ...tasks[index], ...req.body }
    res.status(200).json({ data: tasks[index] })
})

app.delete('/api/tasks/:id', (req, res) => {  
    const id = parseInt(req.params.id)

    tasks = tasks.filter(t => t.id !== id)
    res.status(200).json({ data: { id } })
})

app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT))