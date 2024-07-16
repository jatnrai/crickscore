import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import '../Common.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logoLink = {
        textDecoration: 'none',
        color: '#fff'
    }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="navbar">
    <Container>
      <div className="navbar-container">
        <Link to='/' className="navbar-logo " style={logoLink}>CricScore</Link>
        <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/livematches">LiveMatches</Link></li>
            <li><Link to="/Series">Series</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </Container>
    </header>
  );
};

export default Navbar;