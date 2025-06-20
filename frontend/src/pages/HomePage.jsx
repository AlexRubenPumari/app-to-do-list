import Searchbar from '../components/Searchbar'
import ListOfTasks from '../components/ListOfTasks'

export default function HomePage() {
  return (
    <div>
      <h2 className='text-2xl font-bold text-center'>TODO LIST</h2>
      <Searchbar placeholder='Search task...' />
      <ListOfTasks />
    </div>
  )
}