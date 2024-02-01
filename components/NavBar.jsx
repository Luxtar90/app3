import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="iphone-link">Dojo Airlines</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="iphone-link">Inicio</Link></li>
        <li><Link to="/offers" className="iphone-link">Ofertas</Link></li>
        {/* Puedes agregar más enlaces según sea necesario */}
      </ul>
    </nav>
  );
}

export default NavBar;
