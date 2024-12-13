import { Container, Grid2 } from "@mui/material";
import { page2ContainerSxProps } from "./styles";
import TileCard from "./tile-card";
import { useEffect, useRef } from "react";

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
  }
];

const Page2Content = () => {
  const prevScrollTop = useRef(0);
  const page2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const page2Container = page2Ref.current;
      const scrollContainer = document.getElementById("homepage-container");

      if (page2Container && scrollContainer) {
        const currentScrollTop = scrollContainer.scrollTop;
        const startScrollPosition = 10; // Adjust start point for animation
        const endScrollPosition = 100; // Adjust end point for animation

        // Calculate the percentage of scroll
        const scrollRange = endScrollPosition - startScrollPosition;
        const scrollProgress = Math.min(
          Math.max(currentScrollTop - startScrollPosition, 0) / scrollRange,
          1
        );

        // Use requestAnimationFrame for smoother updates
        animationFrameId = requestAnimationFrame(() => {
          page2Container.style.transform = `translateY(${
            (1 - scrollProgress) * 50
          }%)`;
          page2Container.style.opacity = scrollProgress.toString();
        });

        // Update previous scroll position
        prevScrollTop.current = currentScrollTop;
      }
    };

    const scrollContainer = document.getElementById("homepage-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <Container
      id={"page-2-container"}
      ref={page2Ref}
      component="div"
      maxWidth={false}
      sx={{
        ...page2ContainerSxProps,
        position: "absolute",
        top: "40%", // Initial position
        transform: "translateY(90%)", // Start transform
        transition: "opacity 0.3s ease-out", // Smooth transitions for opacity only
        opacity: 0, // Start hidden
      }}
    >
      <Grid2 container spacing={1}>
        {tilesContent.map((tile) => (
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
