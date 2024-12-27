"use client";

import { Box, Container, Typography } from "@mui/material";
import {
  avatarSxProps,
  EditProfileButton,
  infoContainerSxProps,
  lastRowSxProps,
  numberSxProps,
  ShareButton,
} from "./styled";
import { DefaultUserAvatar } from "@/utils/contants";
import Image from "next/image";
import { fontActiveColor } from "@/theme/color-palette";
import ShareIcon from "@mui/icons-material/Share";
import useCustomRouter from "@/router";
import WallpaperComponent from "./wallpaperComponent";
import { useState } from "react";
import EditProfileModal from "./editProfileModel";
import useUser from "@/hooks/useUser";

interface IProps {
  isOwnProfile: boolean;
}

const InfoContainer = ({ isOwnProfile }: IProps) => {
  const { getParams } = useCustomRouter();
  const userId = getParams("user_id");
  const { getUserDetails } = useUser({ id: userId as string });
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const avatarComponent = () => {
    return (
      <Container maxWidth={false} sx={avatarSxProps}>
        <Image
          src={getUserDetails?.avatar || DefaultUserAvatar}
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
          variant="h5"
        >
          {getUserDetails?.name}
        </Typography>
        <Typography>{getUserDetails?.headline}</Typography>
        <Typography>{getUserDetails?.country}</Typography>
        <Box>
          <Typography sx={{ color: fontActiveColor, fontWeight: "bold" }}>
            {"About Me"}
          </Typography>
          <Typography
            variant={"body1"}
            component={"q"}
            sx={{ fontStyle: "italic" }}
          >
            {getUserDetails?.bio}
          </Typography>
        </Box>
      </Box>
    );
  };

  const showNumbers = () => {
    return (
      <Box>
        <Typography variant={"h6"} component={"span"} sx={numberSxProps}>
          {0}
        </Typography>
        <Typography component={"span"} sx={{ marginRight: "2rem" }}>
          {"follower"}
        </Typography>
        <Typography variant={"h6"} component={"span"} sx={numberSxProps}>
          {0}
        </Typography>
        <Typography component={"span"}>{"following"}</Typography>
      </Box>
    );
  };

  const showActionButtons = () => {
    return (
      <Box>
        <EditProfileButton
          variant={"outlined"}
          onClick={() => setOpenEditProfile(true)}
        >
          Edit Profile
        </EditProfileButton>
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
      <WallpaperComponent userId={userId as string} />
      {avatarComponent()}
      {showUserDetails()}
      {showLastRow()}
      <EditProfileModal
        isOpen={openEditProfile}
        onClose={() => setOpenEditProfile(false)}
        user={getUserDetails}
      />
    </Container>
  );
};

export default InfoContainer;
