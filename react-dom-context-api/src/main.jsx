import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FeactDataProvider } from './component/context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FeactDataProvider>
  
   <App />

  </FeactDataProvider>
  </BrowserRouter>
)
