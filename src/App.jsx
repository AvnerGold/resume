
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/App.css'
import Home from './pages/Home'
import Nav from './component/Nav'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './pages/About';
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.min.js"></script>



function App() {

  return (
    <>
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
      <BrowserRouter>
          <Nav/>
         
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />          
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
