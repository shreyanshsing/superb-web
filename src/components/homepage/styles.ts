import { surfaceSecondary } from "@/theme/color-palette";
import styled from "@emotion/styled";
import { SxProps } from "@mui/material/styles";
import Image from "next/image";

export const homepageContainerSxProps: SxProps = {
    backgroundColor: surfaceSecondary,
    height: "100vh",
    overflowY: "auto",
    padding: "0 !important",
    position: "relative",
}

export const contentContainerSxProps: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10rem"
}

export const contentSxProps: SxProps = {
    fontSize: "8rem",
    fontWeight: 900,
    textTransform: "uppercase",
    color: "white",
    letterSpacing: 8,
    fontFamily: "Agu Display",
    margin: "0rem",
    textShadow: "5px 5px 10px rgba(0, 0, 0, 1)"
}

export const page2ContainerSxProps: SxProps = {
    height: "fit-content",
    backgroundColor: surfaceSecondary,
    margin: 0,
    borderRadius: "2rem 2rem 0 0",
    boxShadow: "0 0 10px rgba(0, 0, 0, 1)",
    padding: "2rem",
    transition: "top 0.1s ease-in-out",
    overflow: "hidden",
}

export const tileCardSxProps: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "300px",
    maxHeight: "500px",
    justifyContent: "center",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "0 0 10px rgba(5px, 5px, 10px, 1)",
    margin: "1rem",
    transition: "transform 0.5s ease-in-out",
    textAlign: "center",
    "&:hover": {
        transform: "scale(1.1)",
    }
}

export const TileImage = styled(Image)`
    border-radius: 50%;
`

export const tileTitleSxProps: SxProps = {
    fontSize: "1.5rem",
    fontWeight: 900,
    color: "white",
    margin: "1rem",
    textTransform: "uppercase",
}