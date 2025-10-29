import {
  AppBar,
  Button,
  Box,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FONT_FAMILY } from '../../Config/font';
import { COLORS } from '../../Config/color';

// Styled Components
export const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor:scrolled ? '#fff' : 'transparent',
  boxShadow: scrolled ? theme.shadows[2] : 'none',
  transition: 'all 0.3s ease-in-out',
  color: scrolled ? theme.palette.text.primary : 'white',
  zIndex: theme.zIndex.appBar + 1,
  backdropFilter:  scrolled ? 'blur(10px)' : 'transparent',
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const LogoIcon = styled(Box)(({ theme }) => ({
  width: 42,
  height: 42,
  backgroundColor: COLORS.style,
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

export const HeroSection = styled(Box)(() => ({
  minHeight: "100vh",
  backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80")',
  // backgroundImage: 'url("/Images/est_2.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    zIndex: 1,
  },

  // Ensure all child content appears above overlay
  "& > *": {
    position: "relative",
    zIndex: 2,
  }
}));

export const SearchCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  padding: theme.spacing(3),
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  marginTop: theme.spacing(4),
  position: 'relative',
  zIndex: 2, // Ensure search card appears above overlay
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  background: COLORS.style,
  borderRadius: '12px',
  padding: '12px 32px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  boxShadow: '0 8px 20px rgba(74, 103, 65, 0.3)',
  '&:hover': {
    background: COLORS.style,
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 30px rgba(74, 103, 65, 0.4)',
  },
  transition: 'all 0.3s ease',
}));

export const NavButton = styled(Button)(({ scrolled }) => ({
  color: scrolled ? '#333' : 'white', // Fixed: should be white when not scrolled
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 600,
  padding: '8px 16px',
  fontFamily: FONT_FAMILY.primary,
  position: 'relative',
  zIndex: 3, // Ensure nav buttons appear above everything
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const UserButton = styled(Button)(({ variant }) => ({
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  padding: '5px 18px',
  borderRadius: '10px',
  position: 'relative',
  zIndex: 3, // Ensure user buttons appear above everything
  ...(variant === 'customer' && {
    color: '#000',
    fontWeight: 600,
    border: `1px solid ${COLORS.style}`,
    backgroundColor: 'white', // Added white background for better visibility
    '&:hover': {
      backgroundColor: COLORS.style,
      color: 'white',
    },
  }),
  ...(variant === 'vendor' && {
    backgroundColor: COLORS.style,
    color: 'white',
    '&:hover': {
      backgroundColor: COLORS.secondary,
    },
  }),
}));