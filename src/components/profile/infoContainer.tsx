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

interface IProps {
  isOwnProfile: boolean;
}

const InfoContainer = ({ isOwnProfile }: IProps) => {
  const wallpaperComponent = () => {
    return (
      <Container
        maxWidth={false}
        sx={wallpaperSxProps(DefaultWallPaperProfile)}
      >
        <Box sx={iconButtonsSxProps}>
          <IconButton>
            <EditIcon
              color={"info"}
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
    )
  }

  const showActionButtons = () => {
    return (
      <Box>
        <EditProfileButton variant={"outlined"}>Edit Profile</EditProfileButton>
        <ShareButton
          variant={"contained"}
          endIcon={<ShareIcon />}
        >
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
    )
  }

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
