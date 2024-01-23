import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={null} />
        <Route path="/login" element={null} />
        <Route path="/profile" element={null} />
      </Routes>
    </>
  )
}

export default App
