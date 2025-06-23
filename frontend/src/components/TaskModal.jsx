import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { ModalContext } from '../contexts/modal'
import Modal from './Modal'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

export default function TaskModal ({ values, onClose }) {
  const firstColClasses = 'text-gray-700'
  const { deleteTaskForId } = useContext(TasksContext)
  const { openEditTaskModal } = useContext(ModalContext)
  const { title, completed, description, createdAt } = values
  const handleDelete = () => {
    deleteTaskForId(values)
      .then(() => onClose())
  }
  const handleEdit = () => {
    openEditTaskModal(values)
  }
  return (
    <Modal
      size='md'
      className='flex-grow flex-center-all flex-col gap-4'
      onClose={onClose}
    >
      <h2 className='Title flex-center-all flex-wrap gap-x-4 gap-y-2'>
        <span>{title}</span>
        <span className={`capitalize ${completed ? 'text-green-700' : 'text-red-600'}`}>
          {`(${completed ? 'Finished' : 'Pending'})`}
        </span>
      </h2>
      <table>
        <tbody>
          <tr>
            <td className={firstColClasses}>Date</td>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <td className={firstColClasses}>Description</td>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
      <div className='flex flex-wrap-reverse justify-center gap-6'>
          <SecondaryButton className='w-28' onClick={handleDelete}>Delete</SecondaryButton>
          <PrimaryButton className='w-28' onClick={handleEdit}>Edit</PrimaryButton>
      </div>
    </Modal>
  )
}