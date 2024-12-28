import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const carouselContainer: SxProps = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    maxHeight: "350px",
}

export const imageStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    aspectRatio: "16/9",
}

export const iconButtonContainer: SxProps = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.05), transparent), linear-gradient(to left, rgba(0,0,0,0.05), transparent)",
}