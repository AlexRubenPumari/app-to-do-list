export default function PrimaryButton ({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md text-white focus-ring-default bg-violet-600 hover:bg-violet-700 ${className}`}
    >
      {children}
    </button>
  )
}