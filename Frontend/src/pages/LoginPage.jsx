import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginPage() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', emailOrUsername, password);
    //alert('Login successful!');
    navigate('/profile'); // Redirect to profile page
  };

  return (
    <div style={styles.container}>
      {/* Bunny Image above the Login Box */}
      <div style={styles.imageContainer}>
        <img
          src="/images/bunny4.png" // Transparent bunny image
          alt="Bunny"
          style={styles.image}
        />
      </div>

      {/* Login Box with Transparent Background */}
      <div style={styles.card}>
        <h2 style={styles.title}>LOGIN</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="emailOrUsername" style={styles.label}>
              Email or username
            </label>
            <input
              type="text"
              id="emailOrUsername"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your email or username"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe" style={styles.rememberMeLabel}>
              Remember me
            </label>
          </div>
          <button type="submit" style={styles.loginButton}>
            LOGIN
          </button>
        </form>
        <div style={styles.registerLink}>
          Not a member? <a href="/get-started" style={styles.link}>Register</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5', // Light background color
    paddingTop: '20px', // Reduced padding to bring bunny closer to navbar
  },
  imageContainer: {
    marginBottom: '0', // No margin between bunny and login box
  },
  image: {
    width: '250px', // Larger bunny image
    height: 'auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    backdropFilter: 'blur(5px)', // Optional: Adds a blur effect to the background
    marginTop: '0', // No margin between bunny and login box
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1rem',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent input background
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  rememberMeLabel: {
    marginLeft: '0.5rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  registerLink: {
    fontSize: '0.9rem',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};