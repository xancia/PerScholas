// EmployeeList.tsx
import EmployeeListItem from "./EmployeeListItem";
import { EmployeeType } from "./EmployeeListItem";
import { Link } from 'react-router-dom'

type EmployeeListProps = {
    employee: EmployeeType[] | undefined;
};

export const EmployeeList = ({ employee }: EmployeeListProps) => {
    return (
        <div className="flex flex-col p-2 overflow-scroll employee-list max-h-[400px]">
            {employee && employee.map(emp => (
                <Link key={emp.id} to={`/employeedirectory/${emp.id}`}>
                    <EmployeeListItem data={emp} />
                </Link>
            ))}
        </div>
    );
};
