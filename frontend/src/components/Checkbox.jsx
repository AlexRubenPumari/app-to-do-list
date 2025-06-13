export default function Checkbox({
  id, name, checked, onChange, disabled = false, className = ''
}) {
  const baseClasses = 'appearance-none size-7 border-b-2 border-r-2 border-t-[1px] border-l-[1px] rounded-sm cursor-pointer transition-all ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border-violet-600 hover:scale-105'

  const checkedClasses = 'bg-violet-600'

  const disabledClasses = 'opacity-60 !cursor-not-allowed'

  return (
    <div
      className={`relative leading-[0] ${className}`}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`${baseClasses}${checked ? ` ${checkedClasses}` : ''} ${disabled ? ` ${disabledClasses}` : ''}`}
        />
        {checked && (
          <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white pointer-events-none select-none'>
            ✓
          </span>
        )}
    </div>
  )
} 