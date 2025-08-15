import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card sx={{ minWidth: 250, m: 2, textAlign: "center" }}>
        <CardContent>
          <div style={{ fontSize: 50 }}>{icon}</div>
          <Typography variant="h6" sx={{ mt: 1 }}>{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
