import Task from './Task'
const tasks = [
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

export default function ListOfTasks () {
  return (
    <ul>
        {tasks.map(({ id, title, completed }) => (
          <Task
            key={id}
            title={title}
            className='border-b-[1px] last:border-b-0 border-violet-600'
            checked={completed}
          />
        ))}
    </ul>
  )
}