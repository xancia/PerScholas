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
    const promise = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=100&$$app_token=${appToken}`)
    const data = await promise.json()
    setData(data)
  }


  function handleChange(e){
    setInput(e.target.value)
  }

  

  return (
    <div className="bg-gray-200 w-screen min-h-screen">
    <div className="max-w-screen-lg flex flex-col items-center mx-auto">
      <h1 className="mt-5 font-bold text-4xl">WHERE CAN WE CAUSE TROUBLE TODAY?</h1>
      <div className="flex w-full justify-center gap-1 m-10">
      <input className="border border-gray-300 p-1 rounded-md mr-1 py-2 w-40" type="number" onChange={handleChange} value={input} placeholder="# OF COMPLAINTS"/>
      <button className="border bg-blue-800 text-white border-gray-800 rounded-md px-2 p-1" onClick={() => setBorough('BROOKLYN')}>Brooklyn</button>
      <button className="border bg-blue-800 text-white border-gray-800 rounded-md px-2 p-1" onClick={() => setBorough('MANHATTAN')}>Manhattan</button>
      <button className="border bg-blue-800 text-white border-gray-800 rounded-md px-2 p-1" onClick={() => setBorough('QUEENS')}>Queens</button>
      <button className="border bg-blue-800 text-white border-gray-800 rounded-md px-2 p-1" onClick={() => setBorough('BRONX')}>Bronx</button>
      <button className="border bg-blue-800 text-white border-gray-800 rounded-md px-2 p-1" onClick={() => setBorough('STATEN ISLAND')}>Staten Island</button>
      </div>
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
    </div>
  )
}

export default App
