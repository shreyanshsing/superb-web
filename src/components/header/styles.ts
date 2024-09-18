import colorPalette from "@/theme/color-palette";
import { type SxProps } from "@mui/material/styles";
import styled from "@emotion/styled";
import { fontActiveColor } from "../navigation/stylesProps";

export const headerConatinerSxProps: SxProps = {
    margin: '0',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
};

export const listSxProps: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    listStyleType: 'none',
    padding: '1rem',
    margin: '0 auto',
    color: colorPalette?.bottomNavigationBar?.fontActiveColor,
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
    color: ${colorPalette?.bottomNavigationBar?.fontColor};
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 2rem;
    &:hover {
        color: ${colorPalette?.bottomNavigationBar?.fontActiveColor};
    }
`;