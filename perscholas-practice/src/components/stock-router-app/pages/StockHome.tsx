import { Link } from "react-router-dom"

const StockHome = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between w-60 p-4">
        <Link to="/stockapp/">Home</Link>
        <Link to="/stockapp/stocks">Stocks</Link>
        <Link to="/stockapp/about">About</Link>
        </div>
        <p className="p-8">Home Page</p>
    </div>
  )
}

export default StockHome