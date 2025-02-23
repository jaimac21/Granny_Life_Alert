import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserShield, FaPhoneAlt } from 'react-icons/fa'; // Import icons

function HomePage() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div style={styles.heroSection}>
        <div style={styles.overlay}></div>

        {/* Content */}
        <div style={styles.heroContent}>
          <h1>Welcome to Life Alert</h1>
          <p>Your safety, our priority.</p>
          <div>
            <Link to="/login">
              <button style={styles.button}>Log In</button>
            </Link>
            <Link to="/register">
              <button style={styles.button}>Register</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar with icons */}
      <div style={styles.bottomBar}>
        <div style={styles.feature}>
          <FaHeartbeat style={styles.icon} />
          <h3>Sudden Fall Detection</h3>
          <p>Our AI monitors sudden falls and alerts guardians immediately.</p>
        </div>

        <div style={styles.feature}>
          <FaUserShield style={styles.icon} />
          <h3>Messaging Guardians</h3>
          <p>Stay connected with your guardians with custom messages.</p>
        </div>

        <div style={styles.feature}>
          <FaPhoneAlt style={styles.icon} />
          <h3>Emergency Assistance</h3>
          <p>Instantly contact with real-time updates and alerts.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

const styles = {
  heroSection: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw', // Full width
    minHeight: '70vh', // Full viewport height
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparency
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    margin: '10px',
    padding: '12px 24px',
    backgroundColor: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  bottomBar: {
    backgroundColor: '#003366',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 20px',
    width: '80vw',   
    minWidth: '100%', 
  },

  feature: {
    textAlign: 'center',
    maxWidth: '250px',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '10px',
    color: 'white',
  },
};
