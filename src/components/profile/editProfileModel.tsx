import {
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  OutlinedInput,
  Grid2,
  FormLabel,
  Button,
} from "@mui/material";
import { editModalBoxSxProps, flexRowSxProps } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import { fontActiveColor } from "@/theme/color-palette";
import { useState } from "react";
import { labelSxProps } from "@/app/login/styles";
import AvatarComponent from "./avatarComponent";
import useUser from "@/hooks/useUser";

interface IProps {
  user: any;
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ user, isOpen, onClose }: IProps) => {
  const [name, setName] = useState(user?.name);
  const [headline, setHeadline] = useState(user?.headline);
  const [bio, setBio] = useState(user?.bio);
  const { updateUser, isLoadingUpdate } = useUser({ id: user.id });

  const handleUpdate = async () => {
    await updateUser({ id: user.id, name, headline, bio });
    onClose();
  };

  const firstNameField = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>
          Name <sup>*</sup>
        </FormLabel>
        <OutlinedInput value={name} onChange={(e) => setName(e.target.value)} />
      </Box>
    );
  };

  const showEmailField = () => {
    return (
      <Box sx={{ marginTop: "1rem" }}>
        <FormLabel sx={labelSxProps}>
          Email <sup>*</sup>
        </FormLabel>
        <OutlinedInput value={user?.email} disabled />
      </Box>
    );
  };

  const showHeadlineField = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>
          Headline <sup>*</sup>
        </FormLabel>
        <OutlinedInput
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </Box>
    );
  };

  const showBioField = () => {
    return (
      <Box>
        <FormLabel sx={labelSxProps}>About Me</FormLabel>
        <OutlinedInput
          value={bio}
          sx={{ padding: "1rem 2rem" }}
          onChange={(e) => setBio(e.target.value)}
          multiline
          rows={5}
        />
      </Box>
    );
  };

  const showUpdateButton = () => {
    return (
      <Box>
        <Button
          fullWidth
          variant={"contained"}
          sx={{ padding: "0.8rem" }}
          onClick={handleUpdate}
        >
          {isLoadingUpdate ? "Updating..." : "Update Profile"}
        </Button>
      </Box>
    );
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={editModalBoxSxProps}>
        <Box sx={flexRowSxProps}>
          <Typography variant="h6" color={fontActiveColor} component="h2">
            Edit Profile
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon color={"primary"} fontSize={"large"} />
          </IconButton>
        </Box>
        <Divider sx={{ margin: "1rem 0", backgroundColor: fontActiveColor }} />
        <Grid2 container spacing={2}>
          <Grid2 size={8}>
            <Grid2 size={12}>{firstNameField()}</Grid2>
            <Grid2 size={12}>{showEmailField()}</Grid2>
          </Grid2>
          <Grid2 size={4}>
            <AvatarComponent userId={user?.id} avatarLink={user?.avatar} />
          </Grid2>
          <Grid2 size={12}>{showHeadlineField()}</Grid2>
          <Grid2 size={12}>{showBioField()}</Grid2>
          <Grid2 size={12}>{showUpdateButton()}</Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
