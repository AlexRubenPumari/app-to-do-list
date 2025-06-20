import Searchbar from '../components/Searchbar'
import ListOfTasks from '../components/ListOfTasks'
import CircleButton from '../components/CircleButton'

export default function HomePage() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold text-center'>TODO LIST</h2>
      <Searchbar placeholder='Search task...' />
      <ListOfTasks />
      <CircleButton
        className='fixed right-4 bottom-4 text-2xl font-bold w-12 h-12'
      >
          +
      </CircleButton>
    </div>
  )
}