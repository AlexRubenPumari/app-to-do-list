export default function Alert ({ type = 'info', className, children }) {
  let typeClassName
  if (type === 'info') typeClassName = 'border-yellow-400 bg-yellow-400/30'
  if (type === 'error') typeClassName = 'border-red-600 bg-red-600/25'
  if (type === 'success') typeClassName = 'border-green-600 bg-green-600/30'
  return (
    <div
      className={`px-4 py-3 text-center rounded-md border ${typeClassName} ${className}`}
    >
      {children}
    </div>
  )
}