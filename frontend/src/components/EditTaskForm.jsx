import { TASK_KEYS } from '../config/constants'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Input from './Input'

export default function EditTaskForm({ onSubmit, onCancel, onChange, values, errors }) {
  const [TITLE, DESC] = TASK_KEYS
  return (
    <>
      <h3 className='Title'>Edit task</h3>
      <form action="" onSubmit={onSubmit}>
        <Input
          name={TITLE}
          className='focus-ring-default'
          placeholder='Study for Biology test'
          label='Title'
          value={values[TITLE]}
          error={errors[TITLE]}
          onChange={onChange}
        />
        <Input
          name={DESC}
          className='focus-ring-default resize-none h-32'
          placeholder='Biology homework due this Friday, covering cells and genetics...'
          label='Description'
          value={values[DESC]}
          error={errors[DESC]}
          onChange={onChange}
          multiline
        />
        <div className='flex flex-wrap justify-center gap-6 mt-12'>
          <SecondaryButton className='w-28' onClick={onCancel}>Cancel</SecondaryButton>
          <PrimaryButton className='w-28'>Save</PrimaryButton>
        </div>
      </form>
    </>
  )
}