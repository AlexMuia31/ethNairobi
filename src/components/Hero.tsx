import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useEffect(() => {
    const text = new SplitType("#my-text");
    gsap.from(text.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "elastic.out(1,0,3)",
      duration: 1,
      transformOrigin: "left top",
    });
  }, []);

  return (
    <Box>
      <Toolbar />
      <Grid container sx={{ minHeight: "50vh" }}>
        <Grid item md={6} xs={12}>
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            {" "}
            <Typography
              id="my-text"
              sx={{
                fontFamily: "Poppins",
                color: "#fff",
                fontSize: { xs: "30px", md: "80px", sm: "40px" },
              }}
            >
              The Largest Ethereum and Web3 Event in Nairobi, Kenya
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
