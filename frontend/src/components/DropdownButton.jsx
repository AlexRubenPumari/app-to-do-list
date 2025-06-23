import { useEffect, useState } from 'react'
import { IconArrow } from './Icons'
import PrimaryButton from './PrimaryButton'

export default function DropdownButton ({
  currentValue, items, callbacks, className = ''
}) {
  const [toggleMenu, setToggleMenu] = useState(false)
  useEffect(() => {
    const closeMenu = () => setToggleMenu(false)
    window.addEventListener('click', closeMenu)

    return () => window.removeEventListener('click', closeMenu) 
  }, [])
  return (
    <PrimaryButton
      className={`inline-flex gap-2 relative ${className}`}
      onClick={e => (e.stopPropagation() ,setToggleMenu(!toggleMenu))}
    >
      <span className='w-20 text-left'>{currentValue}</span>
      <span>|</span>
      <IconArrow className='w-4' />
      {toggleMenu && (
        <Menu
          className='absolute inset-x-0 top-[calc(100%_+_3px)] z-50'
          items={items}
          callbacks={callbacks}
        />
      )}
    </PrimaryButton>
  )
}

export function Menu ({ items, callbacks, className = '' }) {
  return (
    <ul
      className={`bg-white text-black font-normal rounded-md text-left overflow-hidden ${className}`}
    >
      {items.map(item => (
        <li
          key={item}
          className='px-4 py-2 hover:bg-violet-500/35 transition-colors'
          onClick={callbacks[item]}>{item}
        </li>
      ))}
    </ul>
  )
}