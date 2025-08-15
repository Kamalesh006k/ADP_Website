import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";

const AboutUs = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>About Us</Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Established in 2010 and registered in 2012, our company has been delivering excellence in construction, interior design, and joint villa projects.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <VerifiedIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6">Certifications</Typography>
              <Typography variant="body2">ISO 9001, Quality Management</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <StarIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6">Awards</Typography>
              <Typography variant="body2">Best Construction Company 2018, 2020</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <VerifiedIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />
              <Typography variant="h6">Registration Info</Typography>
              <Typography variant="body2">License: 12345 | GSTIN: 22ABCDE1234F1Z5</Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
