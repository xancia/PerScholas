/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStockContext } from "../components/StockContexContainer"
import { useParams } from "react-router-dom"

const Stocks = () => {
    const {stocks}:any = useStockContext()
    const {symbol} = useParams()
    const [stock] = stocks.filter((stock:any) => stock.symbol == symbol)

  return (
    <div>
      <div>{stock.name} | {stock.symbol}</div>
      <div>New Price: {stock.lastPrice + stock.change}</div>
      <div>High: {stock.high}</div>
      <div>Low: {stock.low}</div>
      <div>Open: {stock.open}</div>
    </div>
  )
}

export default Stocks