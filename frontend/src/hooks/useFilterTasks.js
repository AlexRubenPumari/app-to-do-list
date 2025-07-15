import { useState } from 'react'
import { useForm } from './useForm'
import { FILTER_ITEMS } from '../config/constants'

const INPUT_NAME = 'query'
const [ALL_TASK, PENDING_TASK, FINISHED_TASK] = FILTER_ITEMS
export function useFilterTasks() {
  const { values, handleChange } = useForm({ [INPUT_NAME]: '' })
  const [filter, setFilter] = useState(ALL_TASK)
  const setFilterAll = () => setFilter(ALL_TASK)
  const setFilterPending = () => setFilter(PENDING_TASK)
  const setFilterFinished = () => setFilter(FINISHED_TASK)

  return { 
    filter, setFilterAll, setFilterPending, setFilterFinished,
    query: values[INPUT_NAME], handleChange
  }
}