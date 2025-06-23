import { useState } from 'react'
import { FILTER_ITEMS } from '../config/constants'
import DropdownButton from '../components/DropdownButton'

export default function TaskFilter () {
  const [value, setValue] = useState(FILTER_ITEMS[0])
  const filterCallbacks = {
    [FILTER_ITEMS[0]]: () => setValue(FILTER_ITEMS[0]),
    [FILTER_ITEMS[1]]: () => setValue(FILTER_ITEMS[1]),
    [FILTER_ITEMS[2]]: () => setValue(FILTER_ITEMS[2])
  }
  
  return (
    <DropdownButton
      currentValue={value}
      items={FILTER_ITEMS}
      callbacks={filterCallbacks}
    />
  )
}