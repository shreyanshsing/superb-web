import { fontActiveColor, surfacePrimary } from "@/theme/color-palette";
import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

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

export const modalContainerProps: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
}

export const modalPaperProps: SxProps = {
    width: "100%",
    borderRadius: 5,
    backgroundColor: surfacePrimary,
}

export const dialogTitleProps: SxProps = {
    display: "flex",
    gap: 2,
    padding: "1rem 2rem",
    alignItems: "flex-start",
    justifyContent: "space-between",
}

export const dialogContentProps: SxProps = {
    padding: "0 2rem",
}

export const dialogActionsProps: SxProps = {
    padding: "1rem 2rem",
    justifyContent: "flex-end",
    borderTop: "1px solid #f0f0f0",
}