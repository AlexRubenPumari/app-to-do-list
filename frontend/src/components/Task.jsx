import { useState } from 'react'

export default function Task ({ checked, title, className = '' }) {
  const [st, setSt] = useState(checked)
  const titleClasses = st
    ? 'text-gray-500 line-through'
    : ''
  return (
    <li className={`flex items-center hover:bg-violet-500/35 transition-colors gap-x-4 py-3 px-4 cursor-pointer ${className}`}>
      <span className={`flex-grow ${titleClasses}`}>{title}</span>
    </li>
  )
}