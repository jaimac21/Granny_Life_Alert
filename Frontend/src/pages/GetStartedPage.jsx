import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import axios from 'axios';

function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [emailContacts, setEmailContacts] = useState(['']);
  const [smsContacts, setSmsContacts] = useState(['']);
  const [callContacts, setCallContacts] = useState(['']);
  const [customMessage, setCustomMessage] = useState('');
  const navigate = useNavigate();

  // Function to dynamically change bunny images
  const getBunnyImage = () => {
    switch (step) {
      case 1: return '/images/bunny1.png';
      case 2: return '/images/bunny2.png';
      case 3: return '/images/bunny3.png';
      default: return '/images/bunny1.png';
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  // Function to add new input fields
  const handleAddContact = (type) => {
    if (type === 'email') setEmailContacts([...emailContacts, '']);
    if (type === 'sms') setSmsContacts([...smsContacts, '']);
    if (type === 'call') setCallContacts([...callContacts, '']);
  };

  // Function to update input fields
  const handleContactChange = (index, type, value) => {
    if (type === 'email') {
      const updated = [...emailContacts];
      updated[index] = value;
      setEmailContacts(updated);
    }
    if (type === 'sms') {
      const updated = [...smsContacts];
      updated[index] = value;
      setSmsContacts(updated);
    }
    if (type === 'call') {
      const updated = [...callContacts];
      updated[index] = value;
      setCallContacts(updated);
    }
  };

  const handleSubmit = async () => {
    console.log("Sending data to backend...");

    try {
      const response = await axios.post('http://localhost:8000/submit-email', {
        email,
        emailContacts,
        smsContacts,
        callContacts
      });

      console.log("Response from server:", response.data);
      alert('Data submitted successfully!');
      navigate('/setup-profile');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={getBunnyImage()} alt="Bunny" style={styles.image} />
      </div>

      <h1 style={styles.title}>CREATE YOUR ACCOUNT</h1>

      <div style={styles.stepper}>
        <div style={styles.stepContainer}>
          <div style={{ ...styles.step, ...(step === 1 ? styles.activeStep : {}) }}>
            <FaEnvelope style={styles.icon} /> <span>Email</span>
          </div>
          <div style={{ ...styles.step, ...(step === 2 ? styles.activeStep : {}) }}>
            <FaPhone style={styles.icon} /> <span>Emergency Contact</span>
          </div>
          <div style={{ ...styles.step, ...(step === 3 ? styles.activeStep : {}) }}>
            <FaComment style={styles.icon} /> <span>Custom Message</span>
          </div>
        </div>
      </div>

      {/* Step 1: Email */}
      {step === 1 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}><FaEnvelope style={styles.stepIcon} /> Email</h2>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </div>
      )}

      {/* Step 2: Emergency Contact */}
      {step === 2 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}><FaPhone style={styles.stepIcon} /> Emergency Contact</h2>

          {/* Email Contacts */}
          <h3>Email Contacts</h3>
          {emailContacts.map((contact, index) => (
            <input key={index} type="email" placeholder={`Emergency email ${index + 1}`} value={contact} onChange={(e) => handleContactChange(index, 'email', e.target.value)} style={styles.input} />
          ))}
          <button onClick={() => handleAddContact('email')} style={styles.addButton}>+ Add Email</button>

          {/* SMS Contacts */}
          <h3>SMS Contacts</h3>
          {smsContacts.map((contact, index) => (
            <input key={index} type="text" placeholder={`Emergency SMS ${index + 1}`} value={contact} onChange={(e) => handleContactChange(index, 'sms', e.target.value)} style={styles.input} />
          ))}
          <button onClick={() => handleAddContact('sms')} style={styles.addButton}>+ Add SMS</button>

          {/* Call Contacts */}
          <h3>Call Contacts</h3>
          {callContacts.map((contact, index) => (
            <input key={index} type="text" placeholder={`Emergency call ${index + 1}`} value={contact} onChange={(e) => handleContactChange(index, 'call', e.target.value)} style={styles.input} />
          ))}
          <button onClick={() => handleAddContact('call')} style={styles.addButton}>+ Add Call</button>
        </div>
      )}

      {/* Step 3: Custom Message */}
      {step === 3 && (
        <div style={styles.form}>
          <h2 style={styles.stepTitle}><FaComment style={styles.stepIcon} /> Custom Message</h2>
          <textarea placeholder="Enter your custom message" value={customMessage} onChange={(e) => setCustomMessage(e.target.value)} style={{ ...styles.input, height: '100px' }} />
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={styles.buttonContainer}>
        {step > 1 && <button onClick={handlePrevious} style={styles.button}>Previous</button>}
        {step < 3 ? <button onClick={handleNext} style={styles.button}>Next</button> : <button onClick={handleSubmit} style={styles.button}>Finish</button>}
      </div>
    </div>
  );
}

export default GetStartedPage;

// Styles
const styles = {
  container: { padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center', minHeight: '100vh', backgroundColor: 'white', color: 'black' },
  imageContainer: { marginBottom: '1rem' },
  image: { width: '150px', height: 'auto' },
  title: { fontSize: '1.5rem', marginBottom: '2rem', color: 'black' },
  stepper: { display: 'flex', justifyContent: 'center', marginBottom: '2rem' },
  stepContainer: { display: 'flex', justifyContent: 'space-between', width: '100%' },
  step: { display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#666' },
  activeStep: { color: 'black' },
  icon: { fontSize: '1.5rem', marginBottom: '0.5rem', color: 'black' },
  form: { marginBottom: '2rem' },
  stepTitle: { display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', marginBottom: '1rem', color: 'black' },
  input: { width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem', backgroundColor: '#f9f9f9', color: 'black' },
  addButton: { marginTop: '10px', padding: '0.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  buttonContainer: { display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' },
  button: { padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', fontSize: '1rem', cursor: 'pointer' },
};
