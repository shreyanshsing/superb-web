import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { fontActiveColor, fontHintColor } from "@/theme/color-palette";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";

interface IProps {
  cardData: {
    mediaUrls?: string[];
    description?: string;
    likes?: number;
    comments?: number;
    saved?: boolean;
  }
}

export default function PostCard({ cardData }: IProps) {
  const mediaUrl = cardData?.mediaUrls?.[0] ?? "";
  const description = cardData?.description;
  const likes = cardData?.likes;
  const comments = cardData?.comments;
  const isSaved = cardData?.saved;

  return (
    <Card sx={{position: "relative"}}>
      <CardMedia
        component={"img"}
        height="150"
        image={mediaUrl}
        alt={"card-image"}
      />
      {isSaved && (
        <BookmarkIcon
          sx={{
            color: fontActiveColor,
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        />
      )}
      <CardContent>
        <Typography>{description?.slice(0, 80) + "..."}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              component={"span"}
              variant={"h6"}
              sx={{
                display: "flex",
                alignItems: "center",
                color: fontActiveColor,
                marginRight: "1rem",
              }}
            >
              {likes} <FavoriteIcon sx={{ color: fontHintColor, marginLeft: "0.5rem" }} />
            </Typography>
            <Typography
              component={"span"}
              variant={"h6"}
              sx={{
                display: "flex",
                alignItems: "center",
                color: fontActiveColor,
              }}
            >
              {comments} <ChatBubbleIcon sx={{ color: fontHintColor, marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
          <IconButton>
            <MoreHoriz sx={{ color: fontActiveColor }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
