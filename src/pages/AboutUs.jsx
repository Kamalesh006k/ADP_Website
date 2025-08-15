import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const AboutUs = () => {
  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
          Established in 2010 and registered in 2012, our company has been delivering excellence in construction, interior design, and joint villa projects.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <WorkspacePremiumIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />,
              title: "Certifications",
              desc: "ISO 9001, Quality Management",
            },
            {
              icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />,
              title: "Awards",
              desc: "Best Construction Company 2018, 2020",
            },
            {
              icon: <HowToRegIcon color="primary" sx={{ fontSize: 50, mb: 1 }} />,
              title: "Registration Info",
              desc: "License: 12345 | GSTIN: 22ABCDE1234F1Z5",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.55)",
                  minHeight: "220px", // equal height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // centers content horizontally
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {item.icon}
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
