import {
    Typography,
    Container,
    Box,
    Grid,
    Paper,
} from '@mui/material';
import { FONT_FAMILY } from '../../Config/font';

export const AboutSection = ({ darkMode, theme }) => {
    return (
        <Box
            id="about"
            sx={{
                py: 12,
                background: darkMode ? '#0a0e27' : '#ffffff',
                position: 'relative',
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
                    About Me
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 8,
                        textAlign: 'center',
                        color: 'text.secondary',
                        fontFamily: FONT_FAMILY.secondary,
                    }}
                >
                    Get to know me better
                </Typography>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box component='img' src='/Images/boss.png' sx={{ borderLeft: '12px solid #00d4ff', borderRadius: '50px', objectFit: 'cover', width: '100%', height: '600px' }} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                        >
                            <Typography variant="h4" sx={{ fontFamily: FONT_FAMILY.secondary, fontWeight: 700, mb: 3, color: theme.palette.primary.main }}>
                                Professional Software Engineer
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.secondary, mb: 3, lineHeight: 2, fontSize: '1.05rem' }}>
                                With over 9 years of experience in full-stack development and web3 projects, I've helped
                                startups and enterprises build scalable, user-centric applications that
                                drive business growth.
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.secondary, mb: 3, lineHeight: 2, fontSize: '1.05rem' }}>
                                My expertise spans modern web technologies, cloud infrastructure, and
                                agile development methodologies. I'm passionate about writing clean,
                                maintainable code and creating exceptional user experiences.
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.secondary, lineHeight: 2, fontSize: '1.05rem' }}>
                                When I'm not coding, you'll find me contributing to open-source projects,
                                mentoring junior developers, or exploring the latest technologies in the
                                software engineering ecosystem.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ py: 8 }}>
                    {[
                        { number: '50+', label: 'Projects Completed', color: '#00d4ff' },
                        { number: '30+', label: 'Happy Clients', color: '#ff006e' },
                        { number: '9+', label: 'Years Experience', color: '#00d4ff' },
                        { number: '9+', label: 'Years Experience', color: '#ff006e' },
                    ].map((stat, i) => (
                        <Grid size={{ xs: 12, md: 3 }} key={i}>
                            <Paper
                                elevation={5}
                                sx={{
                                    p: 4,
                                    borderRadius: 3,
                                    textAlign: 'center',
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #151937 0%, #1a1f4d 100%)'
                                        : '#ffffff',
                                    border: `2px solid ${stat.color}`,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: `0 15px 35px ${stat.color}40`,
                                    },
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 900,
                                        color: stat.color,
                                        mb: 1,
                                    }}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};