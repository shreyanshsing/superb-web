import { surfacePrimary, surfaceSecondary } from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const previewPostContainerSxProps: SxProps = {
    bgcolor: surfacePrimary,
    borderRadius: "20px",
    boxShadow: 2,
    padding: "0 !important",
};

export const createPostContainerSxProps: SxProps = {
    width: "100%",
    borderRadius: "20px",
    boxShadow: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 2,
    overflowY: "auto",
}

export const headerSxProps: SxProps = {
    width: "105%",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 1,
    borderRadius: "20px 20px 0 0",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
    backgroundColor: surfaceSecondary,
    padding: 2,
}

export const imgSxProps: any = {
    width: "100%",
    height: "auto",
}