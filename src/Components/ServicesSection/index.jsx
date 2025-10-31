import React, { useState } from 'react';
import {
    Typography,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import {
    Code,
    Web,
    Storage,
    Cloud,
    AccountBalanceWallet,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

export const ServicesSection = ({ darkMode, theme }) => {
    const services = [
        {
            icon: <Web sx={{ fontSize: 60 }} />,
            title: 'Web Development',
            description:
                'Custom web applications built with modern frameworks and best practices for performance and scalability.',
        },
        {
            icon: <Code sx={{ fontSize: 60 }} />,
            title: 'API Development',
            description:
                'RESTful and GraphQL APIs designed for reliability, security, and optimal performance.',
        },
        {
            icon: <Cloud sx={{ fontSize: 60 }} />,
            title: 'Cloud Solutions',
            description:
                'Cloud architecture design and deployment on AWS, Azure, and Google Cloud Platform.',
        },
        {
            icon: <Storage sx={{ fontSize: 60 }} />,
            title: 'Database Design',
            description:
                'Efficient database architecture and optimization for SQL and NoSQL databases.',
        },
        {
            icon: <AccountBalanceWallet sx={{ fontSize: 60 }} />,
            title: 'Block Chain Technologies',
            description:
                'Development of decentralized applications (dApps) and smart contracts on Ethereum and Kadena blockchains.',
        },
    ];

    return (
        <Box
            id="services"
            sx={{
                py: 12,
                background: darkMode ? '#0a0e27' : '#ffffff',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 1,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: FONT_FAMILY.secondary,
                    }}
                >
                    Services
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        mb: 8, textAlign: 'center', color: 'text.secondary'
                    }}
                >
                    What I can do for you
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    transition: 'all 0.4s ease',
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #151937 0%, #1a1f4d 100%)'
                                        : 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                                    border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    '&:hover': {
                                        transform: 'translateY(-15px)',
                                        boxShadow: `0 25px 50px ${theme.palette.primary.main}30`,
                                        '& .service-icon': {
                                            transform: 'scale(1.1) rotate(5deg)',
                                        },
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', p: 5 }}>
                                    <Box
                                        className="service-icon"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            mb: 3,
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{
                                        fontFamily: FONT_FAMILY.secondary,
                                        fontWeight: 700, mb: 2
                                    }}>
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1rem',
                                            fontFamily: FONT_FAMILY.secondary,

                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};