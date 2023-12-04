// import Receipts from "./components/Receipts"
// import { receipts } from './data'
import FormSection from './components/employee-directory/FormSection'
import HomePage from './components/employee-directory/HomePage'

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
    <div className='flex justify-center items-center h-screen'>
      <HomePage />
      <FormSection />
    </div>
  )
}

export default App
