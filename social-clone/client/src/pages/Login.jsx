/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react"
import NavBar from "../components/NavBar"
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */

let emptyForm = { 
    username: '',
    password: ''
}


function Login ({setUser}) {
    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('/auth/login', form)
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
            alert('Wrong Username or Password')
        }
    }

    
    return (
        <div>
        <NavBar />
        <div className = "w-screen h-screen flex justify-center items-center rounded-x1  border-opacity-10">
         
         
          <form onSubmit={handleSubmit}>
            <div className ="w-96 p-6 shadow-2xl px-12">
  
            <div className = "w-full h-full flex justify-center items-center p-4">
            <Icon className="text-7xl" icon="streamline:interface-login-password-lock-login-padlock-password-secure-security-textbox-type"/>
            </div>
            
            
            <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                    className = 'border-2 rounded-md w-full'
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className = 'border-2 rounded-md w-full'
                />
                <br /><br />
                <button className = ' w-40 border-2 rounded-md'>Submit</button>
            </div>
          </form>
        </div>
        </div>
  
    )
  }
  export default Login


  // className = 'border-2 rounded-md w-full'

  // className = ' w-40 border-2 rounded-md'