import React from 'react'
import './header.css'

const Header= ()=>(
    <div className="forfont">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
  <a className="navbar-brand" href="www.google.com"><img src="FrontendAssets\logo.svg" alt="pic"/>Intugine</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav alignment ml-auto w-100 justify-content-end">
      <li className="nav-item active">
        <a className="nav-link" href="www.google.com">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">Brands</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="www.google.com">Transporters</a>

      </li>
      <li>
      <a className="navbar-brand  logop" href="www.google.com"><img src="FrontendAssets\profile.svg" alt="pic"/></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
  </div>
</nav>
    </div>
)

export default Header;
    
