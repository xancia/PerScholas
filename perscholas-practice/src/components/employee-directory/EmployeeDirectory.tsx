import FormSection from './FormSection'
import HomePage from './HomePage'

const EmployeeDirectory = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-screen'>
      <HomePage />
      <FormSection />
    </div>
    </div>
  )
}

export default EmployeeDirectory