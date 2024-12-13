import { Box, Grid2, Typography } from "@mui/material";
import { tileCardSxProps, TileImage, tileTitleSxProps } from "./styles";

interface TileCardProps {
  title: string;
  description: string;
  image: string;
}

const TileCard = ({ title, description, image }: TileCardProps) => {
  return (
    <Grid2 sx={{ backdropFilter: "blur(3px)" }} size="auto">
      <Box sx={tileCardSxProps}>
        <TileImage src={image} alt={title} width={100} height={100} />
        <Typography variant="h3" sx={tileTitleSxProps}>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>{description}</Typography>
      </Box>
    </Grid2>
  );
};

export default TileCard;
