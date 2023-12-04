// EmployeeDirectory.tsx
import { useState, useEffect } from 'react';
import FormSection from './FormSection';
import HomePage from './HomePage';
import { EmployeeType } from "./EmployeeListItem";

const EmployeeDirectory = () => {
    const [employee, setEmployee] = useState<EmployeeType[] | null>(null);

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
        if (employee) {
            setEmployee([...employee, newEmployee]);
        } else {
            setEmployee([newEmployee]);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <HomePage employee={employee || []} />
            <FormSection addEmployee={addEmployee} />
        </div>
    )
}

export default EmployeeDirectory