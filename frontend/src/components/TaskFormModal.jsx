import { useForm } from '../hooks/useForm'
import Input from './Input'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Modal from './Modal'
import { isValidTitle, isValidDesc } from '../logic/validations'
const TASK_KEYS = ['title', 'description']

export default function TaskFormModal ({ onClose }) {
  const [TITLE, DESC] = TASK_KEYS
  const { values, errors, handleChange, validateForm } = useForm(
    { [TITLE]: '', [DESC]: '' }, null,
    { [TITLE]: isValidTitle, [DESC]: isValidDesc }
  )
  const handleSubmit = e => {
    e.preventDefault()
    console.log(validateForm())
  }
  return (
    <Modal
      onClose={onClose}
      className='flex-grow flex flex-col justify-center'
    >
      <h3 className='Title'>Add task</h3>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name={TITLE}
          className='focus-ring-default'
          placeholder='Study for Biology test'
          label='Title'
          value={values[TITLE]}
          error={errors[TITLE]}
          onChange={handleChange}
        />
        <Input
          name={DESC}
          className='focus-ring-default resize-none h-32'
          placeholder='Biology homework due this Friday, covering cells and genetics...'
          label='Description'
          value={values[DESC]}
          error={errors[DESC]}
          onChange={handleChange}
          multiline
        />
        <div className='flex flex-wrap justify-center gap-6 mt-12'>
          <SecondaryButton className='w-28' onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton className='w-28'>Save</PrimaryButton>
        </div>
      </form>
    </Modal>
  )
}