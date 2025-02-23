import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/background.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparency
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
        <h1>Welcome to Life Alert</h1>
        <p>This is the homepage of the Life Alert app.</p>
        <div>
          <Link to="/login">
            <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log In</button>
          </Link>
          <Link to="/get-started">
            <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
          </Link>
          <Link to="/register">
            <button style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#333',  color: 'white',  border: 'none',  borderRadius: '5px', cursor: 'pointer'}}>User Selection</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;