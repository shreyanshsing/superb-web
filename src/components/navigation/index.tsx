"use client";

import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  containerSxProps,
  listItemActiveSxProps,
  listItemSxProps,
  listSxProps,
  titleSxProps,
  fontColor,
  fontActiveColor,
  toggleButtonSxProps,
} from "./stylesProps";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useAppState } from "@store/store";
import { ACTION_TYPES, NAVIGATION_ACTIONS } from "@store/actions";
import useCustomRouter from "@/router";
import Paths from "@/router/paths";
import LogoutIcon from '@mui/icons-material/Logout';
import LocalStorageService from "@/services/localStorageService";

interface INavOption {
  icon: React.ReactNode;
  text: string;
  route: string;
}

const navOptions = (): INavOption[] => {
  const data = [
    {
      icon: <HomeIcon sx={{ fontSize: 25 }} />,
      text: "Home",
      route: Paths.DASHBOARD,
    },
    {
      icon: <ExploreIcon sx={{ fontSize: 25 }} />,
      text: "Explore",
      route: Paths.EXPLORE,
    },
    {
      icon: <SendIcon sx={{ fontSize: 25 }} />,
      text: "Messages",
      route: Paths.MESSAGES,
    },
    {
      icon: <NotificationsIcon sx={{ fontSize: 25 }} />,
      text: "Notifications",
      route: Paths.NOTIFICATIONS,
    },
    {
      icon: <ProfileIcon sx={{ fontSize: 25 }} />,
      text: "Profile",
      route: Paths.PROFILE,
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 25 }} />,
      text: "Settings",
      route: Paths.SETTINGS,
    },
    {
      icon: <LogoutIcon sx={{ fontSize: 25 }} />,
      text: "Logout",
      route: "logout",
    }
  ];
  return data;
};

export default function BottomNavigation() {
  const { state, dispatch } = useAppState();
  const { navigateTo } = useCustomRouter();
  const isCollapsed = state.navigation.isCollapsed;
  const currenStep = state.navigation.currentIndex;

  const setCurrentStep = (index: number) => {
    const newPath = navOptions()[index].route;
    const isProfile = newPath === Paths.PROFILE;
    const isLogout = newPath === "logout";
    if (isLogout) {
      LocalStorageService.removeItem("token");
      navigateTo(Paths.LOGIN);
      return;
    }
    navigateTo(isProfile ? `${newPath}/${state.user.id}` : newPath);
    dispatch({
      type: NAVIGATION_ACTIONS.SET_CURRENT_INDEX,
      payload: index,
    } as ACTION_TYPES);
  };

  const setIsCollapsed = (isCollapsed: boolean) => {
    dispatch({
      type: NAVIGATION_ACTIONS.SET_IS_COLLAPSED,
      payload: isCollapsed,
    } as ACTION_TYPES);
  };

  const getListItemColor = (active: boolean) => {
    return active ? fontActiveColor : fontColor;
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const showCollapseIcon = () => {
    return (
      <Box sx={{ ...toggleButtonSxProps, right: isCollapsed ? "-20%" : "-5%" }}>
        <IconButton
          onClick={toggleCollapse}
          sx={{ background: fontActiveColor }}
        >
          {isCollapsed ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <KeyboardDoubleArrowLeftIcon />
          )}
        </IconButton>
      </Box>
    );
  };

  return (
    <Container
      sx={{ ...containerSxProps, width: isCollapsed ? "5%" : "18%" }}
      component={"nav"}
    >
      {showCollapseIcon()}
      <Typography variant={isCollapsed ? "h3" : "h4"} sx={titleSxProps}>
        {isCollapsed ? "S" : "Superb"}
      </Typography>
      <List sx={listSxProps}>
        {navOptions().map((option: INavOption, index: number) => (
          <ListItem
            key={index}
            sx={currenStep === index ? listItemActiveSxProps : listItemSxProps}
            onClick={() => setCurrentStep(index)}
          >
            <ListItemIcon
              sx={{
                color: getListItemColor(index === currenStep),
                padding: isCollapsed ? "0.5rem 1rem" : "0",
              }}
            >
              {option.icon}
            </ListItemIcon>
            {!isCollapsed && (
              <ListItemText
                primary={option.text}
                primaryTypographyProps={{
                  sx: {
                    color: getListItemColor(index === currenStep),
                    fontSize: 16,
                  },
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
