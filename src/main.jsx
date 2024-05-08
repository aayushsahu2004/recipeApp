import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from './context/RecipeContext.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecipeContext>
      <App />
      <ToastContainer />
    </RecipeContext>
  </BrowserRouter>

)
