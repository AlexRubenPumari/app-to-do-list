import { useId } from 'react'

export default function Input({
  label,
  error,
  name,
  placeholder,
  type = 'text',
  min,
  max,
  value,
  className='',
  onChange,
  multiline,
}) {
  const idInput = useId()
  return (
    <>
      {label && <label htmlFor={idInput}>{`${label}:`}</label>}
      <div className='mb-7 relative'>
        {!multiline
          ? (
            <input
              id={idInput}
              className={`Input ${className}`}
              name={name}
              type={type}
              value={value ?? ''}
              min={min}
              max={max}
              placeholder={placeholder}
              onChange={onChange}
            />
          ) : (
            <textarea
              name={name}
              id={idInput}
              className={`Input ${className}`}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )
        }
        {error && (
          <span className='absolute top-full inset-x-0 font-bold text-red-600'>
            {error}
          </span>
        )}
      </div>
    </>
  )
}
