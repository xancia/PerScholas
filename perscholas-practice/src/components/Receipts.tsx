type ReceiptsProps = {
    receipt: {
        person: string;
        order: {
            main: string;
            protein: string;
            rice: string;
            sauce: string;
            toppings: string[];
            drink: string;
            cost: number;
        };
        paid: boolean;
    };
    onClick: () => void; 
};

const Receipts: React.FC<ReceiptsProps> = ({ receipt, onClick}) => {
  return (
    <div className="w-60 h-96 border border-orange-500 m-5" onClick={onClick}>
        <div className="p-8">
            <h1 className="font-bold text-3xl">{receipt.person}</h1>
            <p className="font-bold py-1 pt-4"><span className="text-purple-800">Main:</span> {receipt.order.main}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Protein:</span> {receipt.order.protein}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Rice:</span> {receipt.order.rice}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Sauce:</span> {receipt.order.sauce}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Drink:</span> {receipt.order.drink}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Cost:</span> {receipt.order.cost}</p>
            <p className="font-bold py-1"><span className="text-purple-800">Toppings:</span> {receipt.order.toppings}</p>
        </div>
    </div>
  )
}

export default Receipts