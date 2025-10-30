import React from 'react'
import { useState } from 'react';
import { HeroSection } from '../../Components/HeroSections';
import { AboutSection } from '../../Components/AboutSection';
import { SkillsSection } from '../../Components/SkillSection';
import { ServicesSection } from '../../Components/ServicesSection';
import { ContactSection } from '../../Components/ContactSection';
import { Footer, Header } from '../../Components';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import PortfolioSection from '../../Components/PortfolioSection';


export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#00d4ff',
            },
            secondary: {
                main: '#ff006e',
            },
            background: {
                default: darkMode ? '#0a0e27' : '#f5f5f5',
                paper: darkMode ? '#151937' : '#ffffff',
            },
        },
        typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        },
    });

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh' }}>
                <Header
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    scrollToSection={scrollToSection}
                />
                <HeroSection darkMode={darkMode} theme={theme} />
                <AboutSection darkMode={darkMode} theme={theme} />
                <SkillsSection darkMode={darkMode} theme={theme} />
                <ServicesSection darkMode={darkMode} theme={theme} />
                <PortfolioSection darkMode={darkMode} theme={theme} />
                <ContactSection darkMode={darkMode} theme={theme} />
                <Footer
                    darkMode={darkMode}
                    theme={theme}
                    scrollToSection={scrollToSection}
                />
            </Box>
        </ThemeProvider>
  );
};