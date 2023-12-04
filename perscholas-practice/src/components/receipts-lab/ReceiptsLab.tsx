import Receipts from "./Receipts"
import { receipts } from './data'
import { useState } from "react";

const ReceiptsLab = () => {

    const [receiptsState, setReceiptsState] = useState(receipts);

  
  const handleReceiptClick = (index: number) => {
    const newReceipts = [...receiptsState];
    newReceipts[index].paid = true;
    setReceiptsState(newReceipts);
  };
  return (
    <div className="flex">
      {receiptsState.map((receipt, index) => (
        !receipt.paid && <Receipts key={index} receipt={receipt} onClick={() => handleReceiptClick(index)}/>
      ))}
      
    </div>
  )
}

export default ReceiptsLab