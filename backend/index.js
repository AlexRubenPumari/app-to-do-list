const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000
let tasks = [ //Array in memory
  {
    "id": 8,
    "title": "Plan weekend trip",
    "description": "Look for accommodation options and activities.",
    "completed": false,
    "createAt": "2025-06-19T08:30:00Z"
  },
  {
    "id": 9,
    "title": "Check email",
    "description": "Reply to important messages.",
    "completed": true,
    "createAt": "2025-06-11T09:00:00Z"
  },
  {
    "id": 10,
    "title": "Learn new cooking recipe",
    "description": "Lentil soup.",
    "completed": false,
    "createAt": "2025-06-20T10:00:00Z"
  }
]

app.get('/api/tasks', (_, res) => {
    res.status(200).json({ data: tasks })
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