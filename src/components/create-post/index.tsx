import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  actionButtonContainerProps,
  avatarProps,
  containerBoxProps,
  emojiIconProps,
  inputContainerProps,
  textButtonProps,
} from "./styles";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import { fontActiveColor } from "@/theme/color-palette";
import CreatePostModal from "./modal";

const CreatePost = () => {
  const [foucused, setFocused] = useState(false);
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

  return (
    <Box width={"100%"} sx={containerBoxProps}>
      {foucused && (
        <CreatePostModal isOpen={foucused} onClose={() => setFocused(false)} />
      )}
      <Box sx={inputContainerProps}>
        <Avatar sx={avatarProps} src={"/assets/images/user.png"} />
        <OutlinedInput
          placeholder="What's on your mind?"
          fullWidth
          sx={{
            paddingLeft: 8,
          }}
          onClick={() => setFocused(true)}
        />
        <IconButton sx={emojiIconProps}>
          <EmojiEmotionsIcon />
        </IconButton>
      </Box>
      <Box sx={actionButtonContainerProps}>
        <Box sx={{ display: "flex", gap: 2, padding: 1, alignItems: "center" }}>
          <Button variant="text" sx={textButtonProps} startIcon={<ImageIcon />}>
            Image
          </Button>
          <Button
            variant="text"
            sx={textButtonProps}
            startIcon={<LocationOnIcon />}
          >
            Location
          </Button>
          {showSelect()}
        </Box>
        <Box>
          <Button variant="contained">Post</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatePost;
