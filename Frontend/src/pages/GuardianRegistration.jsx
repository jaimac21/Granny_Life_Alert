import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const GuardianRegistration = () => {
    const navigate = useNavigate();
    const [patientEmail, setPatientEmail] = useState("");

    const handleSubmit = () => {
        if (patientEmail.trim()) {
            console.log("Guardian registering for:", patientEmail);
            navigate("/setup-profile"); // Navigate to setup after guardian input
        } else {
            alert("Please enter the patient's email.");
        }
    };

    return (
        <Box 
            sx={{
                minHeight: '100vh', // Ensure the background covers the entire viewport
                backgroundColor: '#81d4fa', // Light blue background
                display: 'flex',
                alignItems: 'center', // Center content vertically
                justifyContent: 'center', // Center content horizontally
            }}
        >
            <Container 
                maxWidth="sm" 
                sx={{
                    textAlign: 'center',
                    fontFamily: 'serif', // Use default serif font like GetStartedPage
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
                }}
            >
                {/* Image Section */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src="/images/bunny5.png" alt="Guardian Icon" style={{ width: '150px', height: 'auto' }} />
                </Box>

                {/* Title - Use Serif Font (Same as GetStartedPage) */}
                <Typography 
                    variant="h4" 
                    sx={{ 
                        fontFamily: 'serif', // Match GetStartedPage
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                    }}
                >
                    Enter the Patient's Email
                </Typography>

                {/* Input Field */}
                <Box sx={{ marginBottom: '2rem' }}>
                    <TextField 
                        label="Patient's Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={patientEmail} 
                        onChange={(e) => setPatientEmail(e.target.value)} 
                        sx={{ backgroundColor: '#f9f9f9', borderRadius: '4px', fontSize: '1rem' }}
                    />
                </Box>

                {/* Submit Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button 
                        variant="contained" 
                        onClick={handleSubmit} 
                        sx={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            "&:hover": {
                                backgroundColor: '#0056b3',
                            },
                        }}
                    >
                        Continue
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default GuardianRegistration;