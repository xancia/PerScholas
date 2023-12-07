import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full flex justify-evenly bg-gray-800 text-white h-10 items-center'>
        <Link to={"/cryptoapp"}>Home</Link>
        <Link to={"/cryptoapp/currencies"}>Currencies</Link>
        <Link to={"/cryptoapp/price"}>Price</Link>
    </div>
  )
}

export default Nav