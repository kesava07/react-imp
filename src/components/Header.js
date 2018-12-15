import React from 'react';
import {NavLink} from 'react-router-dom'
const Header =()=>(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
             <NavLink to="/" className="navbar-brand"><i className="fa fa-leaf text-success fa-1x"></i></NavLink>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink to="/" className="nav-link" activeClassName="text-primary" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/about" className="nav-link" activeClassName="text-primary">About</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Applications
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <NavLink to="/to-do" className="dropdown-item" activeClassName="text-primary">To do Saver</NavLink>
          <a className="dropdown-item" href="#">Another action</a>
        </div>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="button">Signup</button>
    </div>
  </div>
</nav>
    </div>
)
export default Header;