// import Receipts from "./components/Receipts"
// import { receipts } from './data'

import EmployeeDirectory from "./components/employee-directory/EmployeeDirectory"


function App() {
  // const [receiptsState, setReceiptsState] = useState(receipts);

  
  // const handleReceiptClick = (index: number) => {
  //   const newReceipts = [...receiptsState];
  //   newReceipts[index].paid = true;
  //   setReceiptsState(newReceipts);
  // };

  return (
    // <div className="flex">
    //   {receiptsState.map((receipt, index) => (
    //     !receipt.paid && <Receipts key={index} receipt={receipt} onClick={() => handleReceiptClick(index)}/>
    //   ))}
      
    // </div>
    <div>
      <EmployeeDirectory />
    </div>
  )
}

export default App
