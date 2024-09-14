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
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SendIcon from "@mui/icons-material/Send";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { containerSxProps, listItemActiveSxProps, listItemSxProps, listSxProps, titleSxProps, fontColor, fontActiveColor, toggleButtonSxProps } from "./stylesProps";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useAppState } from "@store/store";
import { NAVIGATION_ACTION_TYPES, NAVIGATION_ACTIONS } from "@store/actions";

interface INavOption {
  icon: React.ReactNode;
  text: string;
}

const navOptions = (): INavOption[] => {
  const data = [
    {
      icon: <HomeIcon sx={{fontSize: 30}} />,
      text: "Home",
    },
    {
      icon: <SearchIcon sx={{fontSize: 30}} />,
      text: "Search",
    },
    {
      icon: <ExploreIcon sx={{fontSize: 30}} />,
      text: "Explore",
    },
    {
      icon: <SendIcon sx={{fontSize: 30}} />,
      text: "Messages",
    },
    {
      icon: <NotificationsIcon sx={{fontSize: 30}} />,
      text: "Notifications",
    },
    {
      icon: <AddCircleOutlineIcon sx={{fontSize: 30}} />,
      text: "Create",
    },
    {
      icon: <SettingsIcon sx={{fontSize: 30}} />,
      text: "Settings",
    },
  ];
  return data
};

interface IProps {
  currentActive: number;
}

export default function BottomNavigation({ currentActive }: IProps) {
  const { state, dispatch } = useAppState();
  const isCollapsed = state.navigation.isCollapsed;
  const currenStep = state.navigation.currentIndex;

  const setCurrentStep = (index: number) => {
    dispatch({ type: NAVIGATION_ACTIONS.SET_CURRENT_INDEX, payload: index } as NAVIGATION_ACTION_TYPES);
  }

  const setIsCollapsed = (isCollapsed: boolean) => {
    dispatch({ type: NAVIGATION_ACTIONS.SET_IS_COLLAPSED, payload: isCollapsed } as NAVIGATION_ACTION_TYPES);
  }

  const getListItemColor = (active: boolean) => {
    return active ? fontActiveColor : fontColor;
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const showCollapseIcon = () => {
    return (
      <Box sx={{...toggleButtonSxProps, right: isCollapsed ? '-20%' : '-5%'}}>
        <IconButton onClick={toggleCollapse} sx={{background: fontActiveColor}}>
          {isCollapsed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
        </IconButton>
      </Box>
    )
  } 

  return (
    <Container sx={{...containerSxProps, width: isCollapsed ? '5%' : '20%'}} component={"nav"}>
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
            <ListItemIcon sx={{color: getListItemColor(index === currenStep), padding: isCollapsed ? '0.5rem 1rem' : '0'}}>{option.icon}</ListItemIcon>
            {
              !isCollapsed && (
                <ListItemText
                  primary={option.text}
                  primaryTypographyProps={{
                    sx: { color: getListItemColor(index === currenStep), fontSize: 20 },
                  }}
                />
              )
            }
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
