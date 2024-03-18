import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Header/>
  <Main/>
  <Footer/>
  </React.StrictMode>,
)
