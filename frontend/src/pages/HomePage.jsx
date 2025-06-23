import { useState } from 'react'
import Searchbar from '../components/Searchbar'
import ListOfTasks from '../components/ListOfTasks'
import TaskFilter from '../components/TaskFilter'
import CircleButton from '../components/CircleButton'
import TaskFormModal from '../components/TaskFormModal'

export default function HomePage() {
  const [m, setM] = useState(false)
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-center'>TODO LIST</h2>
        <Searchbar placeholder='Search task...' />

        <TaskFilter />
        <ListOfTasks />
        <CircleButton
          onClick={() => setM(true)}
          className='fixed right-4 bottom-4 text-2xl font-bold w-12 h-12'
        >
          +
        </CircleButton>
      </div>
      {m && <TaskFormModal onClose={() => setM(false)} />}
    </>
  )
}