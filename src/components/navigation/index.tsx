"use client";

import colorPalette from "@/theme/color-palette";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SxProps,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

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
  padding: "1rem",
  color: fontColor,
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
};

export const listItemActiveSxProps: SxProps = {
  background: "rgba(255, 255, 255, 0.2)",
  color: "white",
  padding: "1rem",
};

interface INavOption {
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const navOptions = (currentStep: number): INavOption[] => {
  const sxProps = (index: number): SxProps => ({
    color: currentStep === index ? fontActiveColor : fontColor,
    fontSize: 30,
  });
  const data = [
    {
      icon: <HomeIcon sx={{ color: fontActiveColor, fontSize: 30 }} />,
      text: "Home",
      active: true,
    },
    {
      icon: <SearchIcon sx={{ color: fontColor, fontSize: 30 }} />,
      text: "Search",
      active: false,
    },
    {
      icon: <ExploreIcon sx={{ color: fontColor, fontSize: 30 }} />,
      text: "Explore",
      active: false,
    },
    {
      icon: <SendIcon sx={{ color: fontActiveColor, fontSize: 30 }} />,
      text: "Messages",
      active: false,
    },
    {
      icon: <NotificationsIcon sx={{ color: fontColor, fontSize: 30 }} />,
      text: "Notifications",
      active: false,
    },
    {
      icon: <AddCircleOutlineIcon sx={{ color: fontColor, fontSize: 30 }} />,
      text: "Create",
      active: false,
    },
    {
      icon: <SettingsIcon sx={{ color: fontColor, fontSize: 30 }} />,
      text: "Settings",
      active: false,
    },
  ];
  return data.map((item, index) => ({
    ...item,
    active: currentStep === index,
  }));
};

interface IProps {
  currentActive: number;
}

export default function BottomNavigation({ currentActive }: IProps) {
  const [currenStep, setCurrentStep] = useState(currentActive);

  return (
    <Container sx={containerSxProps} component={"nav"}>
      <Typography variant={"h4"} sx={titleSxProps}>
        Superb
      </Typography>
      <List sx={listSxProps}>
        {navOptions(currenStep).map((option: INavOption, index: number) => (
          <ListItem
            key={index}
            sx={currenStep === index ? listItemActiveSxProps : listItemSxProps}
            onClick={() => setCurrentStep(index)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText
              primary={option.text}
              primaryTypographyProps={{
                sx: { color: fontColor, fontSize: 20 },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
