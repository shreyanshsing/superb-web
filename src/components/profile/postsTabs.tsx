"use client";

import { Container, Tab, Tabs } from "@mui/material";
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
  return (
    <Container sx={infoContainerSxProps}>
      <Tabs
        onChange={(_, val) => setSelectedTab(val)}
        sx={{ borderRadius: "20px 20px 0px 0px", position: "sticky", top: 0, zIndex: 1, backgroundColor: surfaceSecondary }}
        value={selectedTab}
        variant={"fullWidth"}
      >
        <Tab
          label="Posts"
          sx={selectedTab === 0 ? activeColors : inactiveColors}
          value={0}
          icon={<GridViewIcon />}
        />
        <Tab
          label="Tags"
          sx={selectedTab === 1 ? activeColors : inactiveColors}
          value={1}
          icon={<StyleIcon />}
        />
        <Tab
          label="Saved"
          sx={selectedTab === 2 ? activeColors : inactiveColors}
          value={2}
          icon={<BookmarkIcon />}
        />
      </Tabs>
      {selectedTab === 0 && <PostPanel />}
      {selectedTab === 1 && <h1>Tags</h1>}
      {selectedTab === 2 && <h1>Saved</h1>}
    </Container>
  );
}
