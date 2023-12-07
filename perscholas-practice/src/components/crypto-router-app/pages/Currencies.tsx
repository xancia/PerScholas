import { Link } from 'react-router-dom'

const Currencies = () => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];

  return (
    <div className='flex flex-col'>
        {currencies.map((coin, index) => {
            const { name, symbol} = coin

            return (
                <Link key={index} to={`/cryptoapp/price/${symbol}`} className='font-bold p-3'>
                    <h2>{name}</h2>
                </Link>
            )
        })}
    </div>
  )
}

export default Currencies