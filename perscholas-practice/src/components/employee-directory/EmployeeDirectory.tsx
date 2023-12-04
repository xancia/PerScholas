import { useState, useEffect } from 'react';
import FormSection from './FormSection';
import HomePage from './HomePage';
import { EmployeeType } from "./EmployeeListItem";

const EmployeeDirectory = () => {
    const [employee, setEmployee] = useState<EmployeeType[]>([]);
    const [input, setInput] = useState('');
    const [filteredEmployeeList, setFilteredEmployeeList] = useState<EmployeeType[]>([]);

    async function fetchData() {
        try {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const data: { data: EmployeeType[] } = await response.json();
            setEmployee(data.data);
            setFilteredEmployeeList(data.data);
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
        setFilteredEmployeeList(updatedEmployees);
    }

    function filterEmployee(value: string) {
        const newEmployeeList = employee.filter(emp => 
            emp.first_name.toLowerCase().includes(value.toLowerCase()) || 
            emp.last_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredEmployeeList(newEmployeeList);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setInput(e.target.value);
        filterEmployee(e.target.value);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <HomePage employee={filteredEmployeeList} input={input} handleChange={handleChange} />
            <FormSection addEmployee={addEmployee} />
        </div>
    )
}

export default EmployeeDirectory;
