/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

const EmployeePage: any = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const employee: any = useSelector((state:any) => state.employee)

    const [employeeElement] = employee.filter((emp: any) => emp.id == id)

    useEffect(() => {
        console.log(employee)
      console.log(employeeElement)
      console.log(id)
    }, [])
    

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="w-80 h-[500px] flex flex-col border border-black m-0 p-2">
    <button onClick={() => navigate('/employeedirectory')} className="border-black border w-72 mx-auto">Back to Employee Directory</button>
        <div className='p-3'>
            <div className="flex border border-gray-200 p-2">
                <img className="rounded-full w-20 h-20 border"  src={employeeElement.avatar} alt={`${employeeElement.first_name} ${employeeElement.last_name}`} />
                <div className="flex items-center ml-4">
                    <h3 className='font-bold'>{employeeElement.first_name} {employeeElement.last_name}</h3>
                </div>
            </div>
            <div className="flex border border-gray-200 p-4 flex-col">
                <h1 className='font-medium'>Email</h1>
                <p className='text-gray-500'>{employeeElement.email}</p>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default EmployeePage