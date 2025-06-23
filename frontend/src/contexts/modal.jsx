import { createContext, useState } from 'react'
import { MODAL_TYPES as M } from '../config/constants'

export const ModalContext = createContext()

export default function ModalProvider ({ children }) {
  const [modal, setModal] = useState(null)
  const closeModal = () => setModal(null)
  const openAddTaskModal = () => setModal({ type: M.ADD_TASK })
  const openTaskModal = Task => setModal({ type: M.TASK, value: Task })

  return (
    <ModalContext.Provider value={{
        modal,
        closeModal,
        openAddTaskModal,
        openTaskModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}