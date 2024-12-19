import styled from "@emotion/styled";
import { SxProps } from "@mui/material/styles";
import Image from "next/image";

export const homepageContainerSxProps: SxProps = {
    height: "100vh",
    overflowY: "auto",
    padding: "0 !important",
    backgroundImage: "url('/assets/images/wallpaper.webp')",
    backgroundSize: "cover",
}

export const contentContainerSxProps: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    height: "80vh"
}

export const contentSxProps: SxProps = {
    fontSize: "5rem",
    fontWeight: 900,
    textTransform: "uppercase",
    color: "white",
    letterSpacing: 8,
    fontFamily: "Agu Display",
    margin: "0rem",
    textShadow: "5px 5px 10px rgba(0, 0, 0, 1)"
}

export const page2ContainerSxProps: SxProps = {
    margin: "3rem auto",
    padding: "2rem",
    transition: "top 0.1s ease-in-out",
    overflow: "hidden",
}

export const descriptionSxProps: SxProps = {
    ...contentSxProps,
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "white",
    letterSpacing: 2,
    textShadow: "none",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "1rem",
    marginTop: "1rem",
    borderRadius: "1rem 1rem 0 0",
}

export const buttonContainerSxProps: SxProps = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "0 0 1rem 1rem",
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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