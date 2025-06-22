export default function SecondaryButton({ className = '', onClick, children }) {
  return (
    <button
      className={`border-2 border-current text-violet-600 hover:text-violet-700 rounded-md ${className}`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
