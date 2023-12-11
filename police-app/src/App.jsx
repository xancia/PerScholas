/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import Report from "./components/Report"

function App() {
  const [data,setData] = useState(null)
  const [input, setInput] = useState(10)
  const [borough, setBorough] = useState('BROOKLYN')
  const appToken = import.meta.env.VITE_APP_TOKEN


  useEffect(() => {
    getApiData()
  } 
  ,[borough])

  async function getApiData() {
    const promise = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$$app_token=${appToken}`)
    const data = await promise.json()
    setData(data)
  }

  console.log(data)

  function handleClick(location) {
    switch(location){
      case 'BROOKLYN':
        setBorough(location)
        break;
      case 'MANHATTAN':
        setBorough(location)
        break;
      case 'QUEENS':
        setBorough(location)
        break;
      case 'BRONX':
        setBorough(location)
        break;
      case 'STATEN ISLAND':
        setBorough(location)
        break;
    }
  }

  function handleChange(e){
    setInput(e.target.value)
  }

  

  return (
    <div>
      <input onChange={handleChange} value={input} placeholder="# OF COMPLAINTS"/>
      <button onClick={() => handleClick('BROOKLYN')}>Brooklyn</button>
      <button onClick={() => handleClick('MANHATTAN')}>Manhattan</button>
      <button onClick={() => handleClick('QUEENS')}>Queens</button>
      <button onClick={() => handleClick('BRONX')}>Bronx</button>
      <button onClick={() => handleClick('STATEN ISLAND')}>Staten Island</button>

      {data &&

      data.map((incident,index) => {
        if (index < input) {
        return(
        <Report key={incident.unique_key} incident={incident}/>
        )
        }
      })

      
      }
    </div>
  )
}

export default App
