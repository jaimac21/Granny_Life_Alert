import React, { useState } from 'react';

function ProfilePage() {
  // Mock user data (replace with data from your backend or state management)
  const [user, setUser] = useState({
    firstName: 'Karen',
    lastName: 'Cho',
    email: 'karen.cho@gmail.com',
    address: '100 Circle Road',
    contactNumber: '934-246-7074',
    city: 'Stony Brook',
    state: 'NY',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Profile</h1>
      <form style={styles.form}>
        {/* First Name */}
        <div style={styles.inputGroup}>
          <label htmlFor="firstName" style={styles.label}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
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
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* Email */}
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* Address */}
        <div style={styles.inputGroup}>
          <label htmlFor="address" style={styles.label}>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* Contact Number */}
        <div style={styles.inputGroup}>
          <label htmlFor="contactNumber" style={styles.label}>
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={user.contactNumber}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* City */}
        <div style={styles.inputGroup}>
          <label htmlFor="city" style={styles.label}>
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={user.city}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* State */}
        <div style={styles.inputGroup}>
          <label htmlFor="state" style={styles.label}>
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={user.state}
            onChange={handleChange}
            style={styles.input}
            disabled={!isEditing}
          />
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          {isEditing ? (
            <>
              <button type="button" onClick={() => setIsEditing(false)} style={styles.cancelButton}>
                Cancel
              </button>
              <button type="button" onClick={handleSave} style={styles.saveButton}>
                Save
              </button>
            </>
          ) : (
            <button type="button" onClick={() => setIsEditing(true)} style={styles.editButton}>
              Change Info
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;

// Styles
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: 'white', // White background
    color: 'black', // Black text for contrast
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
  editButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745', // Green button
    color: '#fff', // White text
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};