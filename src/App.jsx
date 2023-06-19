import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
          <Nav />
          <Routes>
          <Route path='/' element={<About />} />
            <Route path='/shoes' element={<Shoes />} />
           
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
