import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StockContextContainer from './components/stock-router-app/components/StockContexContainer.tsx'
import { Provider } from 'react-redux'
import { store } from './components/employee-directory/store/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StockContextContainer>
        <Router>
          <App />
        </Router>
      </StockContextContainer>
    </Provider>
  </React.StrictMode>,
)
