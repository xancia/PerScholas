// EmployeeList.tsx
import EmployeeListItem from "./EmployeeListItem";
import { EmployeeType } from "./EmployeeListItem";

type EmployeeListProps = {
    employee: EmployeeType[] | undefined;
};

export const EmployeeList = ({ employee }: EmployeeListProps) => {
    return (
        <div className="flex flex-col p-2 overflow-scroll employee-list max-h-[400px]">
            {employee && employee.map(emp => (
                <EmployeeListItem key={emp.id} data={emp} />
            ))}
        </div>
    );
};
