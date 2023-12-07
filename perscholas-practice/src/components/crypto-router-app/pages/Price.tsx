/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


const Price = () => {
  const apikey = import.meta.env.VITE_COINAPI_API_URL
  const { symbol } = useParams()

  /* useNavigate
  import useNaviate
  
  const navigate = useNavigate()

  <div onClick={() => navigate('/')}> this turns this element into a navigation link to the link provided

  */

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apikey}`;

  const [coin, setCoin] = useState<any>(null)

  async function getCoin() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCoin(data)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getCoin()
  }, [symbol])
  

  return (
    <div>
      {coin &&
        <div>
        <p>{coin.asset_id_base} / {coin.asset_id_quote}</p>
        <p>{coin.rate}</p>
        <p>{coin.time}</p>
        </div>
      }
    </div>
  )
}

export default Price