import { Routes, Route, useLocation } from 'react-router-dom'
import TasksProvider from './contexts/tasks'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import TaskItem from './pages/TaskItem'

export default function App() {
  const location = useLocation()

  const state = location.state
  const background = state && state.backgroundLocation
  return (
    <TasksProvider>
      <Routes location={background || location}>
        <Route path='/' element={<TaskList />} />
      </Routes>

      {background && (
        <Routes>
          <Route path='/tasks/new' element={<TaskForm />} />
          <Route path='/tasks/:id/edit' element={<TaskForm />} />
          <Route path='/tasks/:id' element={<TaskItem />} />
        </Routes>
      )}
    </TasksProvider>
  )
}