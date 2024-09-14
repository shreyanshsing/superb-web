import { Container, Typography, Box } from "@mui/material";
import { fontActiveColor } from "./navigation/stylesProps";
import Image from "next/image";
import { registerContainerSxProps } from "./styles";

interface IProps {
  formElement: JSX.Element;
  extraElement: JSX.Element;
}

export default function RegisterFormLayout({
  formElement,
  extraElement,
}: IProps) {
  const renderLogo = () => {
    return (
      <Box sx={{ marginBottom: "2rem" }}>
        <Image
          src={"/assets/images/logo-no-background.png"}
          alt={"logo"}
          width={220}
          height={150}
          objectFit={"cover"}
        />
      </Box>
    );
  };
  return (
    <Container sx={registerContainerSxProps}>
      {renderLogo()}
      <Typography variant="h4" sx={{ color: fontActiveColor }} gutterBottom>
        Login here
      </Typography>
      {formElement}
      {extraElement}
    </Container>
  );
}
