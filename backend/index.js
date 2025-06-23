const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 4000
let currentId = 1
let tasks = []

app.get('/api/tasks', (_, res) => {
    res.status(200).json({ data: tasks })
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
        return res.status(404).json({ status: 404, ok: false, error: 'Task not found' })
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