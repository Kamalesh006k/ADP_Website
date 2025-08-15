import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import { FaHammer, FaMoneyBillWave, FaPalette, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaHammer />, title: "Building Construction", description: "Professional construction services for residential and commercial buildings." },
  { icon: <FaMoneyBillWave />, title: "Construction Loan", description: "Assistance for construction financing and project funding." },
  { icon: <FaPalette />, title: "Interior Design", description: "Creative interior design solutions tailored to your needs." },
  { icon: <FaHome />, title: "Joint Villas (JV)", description: "Collaborative joint villa projects with superior architecture." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <Typography variant="h3" sx={{ mb: 5, textAlign: "center" }}>Our Services</Typography>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Services;
