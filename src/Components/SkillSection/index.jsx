import React, { useState } from 'react';
import {
    Typography,
    Container,
    Box,
    Grid,
    LinearProgress,
    Paper,
} from '@mui/material';
import {
    Code,
    Web,
    Storage,
    Cloud,
    AccountBalanceWallet,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../Config/font';

export const SkillsSection = ({ darkMode, theme }) => {
    const skills = [
        { name: 'React/Next.js', level: 95, icon: <Code /> },
        { name: 'Node.js/Express', level: 90, icon: <Storage /> },
        { name: 'TypeScript', level: 88, icon: <Code /> },
        { name: 'Python/Django', level: 85, icon: <Code /> },
        { name: 'PostgreSQL/MongoDB', level: 92, icon: <Storage /> },
        { name: 'AWS/Docker', level: 87, icon: <Cloud /> },
        { name: 'Ethereum/EVM', level: 95, icon: <AccountBalanceWallet />, },
        { name: 'Kadena Blockchain', level: 90, icon: <AccountBalanceWallet />,  },
    ];

    return (
        <Box
            id="skills"
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
                        mb: 1,
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: FONT_FAMILY.secondary,
                    }}
                >
                    Technical Skills
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ mb: 8, fontFamily: FONT_FAMILY.secondary, textAlign: 'center', color: 'text.secondary' }}
                >
                    Technologies I work with
                </Typography>
                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Paper
                                elevation={5}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    background: darkMode ? '#1a1f4d' : '#ffffff',
                                    border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: `0 20px 40px ${theme.palette.primary.main}30`,
                                    },
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <Box
                                        sx={{
                                            color: theme.palette.primary.main,
                                            mr: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            background: `${theme.palette.primary.main}15`,
                                        }}
                                    >
                                        {skill.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                                        {skill.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: theme.palette.primary.main,
                                            fontWeight: 800,
                                        }}
                                    >
                                        {skill.level}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.level}
                                    sx={{
                                        height: 12,
                                        borderRadius: 10,
                                        backgroundColor: darkMode ? '#0a0e27' : '#e0e0e0',
                                        '& .MuiLinearProgress-bar': {
                                            background: 'linear-gradient(90deg, #00d4ff 0%, #ff006e 100%)',
                                            borderRadius: 10,
                                        },
                                    }}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};