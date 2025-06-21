import CloseButton from './CloseButton'

export default function Modal ({ children, className, onClose }) {
  return (
    <div
      className='fixed inset-0 z-10 bg-black/60 flex-center-all'
      onClick={onClose}
    >
      <div
        className='w-[40rem] max-w-[85vw] h-[90vh] px-5 py-7 flex flex-col bg-slate-200 rounded-lg'
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