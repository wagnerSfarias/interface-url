import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import { GlobalStyles } from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
    <ToastContainer autoClose={3000} />
  </StrictMode>
)
