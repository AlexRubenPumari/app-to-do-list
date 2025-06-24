import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { TasksContext } from '../contexts/tasks'
import { useForm } from '../hooks/useForm'
import { isValidTitle, isValidDesc } from '../logic/validations'
import { getFormattedDateString } from '../logic/date'
import { getTask } from '../services/tasks'
import { TASK_KEYS } from '../config/constants'
import Spinner from '../components/Spinner'
import Modal from '../components/Modal'
import TaskForm from '../components/TaskForm'

export default function AddTaskModal () {
  const navigate = useNavigate()
  const handleGoBack = () => navigate(-1)
  const { id } = useParams()

  const { addNewTask, editTaskForId } = useContext(TasksContext)
  const mainFunction = id ? editTaskForId : addNewTask
  const { TITLE, DESC, COMPLETED } = TASK_KEYS
  const { values, errors, handleChange, validateForm, setValues } = useForm(
    !id ? { [TITLE]: '', [DESC]: '' } : {}, 
    null,
    { [TITLE]: isValidTitle, [DESC]: isValidDesc }
  )
  const handleSubmit = e => {
    e.preventDefault()
    const isValidForm  = validateForm()
    if (!isValidForm) return

    mainFunction(
      { ...values, completed: id ? values[COMPLETED] : false, createdAt: getFormattedDateString() }
    )
      .then(() => handleGoBack())
      .catch(err => alert(`Error(${err}): Intente de nuevo`))
  }
  useEffect(() => {
    if (!id) return

    getTask({ id })
      .then(Task => setValues(Task))
  }, [])
  return (
    <Modal
      onClose={handleGoBack}
      className='flex-grow flex flex-col justify-center'
    >
      {(id && !values.id) && <Spinner className='text-violet-600' />} 
      {(!id || values.id) && (
        <TaskForm
          title={`${id ? 'Edit' : 'Add'} task`}
          values={values}
          errors={errors}
          submitBtnValue={id ? 'Save' : 'Add'}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleGoBack}
          showCheckbox={!!id}
          isLoading={id && !values.id}
        />
      )}
    </Modal>
  )
}