// FormSection.tsx
import { useState } from "react"
import { EmployeeType } from "./EmployeeListItem";

type FormSectionProps = {
    addEmployee: (employee: EmployeeType) => void;
};

const FormSection = ({ addEmployee }: FormSectionProps) => {
    type FormType = {
        first_name: string;
        last_name: string;
        title: string;
        phone: string;
        email: string
    }

    const [form, setForm] = useState<FormType>({
        first_name: '',
        last_name: '',
        title: '',
        phone: '',
        email: ''
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newEmployee: EmployeeType = {
            ...form,
            id: Math.random(), 
            avatar: '/images/headshot4.jpeg' 
        };
        addEmployee(newEmployee);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    return (
        <div className="w-80 h-[500px] flex flex-col border border-black m-0 p-2">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name: </label>
                <input id="first_name" className="border border-black" type="text" value={form.first_name} onChange={handleChange} />

                <label htmlFor="last_name">Last Name: </label>
                <input id="last_name" className="border border-black" type="text" value={form.last_name} onChange={handleChange} />

                <label htmlFor="title">Title: </label>
                <input id="title" className="border border-black" type="text" value={form.title} onChange={handleChange} />

                <label htmlFor="phone">Phone: </label>
                <input id="phone" className="border border-black" type="text" value={form.phone} onChange={handleChange} />

                <label htmlFor="email">Email: </label>
                <input id="email" className="border border-black" type="text" value={form.email} onChange={handleChange} />

                <button className="border border-black mt-2">Submit</button>
            </form>
        </div>
    )
}

export default FormSection