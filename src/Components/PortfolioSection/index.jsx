import React, { useState } from 'react';
import {
    Typography,
    Container,
    Box,
    Grid,
    Card,
    CardContent,
    Chip,
} from '@mui/material';
import { FONT_FAMILY } from '../../Config/font';


const PortfolioSection = ({ darkMode, theme }) => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description:
                'Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            image: '🛍️',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            title: 'Real-Time Chat Application',
            description:
                'Scalable chat platform with WebSocket support, file sharing, and end-to-end encryption.',
            tech: ['Next.js', 'Socket.io', 'Redis', 'MongoDB'],
            image: '💬',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            title: 'AI-Powered Analytics Dashboard',
            description:
                'Business intelligence platform with machine learning insights and predictive analytics.',
            tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
            image: '📊',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            title: 'Cloud Infrastructure Manager',
            description:
                'DevOps tool for managing multi-cloud infrastructure with automated deployment pipelines.',
            tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
            image: '☁️',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        },
    ];

    return (
        <Box
            id="portfolio"
            sx={{
                py: 12,
                background: darkMode
                    ? 'linear-gradient(135deg, #151937 0%, #0a0e27 100%)'
                    : '#f9fafb',
            }}
        >
            <Container maxWidth="lg">
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
                    Portfolio
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 8, fontFamily: FONT_FAMILY.secondary,
                        textAlign: 'center', color: 'text.secondary'
                    }}
                >
                    Recent projects I've worked on
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    transition: 'all 0.4s ease',
                                    height: '100%',
                                    overflow: 'hidden',
                                    background: darkMode ? '#1a1f4d' : '#ffffff',
                                    border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: `0 25px 50px ${theme.palette.primary.main}30`,
                                        '& .project-image': {
                                            transform: 'scale(1.1)',
                                        },
                                    },
                                }}
                            >
                                <Box
                                    className="project-image"
                                    sx={{
                                        height: 250,
                                        background: project.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '100px',
                                        transition: 'transform 0.4s ease',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'rgba(0, 0, 0, 0.1)',
                                        },
                                    }}
                                >
                                    {project.image}
                                </Box>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{
                                        fontFamily: FONT_FAMILY.secondary,
                                        fontWeight: 700, mb: 2
                                    }}>
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            lineHeight: 1.8,
                                            fontSize: '1rem',
                                            fontFamily: FONT_FAMILY.secondary,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tech.map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech}
                                                size="medium"
                                                sx={{
                                                    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
                                                    color: '#fff',
                                                    fontWeight: 700,
                                                    px: 1,
                                                    '&:hover': {
                                                        background: 'linear-gradient(135deg, #0099ff 0%, #00d4ff 100%)',
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>
    );
}
export default PortfolioSection;