import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Teams from "./components/Teams"
import Games from "./components/Games"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:abbreviation" element={<Games />} />
      </Routes>
    </div>
  )
}

export default App
