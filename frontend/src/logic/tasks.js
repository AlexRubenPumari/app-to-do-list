import { FILTER_ITEMS } from '../config/constants'

export function filterTasks (tasks, filter, query) {
  const [ALL_FILTER, PENDING_FILTER, FINISHED_FILTER] = FILTER_ITEMS
  return tasks?.filter(task => {
    const isQueryIncluded = query === '' || task.title.includes(query)
    if (filter === ALL_FILTER && isQueryIncluded) return true
    if (filter === PENDING_FILTER && isQueryIncluded) return !task.completed
    if (filter === FINISHED_FILTER && isQueryIncluded) return task.completed
  })
}