import { useContext } from 'react'
import { FilterContext } from '../contexts/filter'
import { FILTER_ITEMS } from '../config/constants'
import DropdownButton from '../components/DropdownButton'

export default function TaskFilter () {
  const { filter, setFilterAll, setFilterPending, setFilterFinished } = useContext(
    FilterContext
  )
  const filterCallbacks = {
    [FILTER_ITEMS[0]]: setFilterAll,
    [FILTER_ITEMS[1]]: setFilterPending,
    [FILTER_ITEMS[2]]: setFilterFinished,
  }
  
  return (
    <DropdownButton
      currentValue={filter}
      items={FILTER_ITEMS}
      callbacks={filterCallbacks}
    />
  )
}