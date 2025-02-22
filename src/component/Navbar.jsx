import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: 'black', padding: '10px 20px' }}>
      <h1 style={{ color: 'white', margin: 0 }}>Life Alert</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </li>
        <li>
          <Link to="/get-started" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;