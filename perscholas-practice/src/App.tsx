import ReceiptsLab from "./components/receipts-lab/ReceiptsLab"
import { Routes, Route } from "react-router-dom"
import CryptoApp from "./components/crypto-router-app/CryptoApp"
import EmployeeDirectory from "./components/employee-directory/EmployeeDirectory"
import EmployeePage from "./components/employee-directory/pages/EmployeePage"
import StockApp from "./components/stock-router-app/pages/StockApp"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Go to App.tsx to find routes</div>}/>
        <Route path="/receipts" element={<ReceiptsLab />}/>
        <Route path="/employeedirectory" element={<EmployeeDirectory />}/>
        <Route path="/employeedirectory/:id" element={<EmployeePage />}/>
        <Route path="/cryptoapp/*" element={<CryptoApp />}/>
        <Route path="/stockapp/*" element={<StockApp />}/>
      </Routes>
    </div>
  )
}

export default App
