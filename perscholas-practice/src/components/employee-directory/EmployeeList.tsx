import EmployeeListItem from "./EmployeeListItem";
import { useEffect } from "react";
import { useState } from "react";
import {EmployeeType} from "./EmployeeListItem";

export const EmployeeList = () => {
    type ApiResponse = {
        data: EmployeeType[];
    };
    
    const [employee, setEmployee] = useState<ApiResponse | null>(null);

    async function fetchData(){
        try {
          const response = await fetch("https://reqres.in/api/users?page=1");
          const data = await response.json();
          setEmployee(data);
        } catch (error) {
          console.error(error);
        }
      }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(employee);

  return (
    <div>
      <div className="flex flex-col p-2 overflow-scroll employee-list max-h-[400px]">
        {employee &&
          employee.data.map((emp) => (
            <EmployeeListItem key={emp.id} data={emp} />
          ))}
      </div>
    </div>
  );
};
