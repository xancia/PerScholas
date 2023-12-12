import { useEffect, useState } from "react"
import { fetchData } from "./services/sw-api"

function App() {
  const [data, setData] = useState(null)

  

  useEffect(() => {
    fetchData().then((data) => setData(data.results))
  } 
  ,[])

  console.log(data)

  return (
    <div className="max-w-screen-lg grid grid-cols-4 h-screen mx-auto gap-4 mt-10">
     {data && 
     data.map((ship, index) => (
      <div className="flex rounded-md bg-green-900 text-white max-w-xs h-32 justify-center items-center" key={index}>
        {ship.name}
      </div>
     ))
     }
    </div>
  )
}

export default App
