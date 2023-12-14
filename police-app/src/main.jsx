import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PoliceContextProvider from './components/util/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PoliceContextProvider>
      <App />
    </PoliceContextProvider>
  </React.StrictMode>,
)
