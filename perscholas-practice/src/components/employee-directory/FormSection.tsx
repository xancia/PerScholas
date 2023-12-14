/* eslint-disable @typescript-eslint/no-explicit-any */
// FormSection.tsx
import { useRef, useState } from "react"
import { randomImageGen } from "./util/util";
import { useDispatch } from "react-redux";
import { addEmployee } from "./store/employeeSlice";
import { useSelector } from "react-redux";




const FormSection = () => {
    const [isFormShowing, setIsFormShowing] = useState(false)
    const dispatch = useDispatch()
    const employee = useSelector((state:any) => state.employee)
   
    type refType = HTMLInputElement | null

    const firstNameRef = useRef<refType>(null)
    const lastNameRef = useRef<refType>(null)
    const emailRef = useRef<refType>(null)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (firstNameRef.current && lastNameRef.current && emailRef.current){
        const newEmployee = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            id: crypto.randomUUID(),
            avatar: randomImageGen(),
            length: 0,
        };
        dispatch(addEmployee(newEmployee))
        console.log(employee)
    }
    }

    function handleClick(){
        setIsFormShowing(!isFormShowing)
    }

    return (
        <div className="w-80 h-[500px] flex flex-col border border-black m-0 p-2">
        <button onClick={handleClick} className="border-black border w-32 mx-auto">Add Employees</button>
        {isFormShowing &&
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name: </label>
                <input id="first_name" className="border border-black"  ref={firstNameRef} />

                <label htmlFor="last_name">Last Name: </label>
                <input id="last_name" className="border border-black"  ref={lastNameRef} />

                <label htmlFor="email">Email: </label>
                <input id="email" className="border border-black"  ref={emailRef} />

                <button className="border border-black mt-2">Submit</button>
            </form>
        }
        </div>
    )
}

export default FormSection