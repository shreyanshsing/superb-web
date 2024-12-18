import { fontActiveColor } from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const dragAndDropContainerSxProps = (isActive: boolean): SxProps => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    border: `1.5px dashed ${isActive ? "green" : fontActiveColor}`,
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'border 0.3s',
    padding: '1rem',
    margin: '0.5rem auto',
});