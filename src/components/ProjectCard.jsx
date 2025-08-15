import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, duration, cost, location, area }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardMedia component="img" height="180" image={image} alt={title} />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">Duration: {duration}</Typography>
          <Typography variant="body2">Cost: {cost}</Typography>
          <Typography variant="body2">Location: {location}</Typography>
          <Typography variant="body2">Area: {area}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
