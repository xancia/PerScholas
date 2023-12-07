import Nav from "./components/Nav"
import Currencies from "./pages/Currencies"
import Main from "./pages/Main"
import Price from "./pages/Price"
import { Route, Routes } from 'react-router-dom'

const CryptoApp = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  )
}

export default CryptoApp