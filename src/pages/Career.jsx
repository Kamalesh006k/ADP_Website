import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Career = () => {
  const handleResumeUpload = (e) => {
    e.preventDefault();
    alert("Resume submitted successfully!");
  };

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Career Opportunities</Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          Please reach out through our company website for available openings or drop your resume below.
        </Typography>
        <form onSubmit={handleResumeUpload}>
          <input type="file" accept=".pdf,.doc,.docx" required />
          <Box sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">Submit Resume</Button>
          </Box>
        </form>
      </motion.div>
    </Box>
  );
};

export default Career;
