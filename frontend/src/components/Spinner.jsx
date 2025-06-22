export default function Spinner({ className = '' }) {
  return (
    <div
      className={`inline-block size-8 rounded-full border-4 border-solid border-current border-r-transparent align-middle animate-spin ${className}`}
      role='status'
    />
  )
}
