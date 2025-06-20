import { IconSearch } from './Icons'

export default function Searchbar({ value, onChange, onSearch, placeholder }) {
  return (
    <form
      className='relative flex items-center'
      onSubmit={onSearch}
    >
      <input
        placeholder={placeholder}
        className='flex-grow py-2 pl-10 pr-4 bg-transparent border border-violet-600 rounded-md shadow-md focus-ring-default'
        value={value}
        onChange={onChange}
      />
      <div className='absolute pl-3 pointer-events-none'>
        <IconSearch className='size-5 text-violet-600' />
      </div>
    </form>
  )
}
