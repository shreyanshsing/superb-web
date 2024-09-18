import { fontColor } from "@components/navigation/stylesProps";
import styled from "@emotion/styled";
import { Button, SxProps, TextField } from "@mui/material";


export const formContainerSxProps: SxProps = {
    padding: '1rem',
    marginTop: '2rem',
    marginLeft: '3rem',
    overflowY: 'auto !important',
}

export const fieldContainerSxProps: SxProps = {
    width: '100%',
    marginBottom: '1rem',
}

export const labelSxProps: SxProps = {
    color: fontColor,
    fontSize: '1.3rem',
    marginLeft: '0.5rem',
    fontWeight: 300,
}

export const CustomTextField = styled(TextField)`
    & .MuiInputBase-root {
        color: ${fontColor};
        border: none !important;
        background-color: #333333;
        border-radius: 20px;
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;
        font-size: 1.2rem;
    }
`;

export const CustomOutlinedButton = styled(Button)`
    border-radius: 20px;
    padding: 1rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
`;
