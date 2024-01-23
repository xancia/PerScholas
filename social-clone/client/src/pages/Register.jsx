/* eslint-disable react/no-unescaped-entities */
import NavBar from "../components/NavBar"


const Register = () => {
  return (
    <div>
        <NavBar />
        <div className = "w-screen h-screen flex justify-center items-center rounded-x1  border-opacity-10">
         
         
          <form >
            <div className ="w-96 p-6 shadow-2xl px-12">
  
            <div className = "w-10 h-20 flex justify-center items-center mx-24 my-5 ">
            <img src="src\icon.png"/>
            </div>
            
            
            Email address:
            <br/>
            <input type='text' name = 'email' className = 'border-2 rounded-md w-full' />
            <br/><br/>
            Password:
            <br/>
            <input type = 'text'  className = 'border-2 rounded-md w-full'/>
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