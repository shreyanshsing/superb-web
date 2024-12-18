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
            variant={"h6"}
            color={fontActiveColor}
            sx={{ fontWeight: "bold", padding: 0, margin: 0 }}
          >
            {post?.title ?? "Post Title"}
          </Typography>
          <Typography variant={"subtitle2"}>
            {"by "}
            <strong style={{ color: fontActiveColor }}>
              {"Shreyansh Singh"}
            </strong>
          </Typography>
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

  const showCommunities = () => {
    return (
      <Box sx={{ padding: "0.5rem 1rem" }}>
        <Typography
          variant={"body2"}
          component={"a"}
          sx={{
            color: fontActiveColor,
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {post?.tags?.map((tag: any) => `#${tag.name}`).join(", ") ??
            "Community Tags"}
        </Typography>
      </Box>
    );
  };

  const showMentions = () => {
    return (
      <Box sx={{ padding: "0.5rem 1rem" }}>
        <Typography
          variant={"body2"}
          component={"a"}
          sx={{
            color: fontActiveColor,
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {post?.mentions
            ?.map((mention: any) => `@${mention.name}`)
            .join(", ") ?? "Mentioned People"}
        </Typography>
      </Box>
    );
  };

  const showContent = () => {
    return (
      <Box>
        {showCommunities()}
        {showMentions()}
        <Typography variant={"body2"} sx={{ padding: "0rem 1rem " }}>
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
