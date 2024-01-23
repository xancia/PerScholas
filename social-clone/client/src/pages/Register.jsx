/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Icon } from "@iconify/react"
import NavBar from "../components/NavBar"
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

const Register = ({setUser}) => {
    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('/auth/register', form)
            const token = response.data.token

            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get('/api/users', { 
                headers: {
                    Authorization: token
                }
            })

            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }
  return (
    <div>
        <NavBar />
        <div className = "w-screen h-screen flex justify-center items-center rounded-x1  border-opacity-10">
         
         
          <form onSubmit={handleSubmit}>
            <div className ="w-96 p-6 shadow-2xl px-12">
  
            <div className = "w-full h-full flex justify-center items-center p-4">
            <Icon className="text-7xl" icon="material-symbols:assignment-ind-sharp"/>
            </div>
            
            
            Email address:
            <br/>
            <input type='text' name = 'email' className = 'border-2 rounded-md w-full' onChange={handleChange}/>
            <br/><br/>
            Password:
            <br/>
            <input type = 'text' name='password'  className = 'border-2 rounded-md w-full' onChange={handleChange}/>
            <br/> <br/>
            <br/>
            <button className = ' w-40 border-2 rounded-md' > Register </button>
            <br/> <br/>
            </div>
          </form>
        </div>
        </div>
  )
}

export default Register