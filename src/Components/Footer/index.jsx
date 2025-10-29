import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import {
  Home24Filled,
  ArrowUp24Filled,
  Camera24Filled as InstagramIcon,
  PaintBrush24Filled as DribbbleIcon,
  Chat24Filled as TwitterIcon,
  VideoClip24Filled as YouTubeIcon,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box component="footer" sx={{ bgcolor: COLORS.secondary, pt: 8, pb: 4, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  bgcolor: COLORS.primary,
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  mr: 1,
                }}
              >
                <Home24Filled />
              </Box>
              <Typography variant="h6" sx={{ textTransform: 'uppercase', fontFamily: FONT_FAMILY.primary, color: '#fff', fontWeight: 600 }}>
                Real Estate
              </Typography>
            </Box>

            <Typography
              variant="body1"
              color="#fff"
              sx={{
                textTransform: 'capitalize',
                fontFamily: FONT_FAMILY.primary,
                fontWeight: 400,
                letterSpacing: '0.07em',
              }}
            >
              Estaty is a dynamic and forward-thinking real estate company
              dedicated to providing exceptional real estate services across
              residential, commercial, and investment properties.
            </Typography>

            <Box sx={{ display: "flex", gap: 1, pt: 2 }}>
              <IconButton style={{ color: '#fff', }}>
                <InstagramIcon />
              </IconButton>
              <IconButton style={{ color: '#fff', }}>
                <DribbbleIcon />
              </IconButton>
              <IconButton style={{ color: '#fff', }}>
                <TwitterIcon />
              </IconButton>
              <IconButton style={{ color: '#fff', }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb:3, fontFamily: FONT_FAMILY.primary, color: '#fff'}} gutterBottom>
              Useful Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily:FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                About Us
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily:FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                Contact
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily:FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                Vendors
              </Button>
              <Button sx={{ color: '#fff', textTransform: 'capitalize', fontFamily:FONT_FAMILY.primary, justifyContent: "flex-start" }}>
                FAQ
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb:4, fontFamily: FONT_FAMILY.primary, color: '#fff',}} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb:3, color: '#fff',}} >
              📍 13th Street 47 W, New York, USA
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb:3, color: '#fff',}} >
              📞 +8806587952l
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, mb:3, color: '#fff',}} >
              ✉️ estaty@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{  mt: 6, pt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, color: '#fff',}} >
            Copyright ©2025 All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
