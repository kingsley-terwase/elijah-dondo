import React from "react";
import {
  Building20Filled,
  BuildingRetail20Filled,
  Home20Filled,
  BuildingBank20Filled,
  PeopleCommunity20Filled,
  BuildingFilled,
  BuildingRetailFilled,
  BuildingBankFilled,
  PeopleCommunityFilled,
  ProductionFilled,
  HomeFilled,
} from "@fluentui/react-icons";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { FONT_FAMILY } from "../../Config/font";
import { COLORS } from "../../Config/color";

const ApartmentTypes = () => {
  const theme = useTheme();

  const propertyTypes = [
    {
      id: "commercial",
      title: "Commercial",
      properties: "6 Properties",
      icon: <BuildingFilled fontSize={38} />,
      color: "#4CAF50",
    },
    {
      id: "warehouse",
      title: "Warehouse",
      properties: "6 Properties",
      icon: <BuildingRetailFilled fontSize={38} />,
      color: "#2196F3",
    },
    {
      id: "villa",
      title: "Villa",
      properties: "6 Properties",
      icon: <HomeFilled fontSize={38} />,
      color: "#FF9800",
    },
    {
      id: "apartment",
      title: "Apartment",
      properties: "6 Properties",
      icon: <BuildingBankFilled fontSize={38} />,
      color: "#9C27B0",
    },
    {
      id: "homestay",
      title: "Homestay",
      properties: "6 Properties",
      icon: <PeopleCommunityFilled fontSize={38} />,
      color: "#4CAF50",
    },
    {
      id: "Away",
      title: "Away",
      properties: "6 Properties",
      icon: <ProductionFilled fontSize={28} />,
      color: "#8eaa14ff",
    },
  ];

  return (
    <Box
      sx={{
        background: COLORS.secondary,
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          sx={{
            color: COLORS.style_4,
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: "14px",
            mb: 1,
            fontFamily: FONT_FAMILY.primary,
          }}
        >
          Property By Requirement
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 600,
            lineHeight: 1.2,
            fontFamily: FONT_FAMILY.primary,
          }}
        >
          Explore Apartment{" "}
          <Box component="span" sx={{ fontFamily: FONT_FAMILY.primary, }}>
            Types
          </Box>
        </Typography>
      </Box>

      {/* Property Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        {propertyTypes.map((property, index) => (
          <Grid key={property.id} size={{xs:12, sm:6, md:4, lg:4}}>
            <Card
              sx={{
                height: 180,
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
                fontFamily: FONT_FAMILY.primary,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: `2px solid ${property.color}`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${property.color}33`,
                  "& .icon": {
                    color: property.color,
                    transform: "scale(1.1)",
                    filter: `drop-shadow(0 0 10px ${property.color}66)`,
                  },
                  "& .title": {
                    color: property.color,
                  },
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    className="icon"
                    sx={{
                      fontSize: 38,
                      color: "rgba(255, 255, 255, 0.8)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {property.icon}
                  </Box>
                </Box>

                <Typography
                  className="title"
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    fontFamily: FONT_FAMILY.primary,
                    mb: 0.5,
                    transition: "color 0.3s ease",
                  }}
                >
                  {property.title}
                </Typography>
                <Typography
                  className="count"
                  sx={{
                    fontSize: "14px",
                    fontFamily: FONT_FAMILY.primary,
                    color: "rgba(255, 255, 255, 0.6)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {property.properties}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ApartmentTypes;
