const express = require('express')

const app = express()
app.use(express.json())

const PORT = 3000
let tasks = [] // Array in memory

app.get('/api/tasks', (_, res) => {
    res.status(200).json({ status: 200, ok: true, data: tasks })
})

app.post('/api/tasks', (req, res) => {
    const newTask = req.body
    tasks.push(newTask)

    res.status(201).json({ status: 201, ok: true, data: newTask })
})

app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id) 
    const index = tasks.findIndex(t => t.id === id)
    if (index < 0) {
        return res.status(404).json({ status: 404, ok: false, error: 'Task not found' })
    }
    
    tasks[index] = { ...tasks[index], ...req.body }
    res.status(200).json({ status: 200, ok: true, data: tasks[index] })
})

app.delete('/api/tasks/:id', (req, res) => {  
    const id = parseInt(req.params.id)

    tasks = tasks.filter(t => t.id !== id)
    res.status(200).json({ status: 200, ok: true })
})

app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT))