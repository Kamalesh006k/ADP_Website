import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          width: 240, 
          height: 260, 
          m: 2,
          textAlign: "center",
          borderRadius: "12px",
          backgroundColor: "rgba(255,255,255,0.55)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-1.5px)", 
            boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <div style={{ fontSize: 40, color: "#0d6efd", marginBottom: 8 }}>{icon}</div>
        <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
