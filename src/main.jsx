import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RootLayout from './layouts/RootLayout.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RootLayout>

    <App  />
    </RootLayout>
   
    </BrowserRouter>
    
)
