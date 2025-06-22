import { useFetch } from '../hooks/useFetch'
import { getAllTasks } from '../services/tasks'
import Task from './Task'
import Spinner from '../components/Spinner'


export default function ListOfTasks () {
  const { data: tasks, isLoading, error } = useFetch({ asyncFunction: getAllTasks })

  if (error) return console.log(error)
  if (isLoading) return <Spinner className='self-center text-violet-600' />
  if (tasks?.length === 0) return <p>No tienes tareas crea una</p>
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