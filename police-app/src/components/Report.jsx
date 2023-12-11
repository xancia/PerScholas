/* eslint-disable react/prop-types */
import { useState } from "react"


const Report = ({incident}) => {
    const [policeReport, setPoliceReport] = useState(false)

    function handleToggle(){
        setPoliceReport(!policeReport)
    }
  return (
    <div>
        <div key={incident.unique_key} className="flex flex-col items-center">
        <div className="flex justify-between w-[700px] p-4">
      <p className="font-bold">{incident.descriptor}</p>
      <button className="rounded-md bg-red-500 text-white px-2" onClick={handleToggle}>WHAT DID THE POLICE DO?</button>
      </div>
      {policeReport && <p>{incident.resolution_description}</p>}
      </div>
    </div>
  )
}

export default Report