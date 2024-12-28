import React from "react";
import { Container, Grid2 } from "@mui/material";
import { page2ContainerSxProps } from "./styles";
import TileCard from "./tile-card";

const tilesContent = [
  {
    title: "JOIN CLUB",
    description: "Find your favorite club",
    image: "/assets/images/club.jpg",
  },
  {
    title: "FIND YOUR COMMUNITY",
    description: "Join the community",
    image: "/assets/images/community.jpg",
  },
  {
    title: "EXPLORE EVENTS",
    description: "Discover events",
    image: "/assets/images/events.jpg",
  },
  {
    title: "GET TO KNOW PEOPLE",
    description: "Meet new people",
    image: "/assets/images/people.jpg",
  },
  {
    title: "GET READY FOR SOME FUN",
    description: "Have fun, make memories",
    image: "/assets/images/fun.avif",
  },
];

const Page2Content = () => {
  return (
    <Container id={"page-2-container"} sx={page2ContainerSxProps}>
      <Grid2 container spacing={2}>
        {tilesContent?.map((tile) => (
          <TileCard
            key={tile.title}
            title={tile.title}
            description={tile.description}
            image={tile.image}
          />
        ))}
      </Grid2>
    </Container>
  );
};

export default Page2Content;
