import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { FilterContext } from '../contexts/filter'
import { filterTasks } from '../logic/tasks'
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
  const { filter, query } = useContext(FilterContext)
  const filteredList = filterTasks(list, filter, query)

  if (filteredList?.length === 0) {
    return query === ''
      ? <Alert type='info'>⚠️ No tasks match the current filter!</Alert>
      : <Alert type='info'>⚠️ Sorry, we couldn't find any matches!</Alert>
  }

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