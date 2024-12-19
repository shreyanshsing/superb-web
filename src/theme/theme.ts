'use client';

import { createTheme } from "@mui/material";
import { fontActiveColor, fontColor, surfacePrimary, surfaceSecondary } from "./color-palette";

const theme = createTheme({
    cssVariables: true,
    // colorSchemes: {
    //     light: {
    //         palette: {
    //             primary: {
    //                 main: '#3f51b5',
    //             },
    //         }
    //     },
    // },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: fontActiveColor,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: `${fontActiveColor} !important`,
                    border: 'none !important',
                    backgroundColor: surfaceSecondary,
                    borderRadius: '10px',
                    padding: '0rem 1rem',
                    marginTop: '0.5rem',
                    fontSize: '1rem',
                },
                notchedOutline: {
                    borderColor: `${fontActiveColor} !important`,
                    color: `${fontActiveColor} !important`,
                },
            },
            defaultProps: {
                fullWidth: true,
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: `${fontActiveColor} !important`,
                },
            },
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
        MuiCard: {
            styleOverrides: {
                root: {
                    color: `${fontActiveColor} !important`,
                    border: 'none !important',
                    backgroundColor: surfacePrimary,
                    borderRadius: '10px',
                },
            }
        }
    }
})

export default theme;