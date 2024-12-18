"use client";

import {
  Box,
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Tab,
  Tabs,
} from "@mui/material";
import { infoContainerSxProps } from "./styled";
import {
  fontActiveColor,
  fontColor,
  tabActiveColor,
} from "@/theme/color-palette";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { mockUserData } from "@/utils/mockData";

export const activeColors = {
  color: `${fontActiveColor} !important`,
  backgroundColor: tabActiveColor,
  padding: "0.5rem",
};

export const inactiveColors = {
  color: fontColor,
  borderBottom: `1px solid ${tabActiveColor}`,
};

const ConnectionsList = () => {
  const [value, setValue] = useState(0);

  const showSearchField = () => {
    return (
      <Box sx={{ margin: "1rem" }}>
        <OutlinedInput
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          endAdornment={<SearchIcon sx={{ color: fontColor, fontSize: 25 }} />}
          placeholder={"Search here..."}
          fullWidth
        />
      </Box>
    );
  };

  const showListTile = (user: any, index: number) => {
    return (
      <ListItem key={`${user.name}-${index}`}>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemAvatar sx={{ borderRadius: "50%" }}>
          <Image
            src={user.avatar}
            style={{ borderRadius: "50%" }}
            alt={"user-avatar"}
            width={65}
            height={65}
          />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            fontSize: "1.2rem !important",
            color: fontActiveColor,
            fontWeight: 500,
            marginLeft: "1rem",
          }}
          primary={user.name}
          secondaryTypographyProps={{
            marginLeft: "1rem",
          }}
          secondary={user.title}
        />
      </ListItem>
    );
  };

  const showList = () => {
    return (
      <List sx={{ height: "70vh", overflowY: "auto", marginBottom: "2rem" }}>
        {mockUserData?.map((user, index) => showListTile(user, index))}
      </List>
    );
  };

  return (
    <Container
      maxWidth={false}
      sx={{ ...infoContainerSxProps, maxHeight: "90%", overflow: "hidden" }}
    >
      <Tabs
        onChange={(_, val) => setValue(val)}
        variant={"fullWidth"}
        sx={{ borderRadius: "20px 20px 0px 0px" }}
        value={value}
      >
        <Tab
          label={"Following"}
          sx={{
            ...(value === 0 ? activeColors : inactiveColors),
            padding: "1rem",
          }}
          value={0}
        />
        <Tab
          label={"Followers"}
          sx={value === 1 ? activeColors : inactiveColors}
          value={1}
        />
      </Tabs>
      {showSearchField()}
      {showList()}
    </Container>
  );
};

export default ConnectionsList;
