import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import Alert from './Alert'
import Task from './Task'
import Spinner from '../components/Spinner'

export default function ListOfTasks () {
  const { tasks, isLoading, error } = useContext(TasksContext)

  if (error) return <Alert type='error'>🚫 Failed to load tasks. Please try again later.</Alert>
  if (isLoading) return <Spinner className='self-center text-violet-600' />
  if (tasks?.length === 0) return <Alert type='info'>⚠️ No tasks. Create one!</Alert>
  return <List list={tasks} />
}

function List ({ list }) {
  return (
    <ul>
        {list?.map(({ id, title, completed }) => (
          <Task
            key={id}
            title={title}
            className='border-b-[1px] last:border-b-0 border-violet-600'
            checked={completed}
          />
        ))}
    </ul>
  )
}