"use client";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { activeColors, inactiveColors } from "./connectionsList";
import { infoContainerSxProps } from "./styled";
import GridViewIcon from "@mui/icons-material/GridView";
import StyleIcon from "@mui/icons-material/Style";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PostPanel from "./postsPanel";
import { surfaceSecondary } from "@/theme/color-palette";

export default function PostsSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const statsLabel = (label: string) => {
    return (
      <Box>
        <Typography variant={"subtitle2"} sx={{ fontWeight: "400" }}>
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Container sx={infoContainerSxProps}>
      <Tabs
        onChange={(_, val) => setSelectedTab(val)}
        sx={{
          borderRadius: "20px 20px 0px 0px",
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: surfaceSecondary,
        }}
        value={selectedTab}
        variant={"fullWidth"}
      >
        <Tab
          label={statsLabel("Posts")}
          wrapped={true}
          sx={selectedTab === 0 ? activeColors : inactiveColors}
          value={0}
          icon={<GridViewIcon fontSize={"small"} />}
        />
        <Tab
          label={statsLabel("Tags")}
          sx={selectedTab === 1 ? activeColors : inactiveColors}
          value={1}
          icon={<StyleIcon fontSize={"small"} />}
        />
        <Tab
          label={statsLabel("Saved")}
          sx={selectedTab === 2 ? activeColors : inactiveColors}
          value={2}
          icon={<BookmarkIcon fontSize={"small"} />}
        />
      </Tabs>
      {selectedTab === 0 && <PostPanel />}
      {selectedTab === 1 && <h1>Tags</h1>}
      {selectedTab === 2 && <h1>Saved</h1>}
    </Container>
  );
}
