'use client';

import { createTheme } from "@mui/material";
import { fontActiveColor, fontColor, surfaceSecondary } from "./color-palette";

const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#3f51b5',
                },
            }
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: `${fontActiveColor} !important`,
                    border: 'none !important',
                    backgroundColor: surfaceSecondary,
                    borderRadius: '20px',
                    padding: '0.3rem 1rem',
                    marginTop: '0.5rem',
                    fontSize: '1.2rem',
                },
            },
            defaultProps: {
                fullWidth: true,
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: fontColor,
                    fontWeight: 300,
                },
            },
            defaultProps: {
                gutterBottom: true,
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#3f51b5',
                },
            },
        },
    }
})

export default theme;