import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTask } from '../services/tasks'
import { TasksContext } from '../contexts/tasks'
import Modal from '../components/Modal'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Spinner from '../components/Spinner'

export default function TaskModal() {
  const [values, setValues] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getTask({ id })
      .then(Task => setValues(Task))
  }, [])
  const firstColClasses = 'text-gray-700'
  const { deleteTaskForId } = useContext(TasksContext)

  const handleGoBack = () => navigate(-1)
  const handleEdit = () => navigate(`/tasks/${id}/edit`)
  const handleDelete = () => {
    deleteTaskForId(values)
      .then(handleGoBack)
  }
  // const { title, completed, description, createdAt } = values
  return (
    <Modal
      size='md'
      className='flex-grow flex-center-all flex-col gap-4'
      onClose={handleGoBack}
    >
      {!values && <Spinner className='text-violet-600' />}
      {values && (
        <>
          <h2 className='Title flex-center-all flex-wrap gap-x-4 gap-y-2'>
            <span>{values.title}</span>
            <span className={`capitalize ${values.completed ? 'text-green-700' : 'text-red-600'}`}>
              {`(${values.completed ? 'Finished' : 'Pending'})`}
            </span>
          </h2>
          <table>
            <tbody>
              <tr>
                <td className={firstColClasses}>Date</td>
                <td>{values.createdAt}</td>
              </tr>
              <tr>
                <td className={firstColClasses}>Description</td>
                <td>{values.description}</td>
              </tr>
            </tbody>
          </table>
          <div className='flex flex-wrap-reverse justify-center gap-6'>
            <SecondaryButton className='w-28' onClick={handleDelete}>Delete</SecondaryButton>
            <PrimaryButton className='w-28' onClick={handleEdit}>Edit</PrimaryButton>
          </div>
        </>
      )}
    </Modal>
  )
}