import colorPalette from "@/theme/color-palette";
import { SxProps } from "@mui/material/styles";

const backgroundColor = colorPalette.bottomNavigationBar.background;
const fontColor = colorPalette.bottomNavigationBar.fontColor;
const fontActiveColor = colorPalette.bottomNavigationBar.fontActiveColor;

const containerSxProps: SxProps = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "20%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: backgroundColor,
  zIndex: 1000,
  margin: 0,
  padding: "0 !important",
  borderRight: "1px solid #f2f2f2",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
  transition: "width 0.3s ease-in-out",
};

const listSxProps: SxProps = {
  width: "100%",
  margin: 0,
  padding: 0,
};

const titleSxProps: SxProps = {
  fontFamily: "'Sevillana', cursive",
  color: fontActiveColor,
  fontWeight: 700,
  fontStyle: "italic",
  letterSpacing: 2,
  fontSize: "3rem",
  margin: "3rem auto",
};

const listItemSxProps: SxProps = {
  display: "flex !important",
  alignItems: "center",
  padding: "1rem",
  color: fontColor,
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
  },
};

const listItemActiveSxProps: SxProps = {
  background: "rgba(255, 255, 255, 0.2)",
  color: fontActiveColor,
  padding: "1rem",
};

const toggleButtonSxProps: SxProps = {
  position: "absolute",
  top: '10%',
  right: '-5%',
  transition: "right 0.3s ease-in-out",
  zIndex: 1000,
  border: "1px solid #f2f2f2",
  borderRadius: "50%",
};

export {
  containerSxProps,
  listSxProps,
  titleSxProps,
  listItemSxProps,
  listItemActiveSxProps,
  fontColor,
  fontActiveColor,
  toggleButtonSxProps,
};