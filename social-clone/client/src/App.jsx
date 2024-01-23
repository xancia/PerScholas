import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({})
  async function getUser(token) {
    try {
        const response = await axios.get('/api/users', {
            headers: {
                Authorization: token
            }
        })

        setUser(response.data)
    } catch (error) {
        console.log(error)
        localStorage.removeItem('token')
    }
}

useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        getUser(token)
    } 
}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home username={user.username}/>} />
        <Route path="/register" element={<Register setUser={setUser}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/profile" element={<Profile username={user.username} email={user.email}/>} />
      </Routes>
    </>
  )
}

export default App
