import { SxProps } from "@mui/material";

export const registerContainerSxProps: SxProps = {
    width: '100%',
    height: '100vh',
    margin: '0',
    padding: '0 !important',
    backgroundImage: 'url(/assets/images/wallpaper.webp)',
    backgroundSize: 'cover',
    overflow: 'hidden',
    scrollBehavior: 'smooth',
}

export const blurContainerSxProps: SxProps = {
    width: '100%',
    height: '100%',
    overflowY: 'auto !important',
    margin: '0',
    padding: '1rem',
    backgroundImage: ' linear-gradient(90deg, rgba(13, 13, 13,1), rgba(13, 13, 13, 1), rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.3))',
}