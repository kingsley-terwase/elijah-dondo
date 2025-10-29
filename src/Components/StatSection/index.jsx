import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import {
  Money24Filled,
  Building24Filled,
  Handshake24Filled,
  PeopleCommunity24Filled,
  BuildingFilled,
  HandshakeFilled,
  PeopleCommunityFilled,
  MoneyFilled,
} from "@fluentui/react-icons";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";


const statsData = [
  {
    icon: <MoneyFilled style={{ fontSize: "60px" }} />,
    value: "14+",
    text: "There are many variations of Lorem Ipsum available, but the majority.",
    color: COLORS.tertiary,
  },
  {
    icon: <BuildingFilled style={{ fontSize: "60px" }} />,
    value: "30+",
    text: "There are many variations of Lorem Ipsum available, but the majority.",
    color: COLORS.style_4,
  },

  {
    icon: <HandshakeFilled style={{ fontSize: "60px" }} />,
    value: "250+",
    text: "There are many variations of Lorem Ipsum available, but the majority.",
    color: COLORS.primary,
  },
  {
    icon: <PeopleCommunityFilled style={{ fontSize: "60px" }} />,
    value: "100+",
    text: "There are many variations of Lorem Ipsum available, but the majority.",
    color: COLORS.secondary,
  },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: 16, bgcolor: "white", }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box sx={{ color: stat.color, }}>{stat.icon}</Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: COLORS.primary,
                    fontFamily: FONT_FAMILY.primary,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#666",
                    maxWidth: "320px",
                    fontFamily: FONT_FAMILY.primary,
                  }}
                >
                  {stat.text}
                </Typography>
              </Box>
            </Grid>
          ))}
          
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
