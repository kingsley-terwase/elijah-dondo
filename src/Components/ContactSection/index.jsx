
import React, { useState } from 'react';
import {
    Typography,
    Button,
    Container,
    Box,
    Grid,
    Paper,
    TextField,
} from '@mui/material';
import {
    Email,
    Send,
    Phone,
    LocationOn,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

export const ContactSection = ({ darkMode, theme }) => {
    return (
        <Box
            id="contact-me"
            sx={{
                py: 12,
                background: darkMode ? '#0a0e27' : '#ffffff',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 2,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: FONT_FAMILY.secondary,
                    }}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 8, 
                        fontFamily: FONT_FAMILY.secondary,
                        textAlign: 'center', color: 'text.secondary'
                    }}
                >
                    Let's work together on your next project
                </Typography>
                <Paper
                    elevation={10}
                    sx={{
                        p: 6,
                        borderRadius: 4,
                        background: darkMode
                            ? 'linear-gradient(135deg, #151937 0%, #1a1f4d 100%)'
                            : 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                        border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {                                        
                                            borderRadius:5,
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                type="email"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                         borderRadius:5,
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, }}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                         borderRadius:5,
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, }}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={6}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                         borderRadius:5,
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, }}>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                endIcon={<Send />}
                                sx={{
                                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 15px 40px rgba(0, 212, 255, 0.4)',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Box sx={{ mt: 8 }}>
                    <Grid container spacing={4}>
                        {[
                            { icon: <Email />, text: 'adueelijah@gmail.com' },
                            { icon: <Phone />, text: '+234 8062235364' },
                            { icon: <LocationOn />, text: 'Abuja, Nigeria' },
                        ].map((contact, i) => (
                            <Grid size={{ xs: 12, md: 4 }} key={i}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        textAlign: 'center',
                                        background: darkMode ? '#1a1f4d' : '#ffffff',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: `0 15px 35px ${theme.palette.primary.main}20`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: theme.palette.primary.main,
                                            mb: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            fontFamily:FONT_FAMILY.secondary,
                                        }}
                                    >
                                        {contact.icon}
                                    </Box>
                                    <Typography variant="body1" sx={{fontFamily:FONT_FAMILY.secondary, fontWeight: 600 }}>
                                        {contact.text}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};