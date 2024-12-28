import React from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import {
  headerConatinerSxProps,
  headingSxProps,
  listSxProps,
  NavLinks,
} from "./styles";

const navMenus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

interface IProps {
  backgroundColor?: string;
}

export default function HorizontalHeader({ backgroundColor }: IProps) {
  const renderNavMenus = () => {
    return navMenus?.map((menu, index) => {
      return (
        <ListItem key={index}>
          <NavLinks href={menu.link}> {menu.name} </NavLinks>
        </ListItem>
      );
    });
  };

  return (
    <Container maxWidth={false} sx={headerConatinerSxProps(backgroundColor)}>
      <Typography variant={"h4"} sx={headingSxProps}>
        {"Superb"}
      </Typography>
      <List sx={listSxProps}>{renderNavMenus()}</List>
    </Container>
  );
}
