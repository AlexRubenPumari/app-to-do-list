import { TASK_KEYS } from '../config/constants'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Input from './Input'
import Checkbox from './Checkbox'

export default function TaskForm({
  onSubmit, onCancel, onChange, cancelBtnValue = 'Cancel', submitBtnValue, values, errors, title, showCheckbox
}) {
  const { TITLE, DESC, COMPLETED } = TASK_KEYS
  return (
    <>
      {title && <h3 className='Title'>{title}</h3>}
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
        {showCheckbox && (
          <div className='flex gap-4'>
            <label>Completed:</label>
            <Checkbox name={COMPLETED} value={values[COMPLETED]} onChange={onChange} />
          </div>
        )}
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
        <div className='flex flex-wrap-reverse justify-center gap-6 mt-12'>
          <SecondaryButton className='w-28' onClick={onCancel}>
            {cancelBtnValue}
          </SecondaryButton>
          <PrimaryButton className='w-28'>
            {submitBtnValue}
          </PrimaryButton>
        </div>
      </form>
    </>
  )
}