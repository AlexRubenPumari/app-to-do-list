import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'

export default function Task ({ values, className = '' }) {
  const { openTaskModal } = useContext(ModalContext)
  const titleClasses = values.completed
    ? 'text-gray-500 line-through'
    : ''
  return (
    <li
      className={`flex items-center hover:bg-violet-500/35 transition-colors gap-x-4 py-3 px-4 cursor-pointer ${className}`}
      onClick={() => openTaskModal(values)}
    >
      <span className={`flex-grow ${titleClasses}`}>{values.title}</span>
    </li>
  )
}