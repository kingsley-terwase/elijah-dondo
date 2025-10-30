import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Box,
} from '@mui/material';
import {
    LightMode,
    DarkMode,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

const Header = ({ darkMode, setDarkMode, scrollToSection }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Change header appearance after scrolling 100px
            if (scrollPosition > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            elevation={scrolled ? 4 : 0}
            sx={{
                background: scrolled
                    ? darkMode
                        ? 'rgba(10, 14, 39, 0.95)'
                        : 'rgba(255, 255, 255, 0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                transition: 'all 0.3s ease-in-out',
                boxShadow: scrolled 
                    ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
                    : 'none',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar 
                    disableGutters 
                    sx={{ 
                        minHeight: { xs: 64, sm: 70 },
                        py: 1.5,
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflow: 'hidden',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: '-0.5px',
                                fontFamily: FONT_FAMILY.primary,
                                display: 'inline-block',
                                animation: 'slideInLeft 0.8s ease-out',
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
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                                    backgroundSize: '200% 200%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    animation: 'gradientShift 3s ease infinite',
                                    '@keyframes gradientShift': {
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
                                Elijah
                            </Box>
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #ff006e 0%, #00d4ff 100%)',
                                    backgroundSize: '200% 200%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    animation: 'gradientShift 3s ease infinite',
                                    animationDelay: '1.5s',
                                    '@keyframes gradientShift': {
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
                                Adue
                            </Box>
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        {['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact Me'].map(
                            (item, index) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                    sx={{
                                        fontFamily: FONT_FAMILY.secondary,
                                        fontWeight: 600,
                                        position: 'relative',
                                        color: scrolled 
                                            ? (darkMode ? '#fff' : '#1a1f4d')
                                            : '#fff',
                                        transition: 'all 0.3s ease',
                                        opacity: 0,
                                        animation: 'fadeInDown 0.6s ease-out forwards',
                                        animationDelay: `${0.1 * index}s`,
                                        '@keyframes fadeInDown': {
                                            '0%': {
                                                opacity: 0,
                                                transform: 'translateY(-20px)',
                                            },
                                            '100%': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                            },
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 0,
                                            height: '2px',
                                            background: 'linear-gradient(90deg, #00d4ff, #ff006e)',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                    }}
                                >
                                    {item}
                                </Button>
                            )
                        )}
                        <IconButton
                            onClick={() => setDarkMode(!darkMode)}
                            sx={{
                                ml: 1,
                                border: scrolled 
                                    ? `2px solid ${darkMode ? '#00d4ff' : '#1a1f4d'}`
                                    : '2px solid rgba(255, 255, 255, 0.5)',
                                color: scrolled 
                                    ? (darkMode ? '#00d4ff' : '#1a1f4d')
                                    : '#fff',
                                transition: 'all 0.4s ease',
                                opacity: 0,
                                animation: 'scaleIn 0.5s ease-out forwards',
                                animationDelay: '0.8s',
                                '@keyframes scaleIn': {
                                    '0%': {
                                        opacity: 0,
                                        transform: 'scale(0) rotate(-180deg)',
                                    },
                                    '100%': {
                                        opacity: 1,
                                        transform: 'scale(1) rotate(0deg)',
                                    },
                                },
                                '&:hover': {
                                    background: scrolled
                                        ? darkMode 
                                            ? 'rgba(0, 212, 255, 0.1)' 
                                            : 'rgba(26, 31, 77, 0.1)'
                                        : 'rgba(255, 255, 255, 0.1)',
                                    transform: 'rotate(180deg)',
                                },
                            }}
                        >
                            {darkMode ? <LightMode /> : <DarkMode />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;