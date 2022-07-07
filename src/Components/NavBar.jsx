import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return ( 
    <nav className="navbar navbar-expand bg-dark navcolors" >
  <div className="container-fluid navcolors" >
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navcolors"  id="navbarNavAltMarkup">
      <div className="navbar-nav navcolors" >
        <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        <Link className="nav-link" to="/Students">Students</Link>
        <Link className="nav-link" to="/Contact">Contact</Link>
      
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar;