import { Route, Routes } from "react-router-dom"
import StockAbout from "./StockAbout"
import StockHome from "./StockHome"
import Stocks from "./Stocks"
import StockDashboard from "./StockDashboard"

const StockApp = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<StockHome />} />
            <Route path="/about" element={<StockAbout />} />
            <Route path="/stocks/:symbol" element={<Stocks />} />
            <Route path="/stocks" element={<StockDashboard />} />
      </Routes>
    </div>
  )
}

export default StockApp