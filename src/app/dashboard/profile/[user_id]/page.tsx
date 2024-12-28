"use client";

import React from "react";
import ConnectionsList from "@/components/profile/connectionsList";
import InfoContainer from "@/components/profile/infoContainer";
import PostsSection from "@/components/profile/postsTabs";
import { Grid2 } from "@mui/material";
import useCustomRouter from "@/router/index";
import useUser from "@/hooks/useUser";

export default function Profile() {
  const { getParams } = useCustomRouter();
  const userId = getParams("user_id");

  const { getUserDetails, isFailedToFetchUser, isLoadingUser, userFetchError } =
    useUser({ id: userId as string });

  if (isFailedToFetchUser) {
    console.error("Error fetching user:", userFetchError);
  }

  if (isLoadingUser) {
    return <div>Loading...</div>;
  }

  if (!getUserDetails) {
    return <div>User not found</div>;
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2
        size={8}
        sx={{ overflowY: "scroll", maxHeight: "95vh", overflowX: "hidden" }}
      >
        <InfoContainer isOwnProfile={true} />
        <PostsSection />
      </Grid2>
      <Grid2 size={4}>
        <ConnectionsList />
      </Grid2>
    </Grid2>
  );
}
