import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title: "Residential Villa 1", category: "Residential", image: "/assets/project1.jpg", duration: "12 months", cost: "₹1.5 Cr", location: "Chennai", area: "4000 sqft" },
  { title: "Commercial Complex", category: "Commercial", image: "/assets/project2.jpg", duration: "18 months", cost: "₹5 Cr", location: "Bangalore", area: "15000 sqft" },
  { title: "Joint Villa Project 1", category: "Joint Villas", image: "/assets/project3.jpg", duration: "14 months", cost: "₹3 Cr", location: "Hyderabad", area: "5000 sqft" },
  // Add remaining projects here
];

const Projects = () => {
  const categories = ["Residential", "Commercial", "Joint Villas"];

  return (
    <Box sx={{ p: { xs: 3, md: 8 } }}>
      <Typography variant="h3" sx={{ mb: 5, textAlign: "center" }}>Our Projects</Typography>
      
      {categories.map((cat) => (
        <Box key={cat} sx={{ mb: 5 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>{cat}</Typography>
          <Grid container spacing={4}>
            {projects.filter(p => p.category === cat).map((proj, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectCard {...proj} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
