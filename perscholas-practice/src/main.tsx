import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StockContextContainer from './components/stock-router-app/components/StockContexContainer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StockContextContainer>
      <Router>
        <App />
      </Router>
    </StockContextContainer>
  </React.StrictMode>,
)
