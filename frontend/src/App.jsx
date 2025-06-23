import { useContext } from 'react'
import { ModalContext } from './contexts/modal'
import TasksProvider from './contexts/tasks'
import HomePage from './pages/HomePage'
import ModalController from './components/ModalController'

export default function App() {
  const { modal } = useContext(ModalContext)
  return (
    <TasksProvider>
      <HomePage />
      {modal && <ModalController type={modal.type} value={modal.value} />}
    </TasksProvider>
  )
}