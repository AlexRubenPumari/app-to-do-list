import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { useForm } from '../hooks/useForm'
import { isValidTitle, isValidDesc } from '../logic/validations'
import { TASK_KEYS } from '../config/constants'
import Modal from './Modal'
import TaskForm from './TaskForm'

export default function EditTaskModal ({ initValues, onClose }) {
  const { editTaskForId } = useContext(TasksContext)
  const [TITLE, DESC] = TASK_KEYS
  const { values, errors, handleChange, validateForm } = useForm(
    initValues, null,
    { [TITLE]: isValidTitle, [DESC]: isValidDesc }
  )
  const handleSubmit = e => {
    e.preventDefault()
    const isValidForm  = validateForm()
    if (!isValidForm) return

    editTaskForId(values)
      .then(() => {
        onClose()
      })
      .catch(err => alert(`Error(${err}): Intente de nuevo`))
  }
  return (
    <Modal
      onClose={onClose}
      className='flex-grow flex flex-col justify-center'
    >
      <TaskForm
        title='Edit task'
        values={values}
        errors={errors}
        submitBtnValue='Save'
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}