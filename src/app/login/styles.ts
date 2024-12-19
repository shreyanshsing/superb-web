import { fontColor } from "@components/navigation/stylesProps";
import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";


export const formContainerSxProps: SxProps = {
    width: '100%',
    height: '90vh',
    padding: '2rem 1rem',
    margin: '2rem auto',
    overflowY: 'auto !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

export const fieldContainerSxProps: SxProps = {
    width: '100%',
    marginBottom: '1rem',
}

export const labelSxProps: SxProps = {
    color: fontColor,
    fontSize: '1rem',
    marginLeft: '0.5rem',
    fontWeight: 300,
}

export const CustomOutlinedButton = styled(Button)`
    border-radius: 10px;
    padding: 0.7rem;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
`;
