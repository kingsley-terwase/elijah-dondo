import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Instagram,
  WhatsApp,
  Download,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

export const HeroSection = ({ darkMode, theme }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCV = () => {
    setDownloading(true);
    
    // Replace this URL with your actual CV file URL
    const cvUrl = '/path-to-your-cv/elijah-adue-cv.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Elijah_Adue_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after 2 seconds
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: darkMode
          ? 'linear-gradient(135deg, #0a0e27 0%, #1a1f4d 50%, #0a0e27 100%)'
          : 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 50%, #f0f4ff 100%)',
        pt: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,0,110,0.15) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                animation: 'fadeInUp 1s ease-out',
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 2,
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: FONT_FAMILY.secondary,
                  opacity: 0,
                  animation: 'slideInLeft 0.8s ease-out 0.2s forwards',
                  '@keyframes slideInLeft': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(-50px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                Hello I'm
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  fontFamily: FONT_FAMILY.secondary,
                  opacity: 0,
                  animation: 'fadeInScale 1s ease-out 0.4s forwards',
                  '@keyframes fadeInScale': {
                    '0%': {
                      opacity: 0,
                      transform: 'scale(0.8)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'scale(1)',
                    },
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: FONT_FAMILY.secondary,
                    animation: 'gradientFlow 4s ease infinite',
                    display: 'inline-block',
                    '@keyframes gradientFlow': {
                      '0%': {
                        backgroundPosition: '0% 50%',
                      },
                      '50%': {
                        backgroundPosition: '100% 50%',
                      },
                      '100%': {
                        backgroundPosition: '0% 50%',
                      },
                    },
                  }}
                >
                  Elijah Dondo Adue
                </Box>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: darkMode ? '#fff' : '#1a1f4d',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontFamily: FONT_FAMILY.secondary,
                  opacity: 0,
                  animation: 'slideInRight 0.8s ease-out 0.6s forwards',
                  '@keyframes slideInRight': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(50px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                I'm A{' '}
                <Box
                  component="span"
                  sx={{
                    fontFamily: FONT_FAMILY.secondary,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, #ff006e, ${theme.palette.primary.main})`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shimmer 3s linear infinite',
                    '@keyframes shimmer': {
                      '0%': {
                        backgroundPosition: '0% center',
                      },
                      '100%': {
                        backgroundPosition: '200% center',
                      },
                    },
                  }}
                >
                  Software Engineer
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                  fontFamily: FONT_FAMILY.secondary,
                  opacity: 0,
                  animation: 'fadeIn 1s ease-out 0.8s forwards',
                  '@keyframes fadeIn': {
                    '0%': {
                      opacity: 0,
                    },
                    '100%': {
                      opacity: 1,
                    },
                  },
                }}
              >
                I specialize in building web and mobile applications, with a passion
                for projects that solve real-world problems.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 4,
                  flexWrap: 'wrap',
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out 1s forwards',
                }}
              >
                {[
                  { icon: <LinkedIn />, color: '#0077b5', link: 'https://linkedin.com/in/yourprofile' },
                  { icon: <GitHub />, color: darkMode ? '#fff' : '#333', link: 'https://github.com/yourprofile' },
                  { icon: <Instagram />, color: '#e1306c', link: 'https://instagram.com/yourprofile' },
                  { icon: <WhatsApp />, color: '#25d366', link: 'https://wa.me/yourphonenumber' },
                ].map((social, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.primary.main,
                      border: `2px solid ${theme.palette.primary.main}`,
                      transition: 'all 0.3s ease',
                      opacity: 0,
                      animation: `popIn 0.5s ease-out ${1.2 + i * 0.1}s forwards`,
                      '@keyframes popIn': {
                        '0%': {
                          opacity: 0,
                          transform: 'scale(0) rotate(-180deg)',
                        },
                        '80%': {
                          transform: 'scale(1.1) rotate(10deg)',
                        },
                        '100%': {
                          opacity: 1,
                          transform: 'scale(1) rotate(0deg)',
                        },
                      },
                      '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        color: '#fff',
                        transform: 'translateY(-5px) rotate(360deg)',
                        boxShadow: `0 10px 25px ${theme.palette.primary.main}40`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                onClick={handleDownloadCV}
                disabled={downloading}
                sx={{
                  background: downloading
                    ? 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
                    : 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  opacity: 0,
                  animation: 'bounceIn 1s ease-out 1.6s forwards',
                  '@keyframes bounceIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'scale(0.3)',
                    },
                    '50%': {
                      opacity: 1,
                      transform: 'scale(1.05)',
                    },
                    '70%': {
                      transform: 'scale(0.9)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'scale(1)',
                    },
                  },
                  '&:hover': {
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: '0 15px 40px rgba(0, 212, 255, 0.4)',
                  },
                  '&:disabled': {
                    color: '#fff',
                    opacity: 0.7,
                  },
                }}
              >
                {downloading ? 'Downloading...' : 'Download CV'}
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '400px', md: '600px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'fadeIn 1.5s ease-out',
                '@keyframes fadeIn': {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: '350px', md: '500px' },
                  height: { xs: '350px', md: '500px' },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                  opacity: 0.15,
                  position: 'absolute',
                  animation: 'pulse 3s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
                    '50%': { transform: 'scale(1.1)', opacity: 0.25 },
                  },
                }}
              />
              <Paper
                elevation={20}
                sx={{
                  width: { xs: '300px', md: '450px' },
                  height: { xs: '300px', md: '450px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `6px solid ${theme.palette.primary.main}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: '120px', md: '180px' },
                  background: darkMode
                    ? 'linear-gradient(135deg, #1a1f4d 0%, #0a0e27 100%)'
                    : 'linear-gradient(135deg, #fff 0%, #f0f4ff 100%)',
                  boxShadow: `0 30px 60px ${theme.palette.primary.main}40`,
                  transition: 'all 0.5s ease',
                  animation: 'rotateIn 1.2s ease-out',
                  '@keyframes rotateIn': {
                    '0%': {
                      opacity: 0,
                      transform: 'rotate(-180deg) scale(0)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'rotate(0deg) scale(1)',
                    },
                  },
                  '&:hover': {
                    transform: 'rotate(5deg) scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    animation: 'bounce 2s ease-in-out infinite',
                    '@keyframes bounce': {
                      '0%, 100%': {
                        transform: 'translateY(0)',
                      },
                      '50%': {
                        transform: 'translateY(-20px)',
                      },
                    },
                  }}
                >
                  💻
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};