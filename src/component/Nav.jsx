import React from 'react'
import myImage  from '../assets/images/nav-img/me.jpg'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
  

    <div className="profile">

  <nav className="navbar navbar-expand-lg navbar-light ">
  <div style={{ display: 'flex', alignItems: 'center' }}>
   <img src={myImage} alt="MY Image" style={{ maxWidth: '90px', maxHeight: '150px', objectFit: 'contain', padding: '10px', borderRadius: '30%' }} />
  <p className='profile-name'>Avner <br /> Goldberg</p>

    </div>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" ></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            projects
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="https://gta-web-server.netlify.app">gta-web</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">about</Link>
        </li>
      </ul>
     
    </div>
  </nav>
</div>
   



    </>
   
  )
}
