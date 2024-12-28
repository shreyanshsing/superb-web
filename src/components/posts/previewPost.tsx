/* eslint-disable @next/next/no-img-element */
import { Box, Container, IconButton, Typography } from "@mui/material";
import { imgSxProps, previewPostContainerSxProps } from "./styles";
import { DefaultWallPaperProfile } from "@/utils/contants";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useMemo, useState } from "react";
import { fontActiveColor } from "@/theme/color-palette";

const PreviewPost = ({ post }: { post?: any }) => {
  const [showMore, setShowMore] = useState(post?.content?.length > 200);

  const isMoreThanExpected = useMemo(
    () => post?.content?.length > 200,
    [post?.content]
  );

  const getContent = useMemo(() => {
    if (showMore) {
      return post?.content;
    }
    return post?.content?.slice(0, 200);
  }, [showMore, post?.content]);

  useEffect(() => {
    setShowMore(post?.content?.length > 200);
  }, [post?.content]);

  const showHeader = () => {
    return (
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography
            variant={"body1"}
            color={fontActiveColor}
            sx={{ fontWeight: 500 }}
          >
            {"Shreyansh Singh"}
          </Typography>
          <Typography variant={"body2"}>{"2 hours ago"}</Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    );
  };

  const showImage = () => {
    return (
      <Box sx={{ padding: 0, margin: 0 }}>
        <img
          src={DefaultWallPaperProfile}
          alt={"post-image"}
          style={imgSxProps}
        />
      </Box>
    );
  };

  const showContent = () => {
    return (
      <Box>
        <Typography variant={"body2"} sx={{ padding: "1rem " }}>
          {getContent ?? "Post Content"}
          {isMoreThanExpected && !showMore && "..."}
          {isMoreThanExpected && (
            <Typography
              variant={"body2"}
              sx={{
                color: fontActiveColor,
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less" : "Read More"}
            </Typography>
          )}
        </Typography>
      </Box>
    );
  };

  const showActions = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>
        <IconButton>
          <TurnedInNotIcon />
        </IconButton>
      </Box>
    );
  };
  return (
    <Container sx={previewPostContainerSxProps}>
      {showHeader()}
      {showImage()}
      {showContent()}
      {showActions()}
    </Container>
  );
};

export default PreviewPost;
