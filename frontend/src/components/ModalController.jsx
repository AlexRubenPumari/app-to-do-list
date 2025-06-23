import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'
import { MODAL_TYPES as M } from '../config/constants'
import TaskModal from './TaskModal'
import AddTaskModal from './AddTaskModal'

export default function ModalController ({ type, value }) {
  const { closeModal } = useContext(ModalContext)

  if (type === M.TASK) return <TaskModal values={value} onClose={closeModal} />
  if (type === M.ADD_TASK) return <AddTaskModal onClose={closeModal} />
}