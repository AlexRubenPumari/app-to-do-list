import { createContext } from 'react'
import { useTasks } from '../hooks/useTasks'
export const TasksContext = createContext()

export default function TasksProvider ({ children }) {
  const contextValue = useTasks()
  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  )
}