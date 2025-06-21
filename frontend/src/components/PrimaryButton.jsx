export default function PrimaryButton ({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white font-medium focus-ring-default bg-violet-600 hover:bg-violet-700 ${className}`}
    >
      {children}
    </button>
  )
}