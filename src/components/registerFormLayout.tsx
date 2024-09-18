import { Container } from "@mui/material";
import { blurContainerSxProps, registerContainerSxProps } from "./styles";
import HorizontalHeader from "./header/horizontalHeader";

interface IProps {
  formElement: JSX.Element;
}

export default function RegisterFormLayout({
  formElement,
}: IProps) {

  return (
    <Container maxWidth={false} sx={registerContainerSxProps}>
      <Container maxWidth={false} sx={blurContainerSxProps}>
        <HorizontalHeader />
        {formElement}
      </Container>
    </Container>
  );
}
