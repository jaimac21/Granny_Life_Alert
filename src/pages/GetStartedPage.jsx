import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaEnvelope, FaPhone, FaComment } from 'react-icons/fa'; // Icons for each step

function GetStartedPage() {
  const [step, setStep] = useState(1); // Stepper state
  const [email, setEmail] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to get the image based on the current step
  const getBunnyImage = () => {
    switch (step) {
      case 1:
        return '/images/bunny1.png'; // Image for step 1
      case 2:
        return '/images/bunny2.png'; // Image for step 2
      case 3:
        return '/images/bunny3.png'; // Image for step 3
      default:
        return '/images/bunny1.png'; // Default image
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Email:', email);
    console.log('Emergency Contact:', emergencyContact);
    console.log('Custom Message:', customMessage);
    //alert('Account created successfully!');
    navigate('/setup-profile'); // Navigate to SetupProfile page
  };

  return (
    <div style={styles.container}>
      {/* Image below Navbar and above "Create your account" */}
      <div style={styles.imageContainer}>
        <img
          src={getBunnyImage()} // Dynamically change the image based on the step
          alt="Bunny"
          style={styles.image}
        />
      </div>

      {/* Title */}
      <h1 style={styles.title}>CREATE YOUR ACCOUNT</h1>

      {/* Stepper */}
      <div style={styles.stepper}>
        <div style={styles.stepContainer}>
          <div
            style={{
              ...styles.step,
              ...(step === 1 ? styles.activeStep : {}),
            }}
          >
            <FaEnvelope style={styles.icon} /> {/* Email icon */}
            <span>Email</span>
          </div>
          <div
            style={{
              ...styles.step,
              ...(step === 2 ? styles.activeStep : {}),
            }}
          >
            <FaPhone style={styles.icon} /> {/* Emergency Contact icon */}
            <span>Emergency Contact</span>
          </div>
          <div
            style={{
              ...styles.step,
              ...(step === 3 ? styles.activeStep : {}),
            }}
          >
            <FaComment style={styles.icon} /> {/* Custom Message icon */}
            <span>Custom Message</span>
          </div>
        </div>
      </div>

      {/* Step 1: Email */}
      {step === 1 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}>
            <FaEnvelope style={styles.stepIcon} /> Email
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
      )}

      {/* Step 2: Emergency Contact */}
      {step === 2 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}>
            <FaPhone style={styles.stepIcon} /> Emergency Contact
          </h2>
          <input
            type="text"
            placeholder="Enter emergency contact"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            style={styles.input}
          />
        </div>
      )}

      {/* Step 3: Custom Message */}
      {step === 3 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}>
            <FaComment style={styles.stepIcon} /> Custom Message
          </h2>
          <textarea
            placeholder="Enter your custom message"
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            style={{ ...styles.input, height: '100px' }}
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={styles.buttonContainer}>
        {step > 1 && (
          <button onClick={handlePrevious} style={styles.button}>
            Previous
          </button>
        )}
        {step < 3 ? (
          <button onClick={handleNext} style={styles.button}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} style={styles.button}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
}

export default GetStartedPage;

// Styles
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
    minHeight: '100vh', // Ensure the container takes the full height of the viewport
    backgroundColor: 'white', // White background
    color: 'black', // Black text for contrast
  },
  imageContainer: {
    marginBottom: '1rem', // Space between image and title
  },
  image: {
    width: '150px', // Adjust the size of the image
    height: 'auto',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: 'black', // Black text
  },
  stepper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  stepContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#666', // Gray for inactive steps
  },
  activeStep: {
    color: 'black', // Black for active steps
  },
  icon: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: 'black', // Black icons
  },
  form: {
    marginBottom: '2rem',
  },
  stepTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: 'black', // Black text
  },
  stepIcon: {
    fontSize: '1.2rem',
    color: 'black', // Black icons
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
    marginBottom: '2rem', // Add space above the image
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff', // Blue button
    color: '#fff', // White text
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};