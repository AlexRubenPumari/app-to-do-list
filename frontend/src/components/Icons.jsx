export function IconSearch({ className }) {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
    </svg>
  )
}

export function IconArrow({ className = '' }) {
  return (
    <svg viewBox='64 256 896 512' className={className}>
      <path d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z' fill='currentColor' stroke='currentColor' strokeWidth='50' strokeLinejoin='round'
      strokeLinecap='round' />
    </svg>
  )
}

export function IconKebab ({ className = '' }) {
  return (
    <svg viewBox='10 3 4 18' className={className}>
      <path d='M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeDasharray='0,0' />
      <path d='M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeDasharray='0,0' />
      <path d='M12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.4477153 12.5522847,18 12,18 C11.4477153,18 11,18.4477153 11,19 C11,19.5522847 11.4477153,20 12,20 Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeDasharray='0,0' />
    </svg>
  )
}

export function IconMeatballs ({ className = '' }) {
  return (
    <IconKebab className={`rotate-90 ${className}`} />
  )
}