"use client";

import CreatePost from "@/components/posts/createPost";
import PreviewPost from "@/components/posts/previewPost";
import { useAppState } from "@/store/store";
import { Grid2 } from "@mui/material";

const CreatePostPage = () => {
  const { state } = useAppState();
  const { localPost } = state;
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8}>
        <CreatePost />
      </Grid2>
      <Grid2 size={4}>
        <PreviewPost post={localPost} />
      </Grid2>
    </Grid2>
  );
};
export default CreatePostPage;
