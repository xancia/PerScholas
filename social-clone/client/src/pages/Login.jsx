import { Icon } from "@iconify/react"
import NavBar from "../components/NavBar"

/* eslint-disable react/no-unescaped-entities */
function Login () {
    
    return (
        <div>
        <NavBar />
        <div className = "w-screen h-screen flex justify-center items-center rounded-x1  border-opacity-10">
         
         
          <form >
            <div className ="w-96 p-6 shadow-2xl px-12">
  
            <div className = "w-full h-full flex justify-center items-center p-4">
            <Icon className="text-7xl" icon="streamline:interface-login-password-lock-login-padlock-password-secure-security-textbox-type"/>
            </div>
            
            
            Email address:
            <br/>
            <input type='text' name = 'email' className = 'border-2 rounded-md w-full' />
            <br/><br/>
            Password:
            <br/>
            <input type = 'text'  className = 'border-2 rounded-md w-full'/>
            <br/> <br/>
            <div className = 'mx-1'>
              
                User <input type = 'radio' name = 'user' className = 'mx-1' />
              
                Admin <input type = 'radio' name = 'admin' className = 'mx-1'/>
              
            </div>
            <br/>
            <button className = ' w-40 border-2 rounded-md' > Login </button>
            <br/> <br/>
            <div className = ''>
              <p>Don't have an account?</p>
              <a href = '/register' className = 'underline' > Register Now </a>
              
            </div>
            </div>
          </form>
        </div>
        </div>
  
    )
  }
  export default Login