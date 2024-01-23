import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

//npm install react-icons --save


const ProfileBody = () => {
  return (
    <div className='grid place-content-center font-semibold'>
        <div className='flex flex-col space-y-4 '>

          <p className='text-[25px]'>NAME</p>
          <p className='text-[14px]'>LOCATION</p>
          <p className="text-[14px]">TITLE</p>
          </div>
          <div className="flex space-x-4 p-4 text-blue-500  msg-icon text-2xl mr-2">
          <a className="hover:text-blue-700" href="#"><FaTwitter /></a>
          <a className="hover:text-blue-700" href="#"><FaLinkedin /></a>
          <a className="hover:text-blue-700" href="#"><FaFacebook /></a>
          </div>
    
          <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Show more</button>
        
        
      </div>
  )
}

export default ProfileBody