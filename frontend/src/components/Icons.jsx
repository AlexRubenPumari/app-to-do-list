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