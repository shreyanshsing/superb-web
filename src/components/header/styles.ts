import { type SxProps } from "@mui/material/styles";
import styled from "@emotion/styled";
import { fontActiveColor, fontColor } from "@/theme/color-palette";

export const headerConatinerSxProps = (backgroundColor?: string): SxProps => ({
    margin: '0',
    height: '500',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'fixed',
    width: '100%',
    backgroundColor: backgroundColor || 'transparent',
    zIndex: 100,
});

export const listSxProps: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    padding: '1rem',
    margin: '0 auto',
    color: fontActiveColor,
};

export const headingSxProps: SxProps = {
    fontFamily: "'Sevillana', cursive",
    color: fontActiveColor,
    fontWeight: 700,
    fontStyle: "italic",
    letterSpacing: 2,
    fontSize: "3rem",
    margin: "2rem",
}

export const NavLinks = styled.a`
    color: ${fontColor};
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 2rem;
    &:hover {
        color: ${fontActiveColor};
    }
`;