import { fontActiveColor, surfaceSecondary } from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const autoSuggestionContainerSxProps: SxProps = {
    position: "relative",
}

export const dropdownSxProps: SxProps = {
    position: "absolute",
    top: "95%",
    left: 0,
    width: "95%",
    maxHeight: "350px",
    border: `2px solid  ${fontActiveColor}`,
    borderTopWidth: 0,
    borderRadius: "4px",
    backgroundColor: surfaceSecondary,
    zIndex: 1,
    padding: "1rem",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
}

export const chipContainerSxProps = (length?: number): SxProps => ({
    width: length ? length * 100 : "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
    flexGrow: 1,
})