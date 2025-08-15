import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, duration, cost, location, area }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          m: 2,
          borderRadius: "12px",
          backgroundColor: "rgba(255,255,255,0.55)", // brighter transparent
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}
          </Typography>
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
