import Searchbar from '../components/Searchbar'
import ListOfTasks from '../components/ListOfTasks'
import DropdownButton from '../components/DropdownButton'
import CircleButton from '../components/CircleButton'

export default function HomePage() {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold text-center'>TODO LIST</h2>
      <Searchbar placeholder='Search task...' />
      <Filter />
      <ListOfTasks />
      <CircleButton
        className='fixed right-4 bottom-4 text-2xl font-bold w-12 h-12'
      >
          +
      </CircleButton>
    </div>
  )
}
// import DropdownButton from '../components/DropdownButton'

export function Filter () {
  const filterItems = ['All', 'Pendientes', 'Terminadas']
  const filterCallbacks = {All: () => console.log(1), Pendientes: () => console.log(2), Terminadas: () => console.log(3)}
  
  return (
    <DropdownButton
      currentValue={'All'}
      className='self-start'
      items={filterItems}
      callbacks={filterCallbacks}
    />
  )
}