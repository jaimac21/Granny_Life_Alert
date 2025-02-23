import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SetupProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  //const [address, setAddress] = useState('');
  //const [contactNumber, setContactNumber] = useState('');
  //const [city, setCity] = useState('');
  //const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Password strength checks
  const hasMinLength = password.length >= 6;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasCapitalLetter = /[A-Z]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const handleSave = (e) => {
    e.preventDefault();
    if (!hasMinLength || !hasSpecialChar || !hasNumber || !hasCapitalLetter || !passwordsMatch) {
      alert('Please ensure your password meets all requirements and matches the confirmation.');
      return;
    }
    // Handle saving profile information
    console.log('Profile Information:', {
      firstName,
      lastName,
      email,
      //address,
      //contactNumber,
      //city,
      //state,
      password,
    });
    alert('Profile saved successfully!');
    navigate('/login'); // Navigate to the home page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Set Up Your Profile</h1>
      <form onSubmit={handleSave} style={styles.form}>
        {/* First Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="firstName" style={styles.label}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="lastName" style={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
            placeholder="Enter your last name"
          />
        </div>

        {/* Password */}
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
          {/* Password Strength Checklist */}
          <div style={styles.checklist}>
            <div style={{ color: hasMinLength ? 'green' : 'red' }}>
              {hasMinLength ? '✓' : '✗'} Password has more than 5 characters.
            </div>
            <div style={{ color: hasSpecialChar ? 'green' : 'red' }}>
              {hasSpecialChar ? '✓' : '✗'} Password has special characters.
            </div>
            <div style={{ color: hasNumber ? 'green' : 'red' }}>
              {hasNumber ? '✓' : '✗'} Password has a number.
            </div>
            <div style={{ color: hasCapitalLetter ? 'green' : 'red' }}>
              {hasCapitalLetter ? '✓' : '✗'} Password has a capital letter.
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            placeholder="Confirm your password"
          />
          {/* Password Match Check */}
          <div style={{ color: passwordsMatch ? 'green' : 'red' }}>
            {passwordsMatch ? '✓' : '✗'} Passwords match.
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button type="button" style={styles.cancelButton}>
            Cancel
          </button>
          <button type="submit" style={styles.saveButton}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default SetupProfile;

// Styles
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',  // Increase width to fit all input fields
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#81d4fa', // Light blue background
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers content horizontally
    minHeight: '100vh', // Ensures the form takes the full height of the viewport
    borderRadius: '10px', // Slight rounding for a better look
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Soft shadow for better contrast
    width: '100%',  // Ensure it spans full width within its maxWidth
  },

  title: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'black', // Black text
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // Space between form groups
  },
  inputGroup: {
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
    backgroundColor: '#f9f9f9', // Light input background
    color: 'black', // Black text
  },
  checklist: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
  cancelButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#ccc', // Gray button
    color: '#fff', // White text
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  saveButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff', // Blue button
    color: '#fff', // White text
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};