import { surfaceSecondary } from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const registerContainerSxProps: SxProps = {
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
    backgroundColor: surfaceSecondary,
}

export const blurContainerSxProps: SxProps = {
    width: '100%',
    height: '100%',
    overflowY: 'auto !important',
    margin: '0',
    padding: '0rem',
    backgroundImage: ' linear-gradient(90deg, rgba(13, 13, 13,1), rgba(13, 13, 13, 1), rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.3))',
}

export const resizeContainerSxProps: SxProps = {
    padding: '1rem',
    backgroundColor: surfaceSecondary,
    transition: "width 0.3s ease-in-out",
    height: '100vh',
    overflowY: "hidden"
}