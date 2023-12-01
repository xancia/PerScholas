import Receipts from "./components/Receipts"
import { receipts } from './data'
import {useState} from 'react'

function App() {
  const [receiptsState, setReceiptState] = useState(receipts)

 

  return (
    <div className="flex">
      {receiptsState.map((receipt, index) => (
        !receipt.paid && <Receipts key={index} receipt={receipt} />
      ))}
      
    </div>
  )
}

export default App
