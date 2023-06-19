import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './component/Nav'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.min.js"></script>



function App() {

  return (
    <>
      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={<Home />} />
          
           
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
