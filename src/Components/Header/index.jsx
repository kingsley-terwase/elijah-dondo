import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {
    LightMode,
    DarkMode,
    Menu as MenuIcon,
    Close as CloseIcon,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

const Header = ({ darkMode, setDarkMode, scrollToSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
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

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMobileNavClick = (item) => {
        scrollToSection(item.toLowerCase().replace(' ', '-'));
        setMobileMenuOpen(false);
    };

    const menuItems = ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact Me'];

    return (
        <>
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
                            py: { xs: 1, sm: 1.5 },
                        }}
                    >
                        {/* Logo */}
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
                                    fontSize: { xs: '1.3rem', sm: '1.5rem' },
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

                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                {menuItems.map((item, index) => (
                                    <Button
                                        key={item}
                                        color="inherit"
                                        onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                        sx={{
                                            fontFamily: FONT_FAMILY.secondary,
                                            fontWeight: 600,
                                            fontSize: { sm: '0.875rem', md: '0.95rem' },
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
                                ))}
                            </Box>
                        )}

                        {/* Theme Toggle & Mobile Menu Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: isMobile ? 0 : 1 }}>
                            <IconButton
                                onClick={() => setDarkMode(!darkMode)}
                                sx={{
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
                                    width: { xs: 40, sm: 44 },
                                    height: { xs: 40, sm: 44 },
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

                            {/* Mobile Menu Button */}
                            {isMobile && (
                                <IconButton
                                    onClick={handleMobileMenuToggle}
                                    sx={{
                                        color: scrolled 
                                            ? (darkMode ? '#00d4ff' : '#1a1f4d')
                                            : '#fff',
                                        border: scrolled 
                                            ? `2px solid ${darkMode ? '#00d4ff' : '#1a1f4d'}`
                                            : '2px solid rgba(255, 255, 255, 0.5)',
                                        width: 40,
                                        height: 40,
                                        opacity: 0,
                                        animation: 'scaleIn 0.5s ease-out forwards',
                                        animationDelay: '1s',
                                        '&:hover': {
                                            background: scrolled
                                                ? darkMode 
                                                    ? 'rgba(0, 212, 255, 0.1)' 
                                                    : 'rgba(26, 31, 77, 0.1)'
                                                : 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer Menu */}
            <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={handleMobileMenuToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: { xs: '75%', sm: '350px' },
                        background: darkMode
                            ? '#1a1f4d'
                            : '#1a1f4d',
                        backgroundImage: darkMode
                            ? 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.1) 0%, transparent 50%)'
                            : 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 110, 0.05) 0%, transparent 50%)',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Close Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2,
                        }}
                    >
                        <IconButton
                            onClick={handleMobileMenuToggle}
                            sx={{
                                color: darkMode ? '#00d4ff' : '#1a1f4d',
                                border: `2px solid ${darkMode ? '#00d4ff' : '#1a1f4d'}`,
                                '&:hover': {
                                    background: darkMode 
                                        ? 'rgba(0, 212, 255, 0.1)' 
                                        : 'rgba(26, 31, 77, 0.1)',
                                    transform: 'rotate(90deg)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Logo in Drawer */}
                    <Box sx={{ px: 3, mb: 4 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                fontFamily: FONT_FAMILY.primary,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Elijah
                            </Box>
                            <Box
                                component="span"
                                sx={{
                                    background: 'linear-gradient(135deg, #ff006e 0%, #00d4ff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Adue
                            </Box>
                        </Typography>
                    </Box>

                    {/* Menu Items */}
                    <List sx={{ flexGrow: 1 }}>
                        {menuItems.map((item, index) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton
                                    onClick={() => handleMobileNavClick(item)}
                                    sx={{
                                        py: 2,
                                        px: 3,
                                        borderLeft: '4px solid transparent',
                                        transition: 'all 0.3s ease',
                                        opacity: 0,
                                        animation: 'slideInRight 0.5s ease-out forwards',
                                        animationDelay: `${0.1 * index}s`,
                                        '@keyframes slideInRight': {
                                            '0%': {
                                                opacity: 0,
                                                transform: 'translateX(30px)',
                                            },
                                            '100%': {
                                                opacity: 1,
                                                transform: 'translateX(0)',
                                            },
                                        },
                                        '&:hover': {
                                            borderLeft: '4px solid',
                                            borderImage: 'linear-gradient(to bottom, #00d4ff, #ff006e) 1',
                                            background: darkMode 
                                                ? 'rgba(0, 212, 255, 0.05)' 
                                                : 'rgba(26, 31, 77, 0.05)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontFamily: FONT_FAMILY.secondary,
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
                                            color: darkMode ? '#fff' : '#1a1f4d',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    {/* Footer in Drawer */}
                    <Box
                        sx={{
                            p: 3,
                            borderTop: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                textAlign: 'center',
                            }}
                        >
                            © 2024 Elijah Adue
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;