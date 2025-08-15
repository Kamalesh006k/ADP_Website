import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/career", label: "Career" },
    { to: "/contact", label: "Contact" },
  ];

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const drawer = (
    <motion.div
      initial="hidden"
      animate={mobileOpen ? "visible" : "hidden"}
      variants={listVariants}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300,
      }}
      onClick={handleDrawerToggle}
    >
      <Typography variant="h6" sx={{ mb: 4 }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <img
            src="logo.png"
            alt="Logo"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <span
            style={{
              marginLeft: "8px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            ADP Constructions
          </span>
        </Link>
      </Typography>

      {navItems.map((item) => (
        <motion.div
          key={item.to}
          variants={itemVariants}
          style={{ marginBottom: "20px" }}
        >
          <Link
            to={item.to}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          {/* Logo with Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  style={{
                    height: "40px",
                    maxHeight: "50px",
                    objectFit: "contain",
                  }}
                />
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  ADP Constructions
                </span>
              </Link>
            </Typography>
          </motion.div>

          {/* Desktop Links (md and above) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={listVariants}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  variants={itemVariants}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link
                    to={item.to}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      padding: "8px 12px",
                      borderRadius: "60px",
                      transition: "background-color 0.3s, color 0.3s",
                      backgroundColor:
                        item.label === "Contact" ? "#0d6efd" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (item.label === "Contact") {
                        e.currentTarget.style.backgroundColor = "#0d6efd";
                      } else {
                        e.currentTarget.style.backgroundColor = "#EF9B0F";
                      }
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        item.label === "Contact" ? "#0d6efd" : "transparent";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { md: "none" }, color: "#fff", p: 1 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Fullscreen Mobile Menu */}
      {mobileOpen && drawer}
    </>
  );
};

export default Navbar;
