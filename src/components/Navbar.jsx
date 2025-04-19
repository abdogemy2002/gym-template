import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <header className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">GymPro</Link>
      </div>

      {/* Menu Links (Desktop) */}
      <nav className="navbar-links">
        <ul className="menu-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/membership-plans">Plans</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Auth Links */}
      <div className="auth-links">
        {user ? (
          <>
            <span className="navbar-username">Welcome, {user}!</span>
            <Link to="/profile" className="btn">Profile</Link>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="btn">Sign Up</Link>
            <Link to="/login" className="btn">Login</Link>
          </>
        )}
      </div>

      {/* Icon Links */}
      {/* <div className="icon-links">
        <a className="icon" href="#">
          <i className="fas fa-shopping-cart"></i>
          <span className="badge">2</span>
        </a>
        <a className="icon" href="#">
          <i className="fas fa-bell"></i>
          <span className="badge">1</span>
        </a>
        {user && (
          <a className="avatar" href="/profile">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="avatar" />
          </a>
        )}
      </div> */}

      {/* Mobile Toggle */}
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>

      {/* Full-Screen Overlay Menu (Mobile) */}
      <div className={`overlay ${isOpen ? 'overlay-show' : ''}`}>
        <ul className="overlay-menu">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/membership-plans" onClick={toggleMenu}>Plans</Link></li>
          <li><Link to="/classes" onClick={toggleMenu}>Classes</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          {user ? (
            <>
              <Link to="/profile" className="btn" onClick={toggleMenu}>Profile</Link>
              <button onClick={handleLogout} className="btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="btn" onClick={toggleMenu}>Sign Up</Link>
              <Link to="/login" className="btn" onClick={toggleMenu}>Login</Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
