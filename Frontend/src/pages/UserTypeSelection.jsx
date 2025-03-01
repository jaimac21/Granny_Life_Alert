import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Security'; // Guardian icon
import MedicalIcon from '@mui/icons-material/LocalHospital'; // Patient icon

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
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Top Section - Guardian (Darker Gray) */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#0077b6', // Blue Background
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden', // Ensure shapes don't overflow
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '200px', // Larger circle
                        height: '200px', // Larger circle
                        backgroundColor: 'rgba(173, 216, 230, 0.3)', // Light blue
                        borderRadius: '50%',
                        transform: 'translate(-30%, -30%)', // Stick out more
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '250px', // Larger circle
                        height: '250px', // Larger circle
                        backgroundColor: 'rgba(173, 216, 230, 0.3)', // Light blue
                        borderRadius: '50%',
                        transform: 'translate(40%, 40%)', // Stick out more
                    },
                }}
            >
                <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 2 }}>
                    Are you a Guardian?
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => handleSelection("guardian")}
                    sx={{
                        marginTop: 1,
                        padding: '15px 50px',
                        fontSize: '20px',
                        backgroundColor: 'white',
                        color: '#333',
                        borderRadius: '25px',
                        border: '2px solid #333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px', // Space between icon and text
                        "&:hover": {
                            backgroundColor: '#333',
                            color: 'white',
                        },
                        transform: 'translateX(20px)', // Moves button slightly right
                    }}
                >
                    <ShieldIcon sx={{ fontSize: '28px' }} /> I AM A GUARDIAN
                </Button>
            </Box>

            {/* Bottom Section - Patient */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: 'white', // White Background
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden', // Ensure shapes don't overflow
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '220px', // Larger circle
                        height: '220px', // Larger circle
                        backgroundColor: 'rgba(0, 119, 182, 0.3)', // Blue
                        borderRadius: '50%',
                        transform: 'translate(40%, -40%)', // Stick out more
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '180px', // Larger circle
                        height: '180px', // Larger circle
                        backgroundColor: 'rgba(0, 119, 182, 0.3)', // Blue
                        borderRadius: '50%',
                        transform: 'translate(-40%, 40%)', // Stick out more
                    },
                }}
            >
                <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: 2 }}>
                    Are you a Patient?
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => handleSelection("patient")}
                    sx={{
                        marginTop: 1,
                        padding: '15px 50px',
                        fontSize: '20px',
                        backgroundColor: '#0077b6',
                        color: 'white',
                        borderRadius: '25px',
                        border: '2px solid #333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px', // Space between icon and text
                        "&:hover": {
                            backgroundColor: 'white',
                            color: '#333',
                        },
                        transform: 'translateX(20px)', // Moves button slightly right
                    }}
                >
                    <MedicalIcon sx={{ fontSize: '28px' }} /> I AM A PATIENT
                </Button>
            </Box>
        </Box>
    );
};

export default UserTypeSelection;