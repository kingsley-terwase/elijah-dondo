
import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Instagram,
  WhatsApp,
  Send,
  Email,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';


const Footer = ({ darkMode, theme, scrollToSection }) => {
  return (
    <Box
      sx={{
        py: 6,
        background: darkMode
          ? 'linear-gradient(135deg, #151937 0%, #0a0e27 100%)'
          : 'linear-gradient(135deg, #1a1f4d 0%, #0a0e27 100%)',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Elijah<span style={{ color: '#00d4ff' }}>Adue</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: FONT_FAMILY.secondary, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, mb: 3 }}
            >
              Building the future, one line of code at a time.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[<LinkedIn />, <GitHub />, <Instagram />, <WhatsApp />].map(
                (icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: '#fff',
                      border: '2px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: "#fff",
                        color: "#fff",
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact Me'].map(
                (item) => (
                  <Button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    sx={{
                      fontFamily: FONT_FAMILY.secondary,
                      color: 'rgba(255,255,255,0.7)',
                      justifyContent: 'flex-start',
                      textTransform: 'capitalize',
                      '&:hover': {
                        color: "#fff",
                        paddingLeft: 2,
                      },
                    }}
                  >
                    {item}
                  </Button>
                )
              )}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 3 }}>
              Newsletter
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: FONT_FAMILY.secondary, color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.8 }}
            >
              Subscribe to get the latest updates and news about my work.
            </Typography>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter your email address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: 0.5 }}>
                      <Button
                        variant="contained"
                        sx={{
                          minWidth: '120px',
                          background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontSize: '15px',
                          fontWeight: 600,
                          padding: '10px 20px',
                          boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #0099ff 0%, #00d4ff 100%)',
                            boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                          '&:active': {
                            transform: 'translateY(0)',
                          },
                          '&:disabled': {
                            background: 'rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.4)',
                            boxShadow: 'none',
                          },
                        }}
                      >
                        <Send sx={{ mr: 1, fontSize: 18 }} />
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                  sx: {
                    color: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    paddingRight: '1px', 
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.2)',
                      borderWidth: '1.5px',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00d4ff',
                      borderWidth: '2px',
                    },
                    '&.Mui-error fieldset': {
                      borderColor: '#ff006e',
                    },
                  },
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '16px 16px',
                    fontSize: '15px',
                    fontWeight: 500,
                    '&::placeholder': {
                      color: 'rgba(255,255,255,0.5)',
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            mt: 6,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.secondary, color: 'rgba(255,255,255,0.6)' }}>
            © 2025 Elijah Adue. All rights reserved. Designed & Built with ❤️
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};

export default Footer;