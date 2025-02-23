import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Left Section - Logo & Title */}
      <div style={styles.leftSection}>
        <img src="/images/love-icon.png" alt="Life Alert Logo" style={styles.logo} />
        <h1 style={styles.title}>Life Alert</h1>
      </div>

      {/* Right Section - Navigation Links */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white', // Navbar background color
    padding: '1px 20px',
    borderBottom: '1px solid #ccc',
    
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '80px', // Adjust logo size
    height: '80px',
    marginRight: '10px',
  },
  title: {
    fontSize: '35px', // Increase this value to make "Life Alert" bigger
    color: '#187bcd', // Navy color
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#003366', // Navy color for links
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};
