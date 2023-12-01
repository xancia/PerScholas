import { useState } from "react"

function App() {
 const [input, setInput] = useState('')
 const [data, setData] = useState({})

 function handlechange(e) {
  setInput(e.target.value)
 }

 async function handleSubmit(e){
  e.preventDefault() // don't refresh page
  let requestURL = `https://www.omdbapi.com/?apikey=f58729d4&t=${input}`

  // make a request to the api
  /* async await */
  let response = await fetch(requestURL)
  let data = await response.json()
  setData(data)

  /* .then method */
  // fetch(requestURL)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setData(data);
  //   })

 }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit}>
        <input className="border border-black" type="text" value={input} onChange={handlechange}/>
        <button className="border border-black" >submit</button>
      </form>
    </div>
  )
}

export default App
