
import React from "react";
import { Container } from "@mui/material";
import HorizontalHeader from "../header/horizontal-header";
import { homepageContainerSxProps } from "./styles";
import HomepageContent from "./homepage-content";
import Page2Content from "./page-2-content";

const Homepage = () => {
  return (
    <Container maxWidth={false} sx={homepageContainerSxProps}>
      <HorizontalHeader />
      <HomepageContent />
      <Page2Content />
    </Container>
  );
};

export default Homepage;
