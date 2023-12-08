/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { useStockContext } from "../components/StockContexContainer"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

type stockType = { symbol: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; lastPrice: number; change: number }

const StockDashboard = () => {

    const {stocks}:any = useStockContext()

  return (
    <div>
      {stocks.map((stock: stockType, index: Key | null | undefined) => (
        <Link to={`/stockapp/stocks/${stock.symbol}`} key={index}>
          <h3>{stock.name} {stock.symbol}</h3>
          <p>New Price: {stock.lastPrice + stock.change} </p>
          <p>Change %: {(stock.change / stock.lastPrice)*100}</p>
        </Link>
      ))}
    </div>
  )
}

export default StockDashboard