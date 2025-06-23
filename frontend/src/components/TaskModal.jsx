import Modal from './Modal'

export default function TaskModal ({ values, onClose }) {
  const firstColClasses = 'text-gray-700'
  const { title, completed, description, createdAt } = values
  return (
    <Modal
      size='md'
      className='flex-grow flex-center-all flex-col gap-4'
      onClose={onClose}
    >
      <h2 className='Title'>{title}</h2>
      <table>
        <tbody>
          <tr>
            <td className={firstColClasses}>Status</td>
            <td className='font-bold'>
              {
              !completed
                ? <span className='text-red-600'>Pending</span>
                : <span className='text-green-700'>Finished</span>
              }
              </td>
          </tr>
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
    </Modal>
  )
}