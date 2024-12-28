import React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { registerContainerSxProps } from "./styles";
import { contentSxProps } from "./homepage/styles";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "@assets/homepage-animation.json";

interface IProps {
  formElement: JSX.Element;
}

const options = {
  animationData: groovyWalkAnimation,
  loop: true,
};

export default function RegisterFormLayout({ formElement }: IProps) {
  const { View } = useLottie(options);
  return (
    <Container maxWidth={false} sx={registerContainerSxProps}>
      <Grid2 container spacing={2}>
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          size={6}
          height={"90vh"}
        >
          <Box>
            <Typography variant={"h6"}>welcome to</Typography>
            <Typography variant={"h1"} sx={contentSxProps}>
              Superb!
            </Typography>
            <Box>{View}</Box>
          </Box>
        </Grid2>
        <Grid2 size={6}>{formElement}</Grid2>
      </Grid2>
    </Container>
  );
}
