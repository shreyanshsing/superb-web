import { fontActiveColor, surfacePrimary } from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const containerBoxProps: SxProps = {
    backgroundColor: surfacePrimary,
    padding: 1,
    borderRadius: 5,
}

export const inputContainerProps: SxProps = {
    display: 'flex',
    gap: 2,
    position: 'relative',
    margin: "1rem"
}

export const avatarProps: SxProps = {
    position: 'absolute',
    zIndex: 1,
    top: '25%',
    left: '1%'
}

export const emojiIconProps: SxProps = {
    position: 'absolute',
    right: '1%',
    top: '25%'
}

export const textButtonProps: SxProps = {
    color: fontActiveColor,
    textTransform: "capitalize"
}

export const actionButtonContainerProps: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "0.5rem 1rem"
}