import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  dialogActionsProps,
  dialogContentProps,
  dialogTitleProps,
  modalPaperProps,
} from "./styles";
import { fontActiveColor } from "@/theme/color-palette";
import { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePostModal = ({ isOpen, onClose }: IProps) => {
  const [privacy, setPrivacy] = useState("public");

  const showSelect = () => {
    return (
      <Box sx={{ display: "flex", color: fontActiveColor, gap: 1.5 }}>
        <Box sx={{ marginTop: 1 }}>
          {privacy === "public" && <PublicIcon fontSize={"small"} />}
          {privacy === "private" && <PeopleIcon fontSize={"small"} />}
        </Box>

        <Select
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
          variant={"standard"}
          sx={{
            color: fontActiveColor,
            fontSize: "0.9rem",
            fontWeight: 500,
            marginTop: 0.5,
          }}
        >
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </Select>
      </Box>
    );
  };

  const showHeader = () => {
    return (
      <DialogTitle sx={dialogTitleProps}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar sx={{ width: 50, height: 50 }} src={""} />
          <Box>
            <Typography variant="h6" color={fontActiveColor} gutterBottom>
              {"Shreyansh Singh"}
            </Typography>
            {showSelect()}
          </Box>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    );
  };

  const showTextArea = () => {
    return (
      <DialogContent sx={{ ...dialogContentProps }}>
        <TextField
          placeholder="What's on your mind?"
          variant={"filled"}
          fullWidth
          multiline
          maxRows={7}
          slotProps={{
            input: {
              style: {
                color: fontActiveColor,
                maxHeight: 300,
                borderBottom: "none !important",
                overflowY: "auto",
              },
            },
          }}
        />
        <Box sx={{ display: "flex", gap: 1, margin: 1 }}>
          <IconButton>
            <EmojiEmotionsIcon />
          </IconButton>
          <IconButton>
            <ImageIcon />
          </IconButton>
          <IconButton>
            <LocationOnIcon />
          </IconButton>
        </Box>
      </DialogContent>
    );
  };

  const showActionButtons = () => {
    return (
      <DialogActions sx={dialogActionsProps}>
        <Button variant={"contained"}>Post</Button>
      </DialogActions>
    );
  };

  return (
    <Dialog
      open={isOpen}
      PaperProps={{ sx: modalPaperProps }}
      fullWidth={true}
      maxWidth={"md"}
    >
      {showHeader()}
      {showTextArea()}
      {showActionButtons()}
    </Dialog>
  );
};

export default CreatePostModal;
