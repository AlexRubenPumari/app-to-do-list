import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'
import ListOfTasks from '../components/ListOfTasks'
import TaskFilter from '../components/TaskFilter'
import CircleButton from '../components/CircleButton'

export default function HomePage() {
  const { openAddTaskModal } = useContext(ModalContext)
  return (
    <>
      <header className='flex-center-all flex-wrap gap-x-12 gap-y-4 min-h-20 px-4 py-2 rounded-b-lg bg-violet-600 mb-8'>
        <h3 className='Title text-white'>To-do list App</h3>
        <TaskFilter />
      </header>
      <main className='flex flex-col gap-4 max-w-screen-sm mx-auto px-4'>
        <ListOfTasks />
        <CircleButton
          onClick={() => openAddTaskModal()}
          className='fixed right-4 bottom-4 text-2xl font-bold w-12 h-12'
        >
          +
        </CircleButton>
      </main>
    </>
  )
}