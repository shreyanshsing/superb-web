"use client";

import { Box, Container, IconButton, Typography } from "@mui/material";
import {
  avatarSxProps,
  EditProfileButton,
  iconButtonsSxProps,
  infoContainerSxProps,
  lastRowSxProps,
  numberSxProps,
  ShareButton,
  wallpaperSxProps,
} from "./styled";
import { DefaultUserAvatar, DefaultWallPaperProfile } from "@/utils/contants";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { fontActiveColor } from "@/theme/color-palette";
import ShareIcon from "@mui/icons-material/Share";
import { trpc } from "@trpc-client/client";
import { useRef } from "react";
import { useSnackbar } from "../snackbar/Provider";
interface IProps {
  isOwnProfile: boolean;
}

const InfoContainer = ({ isOwnProfile }: IProps) => {
  const {showSnackbar} = useSnackbar();
  const { mutateAsync } = trpc.uploadFile.useMutation();
  const wallpaperRef = useRef<HTMLInputElement>(null);

  const handleWallpaerUpload = async (file: File) => {
    try {
      // Step 1: Generate Presigned URL
      const payload = {
        folder: "wallpaper",
        fileName: file.name,
        fileType: file.type,
      };

      const { url } = await mutateAsync(payload);
      // Step 2: Upload File to S3
      const res = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
      if (!res.ok) {
        throw new Error(`Upload failed with status: ${res.statusText}`);
      }
      showSnackbar("Wallpaper uploaded successfully", "success");
    } catch (error) {
      showSnackbar("Error uploading wallpaper:", "error");
    }
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

  const wallpaperComponent = () => {
    return (
      <Container
        maxWidth={false}
        sx={wallpaperSxProps(DefaultWallPaperProfile)}
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

  const avatarComponent = () => {
    return (
      <Container maxWidth={false} sx={avatarSxProps}>
        <Image
          src={DefaultUserAvatar}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          width={130}
          height={130}
          alt={"user-avatar"}
        />
      </Container>
    );
  };

  const showUserDetails = () => {
    return (
      <Box sx={{ margin: "1rem 2rem" }}>
        <Typography
          sx={{ color: fontActiveColor, fontWeight: 500 }}
          variant="h4"
        >
          Jesselyn Wang
        </Typography>
        <Typography>Lead Product Designer at Apple Inc.</Typography>
        <Typography>San Francisco, California</Typography>
      </Box>
    );
  };

  const showNumbers = () => {
    return (
      <Box>
        <Typography variant={"h5"} component={"span"} sx={numberSxProps}>
          6474
        </Typography>
        <Typography component={"span"} sx={{ marginRight: "2rem" }}>
          followers
        </Typography>
        <Typography variant={"h5"} component={"span"} sx={numberSxProps}>
          500
        </Typography>
        <Typography component={"span"}>following</Typography>
      </Box>
    );
  };

  const showActionButtons = () => {
    return (
      <Box>
        <EditProfileButton variant={"outlined"}>Edit Profile</EditProfileButton>
        <ShareButton variant={"contained"} endIcon={<ShareIcon />}>
          Share
        </ShareButton>
      </Box>
    );
  };

  const showLastRow = () => {
    return (
      <Box sx={lastRowSxProps}>
        {showNumbers()}
        {isOwnProfile && showActionButtons()}
      </Box>
    );
  };

  return (
    <Container maxWidth={false} sx={infoContainerSxProps}>
      {wallpaperComponent()}
      {avatarComponent()}
      {showUserDetails()}
      {showLastRow()}
    </Container>
  );
};

export default InfoContainer;
