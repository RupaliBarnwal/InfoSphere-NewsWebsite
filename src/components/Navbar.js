import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-success navbar-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">InfoSphere</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" target='blank'>Home</Link>
        </li>
          <li><Link className="nav-link nav-item" to="/business" target='blank'>Business</Link></li>
          <li><Link className="nav-link nav-item" to="/entertainment" target='blank' >Entertainment</Link></li>
          <li><Link className="nav-link nav-item" to="/general" target='blank'>General</Link></li>
          <li><Link className="nav-link nav-item" to="/health" target='blank'>Health</Link></li>
          <li><Link className="nav-link nav-item" to="/science" target='blank'>Science</Link></li>
          <li><Link className="nav-link nav-item" to="/sports" target='blank'>Sports</Link></li>
          <li><Link className="nav-link nav-item" to="/technology" target='blank'>Technology</Link></li>
        
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
