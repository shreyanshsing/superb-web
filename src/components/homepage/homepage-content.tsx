import { Box, Container, Typography } from "@mui/material";
import {
  buttonContainerSxProps,
  contentContainerSxProps,
  contentSxProps,
  descriptionSxProps,
} from "./styles";
import { EditProfileButton, ShareButton } from "../profile/styled";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../public/assets/homepage-animation.json";
import useCustomRouter from "@/router";
import Path from "@router/paths";

const content = ["CLUB", "COMMUNITY", "PEOPLE"];

const HomepageContent = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const { navigateTo } = useCustomRouter();

  const routeToLogin = () => {
    navigateTo(Path.LOGIN);
  };

  const routeToSignup = () => {
    navigateTo(Path.SIGNUP);
  };

  return (
    <Container sx={contentContainerSxProps}>
      {content.map((item, index) => {
        return (
          <Typography variant={"h1"} key={index} sx={contentSxProps}>
            {"#"}
            {item}
          </Typography>
        );
      })}
      <Box
        sx={{
          width: "50%",
          margin: "2rem auto",
          textAlign: "center",
          backdropFilter: "blur(15px)",
        }}
      >
        <Typography gutterBottom variant={"h4"} sx={descriptionSxProps}>
          {
            "Ready to start your journey or pick up where you left off? \n Join now or sign in to unlock endless possibilities!"
          }
        </Typography>
        <Box sx={buttonContainerSxProps}>
          <EditProfileButton size={"large"} onClick={routeToLogin} fullWidth>
            Sign in
          </EditProfileButton>
          <ShareButton
            variant={"contained"}
            onClick={routeToSignup}
            color={"primary"}
            fullWidth
          >
            Sign up
          </ShareButton>
        </Box>
      </Box>
      <Box sx={{ position: "fixed", bottom: "0", width: "30%", right: "0" }}>
        {View}
      </Box>
    </Container>
  );
};

export default HomepageContent;
