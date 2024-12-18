"use client";

import {
  Box,
  Container,
  FormLabel,
  Grid2,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { createPostContainerSxProps, headerSxProps } from "./styles";
import { labelSxProps } from "@/app/login/styles";
import DragAndDrop from "../drag-and-drop";
import { ShareButton } from "../profile/styled";
import CreateIcon from "@mui/icons-material/Create";
import useCreatePost from "@/hooks/useCreatePost";
import AutoSuggestion from "../auto-suggestion";

const CreatePost = () => {
  const { setTitle, setContent, setMentions, setTags, setMedia } =
    useCreatePost();

  const handleDrop = (files: File[]) => {
    setMedia(files);
  };
  const showTitleField = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>Title *</FormLabel>
        <OutlinedInput
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"give your post a nice title"}
          fullWidth
        />
      </Box>
    );
  };

  const showTagCommunity = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>Tag Communities *</FormLabel>
        <AutoSuggestion
          placeholder={"tag your communities"}
          showSuggestions={true}
          callback={(tags) => setTags(tags)}
          prefix={"#"}
        />
      </Box>
    );
  };

  const showMentionPeople = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>Mention People</FormLabel>
        <AutoSuggestion
          placeholder={"tag your friends"}
          showSuggestions={true}
          callback={(tags) => setMentions(tags)}
          prefix={"@"}
        />
      </Box>
    );
  };
  const showAboutField = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>About</FormLabel>
        <OutlinedInput
          placeholder={"write something about your post"}
          sx={{ padding: "1rem 2rem" }}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          rows={7}
        />
      </Box>
    );
  };

  const showHeading = () => {
    return (
      <Box sx={headerSxProps}>
        <Typography variant={"h5"} sx={{ marginLeft: 2 }}>
          Create Post
        </Typography>
        <ShareButton variant={"contained"} endIcon={<CreateIcon />}>
          Create Post
        </ShareButton>
      </Box>
    );
  };
  return (
    <Container maxWidth={false} sx={createPostContainerSxProps}>
      {showHeading()}
      <Grid2 container spacing={2}>
        <Grid2 size={12}>{showTitleField()}</Grid2>
        <Grid2 size={12}>{showTagCommunity()}</Grid2>
        <Grid2 size={12}>{showMentionPeople()}</Grid2>
        <Grid2 size={12}>
          <FormLabel sx={labelSxProps}>Upload Images</FormLabel>
          <DragAndDrop callback={handleDrop} />
        </Grid2>
        <Grid2 size={12} sx={{ marginTop: 4 }}>
          {showAboutField()}
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default CreatePost;
