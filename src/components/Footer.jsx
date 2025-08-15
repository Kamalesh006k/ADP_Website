import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent black
        backdropFilter: "blur(8px)", // glass blur effect
        color: "#fff",
        py: 3,
        mt: 5,
        textAlign: "center",
      }}
    >
      <Typography>© 2025 Company Name. All rights reserved.</Typography>
      <Typography>
        Contact:{" "}
        <Link href="mailto:company@gmail.com" color="inherit">
          company@gmail.com
        </Link>{" "}
        | Phone:{" "}
        <Link href="tel:+911234567890" color="inherit">
          +91 1234567890
        </Link>
      </Typography>
      <Typography>
        <Link href="#" color="inherit">
          Facebook
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit">
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
