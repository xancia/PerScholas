import { useState } from "react"

const FormSection = () => {
    type FormType = {
        name: string;
        title: string;
        phone: string;
        email: string
    }

    const [form, setForm] = useState<FormType>({
        name: '',
        title: '',
        phone: '',
        email: ''
      })

    function handleSubmit() {}

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, [e.target.id]: e.target.value})
    }

  return (
    <div className="w-80 h-[500px] flex flex-col border border-black m-0 p-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input id="name" className="border border-black" type="text" value={form.name} onChange={handleChange}/>

            <label htmlFor="title">Title: </label>
            <input id="title" className="border border-black" type="text" value={form.title} onChange={handleChange}/>

            <label htmlFor="phone">Phone: </label>
            <input id="phone" className="border border-black" type="text" value={form.phone} onChange={handleChange}/>

            <label htmlFor="email">Email: </label>
            <input id="email" className="border border-black" type="text" value={form.email} onChange={handleChange}/>

            <button className="border border-black mt-2">Submit</button>
        </form>
    </div>
  )
}

export default FormSection