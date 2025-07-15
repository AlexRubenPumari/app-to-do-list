import { createContext, useState } from 'react'
import { FILTER_ITEMS } from '../config/constants'

export const FilterContext = createContext()

export default function FilterProvider ({ children }) {
  const [filter, setFilter] = useState(FILTER_ITEMS[0])
  const setFilterAll = () => setFilter(FILTER_ITEMS[0])
  const setFilterPending = () => setFilter(FILTER_ITEMS[1])
  const setFilterFinished = () => setFilter(FILTER_ITEMS[2])

  return (
    <FilterContext.Provider
      value={{ filter, setFilterAll, setFilterFinished, setFilterPending }}
    >
      {children}
    </FilterContext.Provider>
  )
}