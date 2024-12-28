"use client";

import CreatePost from "@/components/create-post";
import withAuth from "@/hoc/withAuth";
import { fontActiveColor, surfaceSecondary } from "@/theme/color-palette";
import { Box, Chip, Container, Grid2, Typography } from "@mui/material";
import { chipStylesSxProps } from "./profile/styles";
import InfiniteList from "@/components/infinite-list";
import { MutableRefObject, useCallback, useState } from "react";
import PreviewPost from "@/components/posts/previewPost";
import { mockPostData } from "@/utils/mockData";

const limit = 20;
const totalItems = mockPostData.length;

function Homepage() {
  const [offset, setOffset] = useState(0);

  const getItems = useCallback(() => {
    return mockPostData;
  }, [mockPostData]);

  const getRef = useCallback(
    (index: number, ref: MutableRefObject<any>) => {
      return index + limit < totalItems ? ref : null;
    },
    [totalItems]
  );

  const showHeader = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1.5rem auto",
        }}
      >
        <Box>
          <Typography variant={"h6"} color={fontActiveColor} fontWeight={600}>
            Feeds
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1.5, padding: "0.5rem" }}>
          <Chip label={"Recents"} color={"primary"} sx={chipStylesSxProps} />
          <Chip
            label={"Friends"}
            color={"primary"}
            variant={"outlined"}
            sx={chipStylesSxProps}
          />
          <Chip
            label={"Popular"}
            color={"primary"}
            variant={"outlined"}
            sx={chipStylesSxProps}
          />
        </Box>
      </Box>
    );
  };
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ height: "99vh", overflowY: "auto" }} size={8}>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: surfaceSecondary,
            }}
          >
            <CreatePost />
            {showHeader()}
          </Box>
          <InfiniteList
            updateOffset={setOffset}
            offset={offset}
            limit={limit}
            itemRenderer={(
              item: any,
              ref: MutableRefObject<any>,
              index: number
            ) => (
              <Grid2
                key={index}
                size={12}
                ref={getRef(index, ref)}
                style={{ marginBottom: "1.5rem" }}
              >
                <PreviewPost post={item} />
              </Grid2>
            )}
            getItems={getItems}
          />
        </Grid2>
        <Grid2 size={4}></Grid2>
      </Grid2>
    </Container>
  );
}

export default withAuth(Homepage);
