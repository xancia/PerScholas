// EmployeeListItem.tsx
export type EmployeeType = {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
};

const EmployeeListItem: React.FC<{ data: EmployeeType }> = ({ data }) => {
    return (
        <div className="flex border border-gray-500 p-2">
            <img className="rounded-full h-14" src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />
            <div className="ml-2 mt-1">
                <h3>{data.first_name} {data.last_name}</h3>
                <h3 className="">{data.email}</h3>
            </div>
        </div>
    )
}

export default EmployeeListItem
