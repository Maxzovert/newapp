import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
 
    return (
      <div style={{
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,}}>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News-Nation</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <Link className="nav-link" to="/business">Business</Link>
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
        <Link className="nav-link" to="/">General</Link>
        <Link className="nav-link" to="/health">Health</Link>
        <Link className="nav-link" to="/science">Science</Link>
        <Link className="nav-link" to="/sports">Sports</Link>
        <Link className="nav-link" to="/technology">Technology</Link>

      </ul>
    </div>
  </div>
 </nav>
      </div>
    )
}

export default Navbar
