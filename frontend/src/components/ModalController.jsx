import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'
import { MODAL_TYPES as M } from '../config/constants'
import TaskModal from './TaskModal'
import AddTaskModal from './AddTaskModal'
import EditTaskModal from './EditTaskModal'

export default function ModalController ({ type, value }) {
  const { closeModal } = useContext(ModalContext)

  if (type === M.TASK) return <TaskModal values={value} onClose={closeModal} />
  if (type === M.ADD_TASK) return <AddTaskModal onClose={closeModal} />
  if (type === M.EDIT_TASK) return <EditTaskModal initValues={value} onClose={closeModal} />
}