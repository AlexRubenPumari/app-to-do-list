import { useState } from 'react'
import Checkbox from './CheckBox'
import MeatballsButton from './MeatballsButton'

export default function Task ({ checked, title, className = '' }) {
  const [st, setSt] = useState(checked)
  const titleClasses = st
    ? 'text-gray-500 line-through'
    : ''
  const handleChange = e => {
     setSt(e.target.checked)
  }
  return (
    <li className={`flex items-center gap-x-4 py-3 ${className}`}>
      <Checkbox checked={st} onChange={handleChange} />
      <span className={`flex-grow ${titleClasses}`}>{title}</span>
      <MeatballsButton />
    </li>
  )
}