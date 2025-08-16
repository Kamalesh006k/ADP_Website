import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        minHeight: "180px",
        backgroundColor: "rgba(0,0,0,0.5)", 
        backdropFilter: "blur(10px)", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
        pt: 4,
        px: 4,
        pb: 4,
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
    
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <Link href="mailto:info@adpconstructions.com" color="inherit">
            Email: info@adpconstructions.com
          </Link>{" "}
          |{" "}
          <Link href="tel:+911234567890" color="inherit">
            Phone: +91 1234567890
          </Link>
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Link href="https://twitter.com" target="_blank" color="inherit">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <Link href="https://discord.com" target="_blank" color="inherit">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="https://linkedin.com" target="_blank" color="inherit">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link href="https://facebook.com" target="_blank" color="inherit">
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          pt: 2,
          mt: 2,
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          © 2025 ADP Constructions. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
