import ReceiptsLab from "./components/receipts-lab/ReceiptsLab"
import { Routes, Route } from "react-router-dom"
import CryptoApp from "./components/crypto-router-app/CryptoApp"
import EmployeeDirectory from "./components/employee-directory/EmployeeDirectory"
import EmployeePage from "./components/employee-directory/pages/EmployeePage"
import {useState} from 'react'
import { EmployeeType } from "./components/employee-directory/EmployeeListItem"
import StockApp from "./components/stock-router-app/pages/StockApp"


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [employee, setEmployee] = useState<EmployeeType[]>([]); // used for employee directory lab/hw

  return (
    
    <div>
      <Routes>
        <Route path="/" element={<div>Go to App.tsx to find routes</div>}/>
        <Route path="/receipts" element={<ReceiptsLab />}/>
        <Route path="/employeedirectory" element={<EmployeeDirectory employee={employee} setEmployee={setEmployee}/>}/>
        <Route path="/employeedirectory/:id" element={<EmployeePage employee={employee}/>}/>
        <Route path="/cryptoapp/*" element={<CryptoApp />}/>
        <Route path="/stockapp/*" element={<StockApp />}/>
      </Routes>
    </div>
  )
}

export default App
