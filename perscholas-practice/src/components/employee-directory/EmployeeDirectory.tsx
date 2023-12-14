/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import FormSection from './FormSection';
import HomePage from './HomePage';
import { EmployeeType } from "./EmployeeListItem";

import { useSelector, useDispatch } from 'react-redux';
import { setData } from './store/employeeSlice';


const EmployeeDirectory = () => {
    const [input, setInput] = useState('');

    const employee = useSelector((state:any) => state.employee)
    const dispatch = useDispatch()

    async function fetchData() {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const data: { data: EmployeeType } = await response.json();
            dispatch(setData(data.data))
           
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);


    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value);
    }

    //This is dynamically changing each time input changes cause input is a state variable
    const newEmployeeList = employee.filter((emp: { first_name: string; last_name: string; }) => 
        emp.first_name.toLowerCase().includes(input.toLowerCase()) || 
        emp.last_name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className='flex justify-center items-center h-screen'>
            <HomePage employee={newEmployeeList} input={input} handleChange={handleChange} />
            <FormSection/>
        </div>
    )
}

export default EmployeeDirectory;
