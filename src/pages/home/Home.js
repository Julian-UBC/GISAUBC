import React from "react";
import About from "./components/About";
import { MainContainer } from "../../shared/layout/MainContainer";
import { LandingImage } from "./components/LandingImage";
import Activities from "./components/activities/Activities";
import { Events } from "./components/events/Events";
import Partners from "./components/partners/Partners";
import { Box } from "@mui/material";
import { Footer } from "./components/footer/Footer";

export const Home = () => {
  return (
    <Box className="bg-[#FFFDF5]">
      <LandingImage />
      <MainContainer>
        <About />
        <Activities />
        <Events />
        <Partners />
      </MainContainer>
      <Footer />
    </Box>
  );
};
