import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const UserTypeSelection = () => {
    const navigate = useNavigate();

    const handleSelection = (type) => {
        if (type === "patient") {
            navigate("/get-started"); // Redirect to patient registration
        } else if (type === "guardian") {
            navigate("/guardian-registration"); // Redirect to guardian form
        }
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Are you a Guardian or a Patient?
            </Typography>

            <Button variant="contained" color="primary" onClick={() => handleSelection("patient")} style={{ margin: '10px' }}>
                I am a Patient
            </Button>

            <Button variant="contained" color="secondary" onClick={() => handleSelection("guardian")} style={{ margin: '10px' }}>
                I am a Guardian
            </Button>
        </Container>
    );
};

export default UserTypeSelection;
