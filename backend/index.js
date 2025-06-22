const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000
let tasks = [ //Array in memory
  {
    "id": 1,
    "title": "Buy groceries for the week",
    "description": "Milk, bread, eggs, fruits, and vegetables.",
    "completed": false,
    "createAt": "2025-06-15T10:00:00Z"
  },
  {
    "id": 2,
    "title": "Prepare project presentation",
    "description": "Review slides and add final data.",
    "completed": true,
    "createAt": "2025-06-14T14:30:00Z"
  },
  {
    "id": 3,
    "title": "Call technical support",
    "description": "The router is not working correctly.",
    "completed": false,
    "createAt": "2025-06-16T09:15:00Z"
  },
  {
    "id": 4,
    "title": "Do exercise",
    "description": "30-minute cardio routine.",
    "completed": true,
    "createAt": "2025-06-13T07:45:00Z"
  },
  {
    "id": 5,
    "title": "Read chapter 5 of the book",
    "description": "Self-help book.",
    "completed": false,
    "createAt": "2025-06-17T19:00:00Z"
  },
  {
    "id": 6,
    "title": "Pay outstanding bills",
    "description": "Electricity, water, and internet.",
    "completed": false,
    "createAt": "2025-06-18T11:00:00Z"
  },
  {
    "id": 7,
    "title": "Organize desk",
    "description": "Clean and sort documents.",
    "completed": true,
    "createAt": "2025-06-12T16:00:00Z"
  },
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