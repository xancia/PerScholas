// EmployeeListItem.tsx
import { useState, useEffect } from 'react';
export type EmployeeType = {
    filter(arg0: (emp: { first_name: string; last_name: string; }) => boolean): unknown;
    length: number;
    id: number | string;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
};

import { rgbRandomizer } from "./util/util";

const EmployeeListItem: React.FC<{ data: EmployeeType }> = ({ data }) => {
    const [randomBorderColor, setRandomBorderColor] = useState<React.CSSProperties | undefined>(undefined)

    useEffect(() => {
        const rgbborder = rgbRandomizer()
        setRandomBorderColor(rgbborder)
    }, [])
    

    return (
        <div className="flex border border-gray-500 p-2">
            <img className="rounded-full w-14 h-14 border" style={randomBorderColor} src={data.avatar} alt={`${data.first_name} ${data.last_name}`} />
            <div className="ml-2 mt-1">
                <h3>{data.first_name} {data.last_name}</h3>
                <h3 className="">{data.email}</h3>
            </div>
        </div>
    )
}

export default EmployeeListItem
