import { Box, Avatar, Button } from "@mui/material";
import {
  avatarButtonBoxSxProps,
  avatarComponentSxProps,
  avatarContainerSxProps,
} from "./styled";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useRef } from "react";
import useImageUpload from "@/hooks/useImageUpload";
import useUser from "@/hooks/useUser";

const AvatarComponent = ({
  userId,
  avatarLink,
}: {
  userId: string;
  avatarLink?: string;
}) => {
  const avatarRef = useRef<HTMLInputElement>(null);
  const { getSignedUrl, uploadFile, getPublicUrl } = useImageUpload();
  const { updateUser, isLoadingUpdate } = useUser({ id: userId });

  const handleAvatarUpload = async (file: File) => {
    const folder = "profiles";
    const { url, key } = (await getSignedUrl(folder, file)) as any;
    await uploadFile(url, file);
    const publicUrl = getPublicUrl(key);
    await updateUser({ id: userId, avatar: publicUrl });
  };

  const handleButtonClick = () => {
    avatarRef.current?.click();
  };

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
      await handleAvatarUpload(file);
    }
  };
  return (
    <Box sx={avatarContainerSxProps}>
      <input
        accept="image/*"
        id="avatar-upload"
        style={{ display: "none" }}
        type="file"
        ref={avatarRef}
        onChange={handleAvatarChange}
      />
      <Avatar
        variant={"rounded"}
        src={avatarLink}
        sx={avatarComponentSxProps}
        alt={"user-avatar"}
      />
      <Box sx={avatarButtonBoxSxProps}>
        <Button onClick={handleButtonClick} endIcon={<PhotoCameraIcon />}>
          {isLoadingUpdate ? "Uploading..." : "Change Avatar"}
        </Button>
      </Box>
    </Box>
  );
};

export default AvatarComponent;
