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
import { useEffect, useRef, useState } from "react";
import { fontActiveColor } from "@/theme/color-palette";

const CreatePost = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [foucused, setFocused] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  useEffect(() => {
    if (inputRef.current && foucused) {
      inputRef.current.focus();
    }
  }, [foucused]);

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
    <Box sx={containerBoxProps}>
      <Box sx={inputContainerProps}>
        <Avatar sx={avatarProps} src={"/assets/images/user.png"} />
        <OutlinedInput
          inputRef={inputRef}
          placeholder="What's on your mind?"
          multiline={foucused}
          rows={foucused ? 5 : 1}
          fullWidth
          sx={{
            paddingLeft: 8,
            paddingTop: foucused ? 2 : 0,
            transition: "ease-in-out 0.2s",
          }}
          onClick={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
