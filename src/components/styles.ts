import colorPalette from "@/theme/color-palette";
import { SxProps } from "@mui/material";

export const registerContainerSxProps: SxProps = {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '50vh',
    padding: '2rem 1rem',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: colorPalette.bottomNavigationBar.background,
}
