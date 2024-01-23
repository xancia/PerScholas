/* eslint-disable react/prop-types */
import Feed from "../components/Feed"
import NavBar from "../components/NavBar"


const Home = ({username}) => {
  return (
    <div>
        <NavBar />
        <Feed username={username}/>
    </div>
  )
}

export default Home