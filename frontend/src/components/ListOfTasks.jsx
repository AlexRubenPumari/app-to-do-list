import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { FilterContext } from '../contexts/filter'
import { FILTER_ITEMS } from '../config/constants'
import Alert from './Alert'
import Task from './Task'
import Spinner from '../components/Spinner'

export default function ListOfTasks() {
  const { tasks, isLoading, error } = useContext(TasksContext)

  if (error) {
    return (
      <Alert type='error'>🚫 Failed to load tasks. Please try again later.</Alert>
    )
  }
  if (isLoading) {
    return (
      <Spinner className='self-center text-violet-600' />
    )
  }
  if (tasks?.length === 0) {
    return (
      <Alert type='info'>⚠️ No tasks. Create one!</Alert>
    )
  }
  return <List list={tasks} />
}

function List({ list }) {
  const { filter } = useContext(FilterContext)
  const filteredList = list?.filter(i => {
    if (filter === FILTER_ITEMS[0]) return true
    if (filter === FILTER_ITEMS[1]) return !i.completed
    if (filter === FILTER_ITEMS[2]) return i.completed
  })

  if (filteredList?.length === 0) return (
    <Alert type='info'>⚠️ No tasks match the current filter!</Alert>   
  )

  return <Results results={filteredList} />
}

function Results({ results }) {
  const location = useLocation()

  return (
    <ul>
      {results?.map(result => (
        <Link
          key={result.id}
          to={`/tasks/${result.id}`}
          state={{ backgroundLocation: location }}
        >
          <Task
            values={result}
            className='border-b-[1px] last:border-b-0 border-violet-600'
          />
        </Link>
      ))}
    </ul>
  )
}