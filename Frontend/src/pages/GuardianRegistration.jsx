import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

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
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Enter the Patient's Email
            </Typography>

            <TextField 
                label="Patient's Email" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                value={patientEmail} 
                onChange={(e) => setPatientEmail(e.target.value)} 
            />

            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Continue
            </Button>
        </Container>
    );
};

export default GuardianRegistration;
