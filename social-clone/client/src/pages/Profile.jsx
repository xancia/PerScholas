/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import NavBar from "../components/NavBar"
import ProfileBody from "../components/ProfileBody"
import ProfileHeader from "../components/ProfileHeader"


const Profile = ({ username, email }) => {
  return (
    <div>
        <NavBar />
        <div className="flex justify-center items-center h-screen">
        <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
        }}
        />
        <div className="flex flex-col max-w-screen-lg mx-auto relative bg-white">
        <ProfileHeader />
        <ProfileBody />
        </div>
    </div>
  </div>
  )
}

export default Profile