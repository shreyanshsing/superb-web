import React from "react";
import { fontActiveColor } from "@/theme/color-palette";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export interface ICommunity {
  avatar?: string;
  name?: string;
  description?: string;
  members?: string[];
  id?: string;
  user?: string;
  mediaUrls?: string[];
  content?: string;
  likes?: number;
  comments?: number;
  category?: string;
}

interface IProps {
  community: ICommunity;
}

const CommunityCard = ({ community }: IProps) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: 2,
        maxWidth: "45%",
        maxHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component={"img"}
        height={"120px"}
        image={community?.avatar}
        alt={"community-image"}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          variant="body1"
          color={fontActiveColor}
          fontWeight={"bold"}
          letterSpacing={2}
        >
          {community?.name}
        </Typography>
        <Typography variant="body2">
          {community?.description?.slice(0, 80) + "..."}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", padding: "0rem 1rem" }}
      >
        <Typography variant="body2">
          Members: {community?.members?.length ?? 0}
        </Typography>
        <Button size="small">Join</Button>
      </CardActions>
    </Card>
  );
};

export default CommunityCard;
