import { IconMeatballs } from './Icons'

export default function MeatballsButton ({ className = '', onClick }) {
  return (
    <button className={`${className}`} tabIndex={-1} onClick={onClick}>
      <IconMeatballs className='size-4 rotate-90' />
    </button>
  )
}