import { useState } from 'react'
import Checkbox from './CheckBox'

export default function Task ({ checked, title, className = '' }) {
  const [st, setSt] = useState(checked)
  const handleChange = e => {
     setSt(e.target.checked)
  }
  return (
    <li className={`flex items-center gap-x-4 py-3 ${className}`}>
      <Checkbox checked={st} onChange={handleChange} />
      <span>{title}</span>
    </li>
  )
}