import { useFetch } from './useFetch'
import { getAllTasks, addTask } from '../services/tasks'


export function useTasks () {
  const { data, isLoading, error, setData } = useFetch({ asyncFunction: getAllTasks })
  const addNewTask = Task => {
    return addTask(Task)
      .then(res => {
        setData(prevTasks => {
          const newTasks = [...prevTasks]
          newTasks.push(res)
          return newTasks
        })
        return res
      })
  }
  
  return { tasks: data, isLoading, error, addNewTask }
}