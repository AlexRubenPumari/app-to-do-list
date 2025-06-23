import { useFetch } from './useFetch'
import { getAllTasks, addTask } from '../services/tasks'


export function useTasks () {
  const { data, isLoading, error } = useFetch({ asyncFunction: getAllTasks })
  
  return { tasks: data, isLoading, error }
}