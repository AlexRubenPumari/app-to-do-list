import { useFetch } from './useFetch'
import { getAllTasks, addTask, deleteTask, editTask } from '../services/tasks'


export function useTasks () {
  const { data, isLoading, error, setData } = useFetch({ asyncFunction: getAllTasks })
  const addNewTask = Task => {
    return addTask(Task)
      .then(res => {
        setData(prevTasks => [res, ...prevTasks])
        return res
      })
  }

  const deleteTaskForId = (Task) => {
    return deleteTask(Task)
      .then(deletedTask => {
        setData(prevValues => prevValues.filter(value => value.id !== deletedTask.id))
      })
  }

  const editTaskForId = (Task) => {
    return editTask(Task)
      .then(editedTask => {
        setData(prevValues => prevValues.map(value => {
          if (value.id === editedTask.id) return editedTask
          return value
        }))
      })
  } 
  
  return { tasks: data, isLoading, error, addNewTask, deleteTaskForId, editTaskForId }
}