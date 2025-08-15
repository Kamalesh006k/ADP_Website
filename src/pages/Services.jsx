import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import BuildIcon from "@mui/icons-material/Build";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VillaIcon from "@mui/icons-material/Villa";

const services = [
  { icon: <BuildIcon />, title: "Building Construction", description: "Professional construction services for residential and commercial buildings." },
  { icon: <MonetizationOnIcon />, title: "Construction Loan", description: "Assistance for construction financing and project funding." },
  { icon: <DesignServicesIcon />, title: "Interior Design", description: "Creative interior design solutions tailored to your needs." },
  { icon: <VillaIcon />, title: "Joint Villas (JV)", description: "Collaborative joint villa projects with superior architecture." },
];

const Services = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <Typography variant="h3" sx={{ mb: 5, textAlign: "center" }}>Our Services</Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
