import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import { iconButtonsSxProps, wallpaperSxProps } from "./styled";
import { DefaultWallPaperProfile } from "@/utils/contants";
import { useRef } from "react";
import useImageUpload from "@/hooks/useImageUpload";
import useUser from "@/hooks/useUser";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const WallpaperComponent = ({ userId }: { userId: string }) => {
  const wallpaperRef = useRef<HTMLInputElement>(null);
  const { getSignedUrl, uploadFile, getPublicUrl } = useImageUpload();
  const { getUserDetails, updateUser } = useUser({ id: userId });

  const handleWallpaerUpload = async (file: File) => {
    const folder = "wallpapers";
    const { url, key } = (await getSignedUrl(folder, file)) as {url : string, key: string};
    await uploadFile(url, file);
    const publicUrl = getPublicUrl(key);
    await updateUser({ id: userId, wallpaper: publicUrl });
  };

  const handleWallpaperChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      await handleWallpaerUpload(file);
    }
  };

  const handleEditClick = () => {
    wallpaperRef.current?.click();
  };

  return (
    <Container
      maxWidth={false}
      sx={wallpaperSxProps(
        getUserDetails?.wallpaper || DefaultWallPaperProfile
      )}
    >
      <Box sx={iconButtonsSxProps}>
        <IconButton>
          <input
            accept="image/*"
            id="wallpaper-upload"
            style={{ display: "none" }}
            type="file"
            ref={wallpaperRef}
            onChange={handleWallpaperChange}
          />
          <EditIcon
            color={"info"}
            onClick={handleEditClick}
            sx={{ fontSize: 25, marginRight: "1rem" }}
          />
        </IconButton>
        <IconButton>
          <DeleteIcon color={"warning"} sx={{ fontSize: 25 }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default WallpaperComponent;
