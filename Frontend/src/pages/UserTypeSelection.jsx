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
                    backgroundColor: '#808080', // Gray Background
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
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
                        backgroundColor: '#333',
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
