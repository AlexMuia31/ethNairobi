import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar sx={{ background: "inherit" }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Typography
            sx={{
              fontFamily: "Playwrite HR",
              fontWeight: 400,
              fontSize: "30px",
            }}
          >
            Eth Nairobi
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
