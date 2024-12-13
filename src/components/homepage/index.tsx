import { Container } from "@mui/material";
import HorizontalHeader from "../header/horizontal-header";
import { homepageContainerSxProps } from "./styles";
import HomepageContent from "./homepage-content";
import Page2Content from "./page-2-content";
import { surfaceSecondary } from "@/theme/color-palette";

const Homepage = () => {
  return (
    <Container id={'homepage-container'} maxWidth={false} sx={homepageContainerSxProps}>
      <HorizontalHeader backgroundColor={surfaceSecondary} />
      <HomepageContent />
      <Page2Content />
    </Container>
  );
};

export default Homepage;
