import { IconSearch } from './Icons'
import PrimaryButton from './PrimaryButton'

export default function Searchbar({ value, onChange, onSearch, placeholder, name }) {
  return (
    <form
      className='relative flex items-center gap-x-2'
      onSubmit={onSearch}
    >
      <div className='absolute pl-3 pointer-events-none'>
        <IconSearch className='size-5 text-violet-600' />
      </div>
      <input
        placeholder={placeholder}
        className='flex-grow py-2 pl-10 pr-4 bg-transparent border border-violet-600 rounded-md shadow-md focus-ring-default'
        value={value}
        onChange={onChange}
        name={name}
      />
    </form>
  )
}
