
import React from "react";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { carouselContainer, iconButtonContainer, imageStyle } from "./styles";
import { useState } from "react";

interface IProps {
  srcset: string[];
}

const Carousel = ({ srcset }: IProps) => {
  const totalItems = srcset.length ?? 0;
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    setCurrentItem((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentItem((prev) => (prev - 1 + totalItems) % totalItems);
  };
  return (
    <Box sx={carouselContainer}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentItem * 100}%)`,
        }}
      >
        {srcset.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            style={imageStyle}
          />
        ))}
      </Box>
      <Box sx={iconButtonContainer}>
        <IconButton onClick={handlePrev} disabled={currentItem === 0}>
          <ChevronLeftIcon fontSize={"large"} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={currentItem === totalItems - 1}
        >
          <ChevronRightIcon fontSize={"large"} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Carousel;
