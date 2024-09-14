import colorPalette from "@/theme/color-palette";
import { fontActiveColor } from "@components/navigation/stylesProps";
import { SxProps } from "@mui/material";


export const formContainerSxProps: SxProps = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    marginVertical: '1rem',
}

export const fieldContainerSxProps: SxProps = {
    width: '100%',
    marginBottom: '1rem',
}

export const labelSxProps: SxProps = {
    color: fontActiveColor,
    marginBottom: '0.1rem',
}

export const buttonSxProps: SxProps = {
    width: '100%',
    marginTop: '1rem',
    padding: '0.5rem',
    color: colorPalette.bottomNavigationBar.fontActiveColor,
    borderColor: colorPalette.bottomNavigationBar.fontActiveColor,
    '&:hover': {
        backgroundColor: colorPalette.bottomNavigationBar.fontColor,
        color: colorPalette.bottomNavigationBar.background,
    }
}
