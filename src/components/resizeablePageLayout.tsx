import { useAppState } from "@/store/store";
import { Container } from "@mui/material";
import { resizeContainerSxProps } from "./styles";

const ResizeablePageLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { navigation },
  } = useAppState();

  const width = navigation.isCollapsed ? "95%" : "82%";
  const marginLeft = navigation.isCollapsed ? "5%" : "18%";

  return (
    <Container
      maxWidth={false}
      sx={{
        width: width,
        marginLeft: marginLeft,
        marginRight: 0,
        ...resizeContainerSxProps,
      }}
    >
      {children}
    </Container>
  );
};

export default ResizeablePageLayout;
