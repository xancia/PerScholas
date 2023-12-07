import ReceiptsLab from "./components/receipts-lab/ReceiptsLab"
import { Routes, Route } from "react-router-dom"
import CryptoApp from "./components/crypto-router-app/CryptoApp"
import EmployeeDirectory from "./components/employee-directory/EmployeeDirectory"



function App() {
  

  return (
    
    <div>
      <Routes>
        <Route path="/" element={<div>Go to App.tsx to find routes</div>}/>
        <Route path="/receipts" element={<ReceiptsLab />}/>
        <Route path="/employeedirectory" element={<EmployeeDirectory />}/>
        <Route path="/cryptoapp/*" element={<CryptoApp />}/>
      </Routes>
    </div>
  )
}

export default App
