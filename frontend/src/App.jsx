import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksProvider from './contexts/tasks'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import TaskItem from './pages/TaskItem'

export default function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm />} />
          <Route path='/tasks/:id' element={<TaskItem />} />
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  )
}