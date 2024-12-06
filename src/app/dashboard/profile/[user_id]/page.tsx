'use client';

import { trpc } from "@trpc-client/client";
import ConnectionsList from "@/components/profile/connectionsList";
import InfoContainer from "@/components/profile/infoContainer";
import PostsSection from "@/components/profile/postsTabs";
import { Grid2 } from "@mui/material";
import useCustomRouter from "@/router/index";

export default function Profile() {
  const { getParams } = useCustomRouter();
  const userId = getParams("user_id");

  const { data, isError, error, isFetching } = trpc.getUserById.useQuery(`${userId}`);

  if (isError) {
    console.error(error);
  }

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
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
