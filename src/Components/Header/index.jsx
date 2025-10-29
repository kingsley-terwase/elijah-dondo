import React, { useState, useEffect } from 'react';
import {
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    MenuItem,
    useTheme,
    useMediaQuery,
    IconButton,
    Menu,
} from '@mui/material';
import {
    //   Globe,
    ChevronDownFilled,
    GlobeFilled,
    HomeFilled,
    HourglassFilled,
    MoreHorizontalFilled,
    PersonFilled
} from '@fluentui/react-icons';
import { HeroSection, LogoContainer, LogoIcon, NavButton, StyledAppBar, UserButton } from '../StyledComponents';
import { Hero } from '../HeroSection';
import { COLORS } from '../../Config/color';
import { FONT_FAMILY } from '../../Config/font';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleProperties = () => {
        navigate('/properties');
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const navigate = useNavigate();
    const handleAuth = () => {     
        navigate('/auth'); 
    }

    return (
        <Box>
            <StyledAppBar position="fixed" elevation={0} scrolled={scrolled}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <LogoContainer>
                            <LogoIcon>
                                <HourglassFilled style={{ fontSize: '24px' }} />
                            </LogoIcon>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    fontFamily: FONT_FAMILY.primary,
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    color: scrolled ? COLORS.style : '#fff',
                                    transition: 'color 0.3s ease',
                                    zIndex: theme.zIndex.appBar + 1, 
                                }}
                            >
                                Real Estate
                            </Typography>
                        </LogoContainer>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                
                                <NavButton onClick={handleProperties} scrolled={scrolled}>Properties</NavButton>
                                <NavButton scrolled={scrolled}>Pricing</NavButton>
                                <NavButton scrolled={scrolled} endIcon={<ChevronDownFilled />}>
                                    Pages
                                </NavButton>
                                <NavButton scrolled={scrolled}>Contact</NavButton>
                            </Box>
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', 
                                    zIndex: 3, gap: 1 }}>
                            <Button
                                startIcon={<GlobeFilled />}
                                sx={{
                                    color: scrolled ? '#333' : '#fff',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    zIndex: theme.zIndex.appBar + 1, 
                                }}
                            >
                                English
                            </Button>

                            {!isMobile && (
                                <>
                                    <UserButton onClick={handleAuth} variant="customer"><PersonFilled /> Customer</UserButton>
                                    <UserButton onClick={handleAuth} variant="vendor"><PersonFilled /> Vendor</UserButton>
                                </>
                            )}

                            {isMobile && (
                                <IconButton
                                    onClick={handleMenuOpen}
                                    sx={{ color: scrolled ? '#333' : 'white' }}
                                >
                                    <MoreHorizontalFilled />
                                </IconButton>
                            )}
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Properties</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Pages</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Customer</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Vendor</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </StyledAppBar>
            <HeroSection>
                <Hero />
            </HeroSection>
        </Box>
    );
};

export default Header;