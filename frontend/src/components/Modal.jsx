import CloseButton from './CloseButton'

export default function Modal ({ children, size = 'lg', className, onClose }) {
  const SIZES = { sm: 'min-h-[28vh]', md: 'min-h-[55vh]', lg: 'h-[90vh]' }
  return (
    <div
      className='fixed inset-0 z-10 bg-black/60 flex-center-all'
      onClick={onClose}
    >
      <div
        className={`w-[40rem] max-w-[85vw] px-5 py-7 flex flex-col bg-slate-200 rounded-lg ${SIZES[size]}`}
        onClick={e => e.stopPropagation()}
      >
        <CloseButton className='self-end' onClick={onClose} />
        <div className={className}>
          { children }
        </div>
      </div>
    </div>
  )
}