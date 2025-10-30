import React, { useEffect } from 'react';
import { useState } from 'react';
import { HeroSection } from '../../Components/HeroSections';
import { AboutSection } from '../../Components/AboutSection';
import { SkillsSection } from '../../Components/SkillSection';
import { ServicesSection } from '../../Components/ServicesSection';
import { ContactSection } from '../../Components/ContactSection';
import { Footer, Header } from '../../Components';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import PortfolioSection from '../../Components/PortfolioSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether animation should happen only once
            mirror: true, // Whether elements should animate out while scrolling past them
            offset: 100, // Offset (in px) from the original trigger point
            easing: 'ease-in-out', // Easing function
            delay: 100, // Delay in milliseconds
        });

        AOS.refresh();
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [darkMode]);

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

                <div data-aos="fade-up">
                    <HeroSection darkMode={darkMode} theme={theme} />
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                    <AboutSection darkMode={darkMode} theme={theme} />
                </div>

                <div data-aos="fade-up" data-aos-delay="150">
                    <SkillsSection darkMode={darkMode} theme={theme} />
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <ServicesSection darkMode={darkMode} theme={theme} />
                </div>

                <div data-aos="fade-up" data-aos-delay="250">
                    <PortfolioSection darkMode={darkMode} theme={theme} />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                    <ContactSection darkMode={darkMode} theme={theme} />
                </div>

                <Footer
                    darkMode={darkMode}
                    theme={theme}
                    scrollToSection={scrollToSection}
                />
            </Box>
        </ThemeProvider>
    );
}