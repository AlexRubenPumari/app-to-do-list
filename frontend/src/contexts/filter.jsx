import { createContext } from 'react'
import { useFilterTasks } from '../hooks/useFilterTasks'

export const FilterContext = createContext()

export default function FilterProvider ({ children }) {
  const contextValues = useFilterTasks()

  return (
    <FilterContext.Provider value={contextValues}>
      {children}
    </FilterContext.Provider>
  )
}