import { useState, useEffect } from 'react';
import FormSection from './FormSection';
import HomePage from './HomePage';
import { EmployeeType } from "./EmployeeListItem";

const EmployeeDirectory = () => {
    const [employee, setEmployee] = useState<EmployeeType[]>([]);
    const [input, setInput] = useState('');


    async function fetchData() {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const data: { data: EmployeeType[] } = await response.json();
            setEmployee(data.data);
           
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function addEmployee(newEmployee: EmployeeType) {
        const updatedEmployees = [...employee, newEmployee];
        setEmployee(updatedEmployees);
       
    }

    // function filterEmployee(value: string) {
    //     const newEmployeeList = employee.filter(emp => 
    //         emp.first_name.toLowerCase().includes(value.toLowerCase()) || 
    //         emp.last_name.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilteredEmployeeList(newEmployeeList);
    // }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value);
    }

    //This is dynamically changing each time input changes cause input is a state variable
    const newEmployeeList = employee.filter(emp => 
        emp.first_name.toLowerCase().includes(input.toLowerCase()) || 
        emp.last_name.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className='flex justify-center items-center h-screen'>
            <HomePage employee={newEmployeeList} input={input} handleChange={handleChange} />
            <FormSection addEmployee={addEmployee} />
        </div>
    )
}

export default EmployeeDirectory;
