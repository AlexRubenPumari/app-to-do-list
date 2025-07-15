import { useContext } from 'react'
import { FilterContext } from '../contexts/filter'
import Searchbar from '../components/Searchbar'

export default function TaskSearchbar () {
  const { query, handleChange } = useContext(FilterContext)
  return (
    <Searchbar
      name='query'
      placeholder='What task are you looking for?'
      value={query}
      onChange={handleChange}
    />
  )
}