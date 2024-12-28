import React from "react";
import { Grid2 } from "@mui/material";
import PostCard from "./postCard";
import { mockPostData } from "@/utils/mockData";

export default function PostPanel() {
  return (
    <Grid2 sx={{ padding: "1rem" }} container spacing={2}>
      {[...mockPostData, ...mockPostData, ...mockPostData]?.map(
        (post, index) => {
          return (
            <Grid2 key={index} size={4}>
              <PostCard cardData={post} />
            </Grid2>
          );
        }
      )}
    </Grid2>
  );
}
