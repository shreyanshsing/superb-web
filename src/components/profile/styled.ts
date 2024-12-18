import { fontActiveColor, surfaceSecondary } from "@/theme/color-palette";
import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";

export const infoContainerSxProps: SxProps = {
    borderRadius: '20px',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
    width: '100%',
    margin: '1.5rem 1rem',
    padding: '0rem !important',
}

export const wallpaperSxProps = (imageUrl: string): SxProps => {
    return {
        width: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '180px',
        borderRadius: '20px 20px 0 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '0rem !important',
        margin: 0,
    }
}

export const iconButtonsSxProps: SxProps = {
    margin: '0rem',
    padding: '0rem',
    backgroundImage: 'linear-gradient(to top, rgba(13, 13, 13, 0.9), rgba(13, 13, 13, 0))',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
}

export const avatarSxProps: SxProps = {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0rem !important',
    borderRadius: '50%',
    marginTop: '-8%',
    marginLeft: '1.5rem',
    zIndex: 1,
    border: `1px solid ${surfaceSecondary}`,
}

export const numberSxProps: SxProps = {
    color: fontActiveColor,
    fontWeight: 500,
    marginRight: '0.5rem'
}

export const lastRowSxProps: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 0rem',
    paddingTop: '0rem',
    margin: "0rem 2rem",
}

export const editModalBoxSxProps: SxProps = {
    width: '40%',
    margin: 'auto',
    backgroundColor: surfaceSecondary,
    borderRadius: '20px',
    padding: '1rem 2rem',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

export const flexRowSxProps: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export const EditProfileButton = styled(Button)`
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin: 0rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${fontActiveColor} !important;
    border: 1px solid ${fontActiveColor} !important;
    text-transform: capitalize;
`;

export const ShareButton = styled(Button)`
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
`;

export const avatarContainerSxProps: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    height: '100%',
    position: 'relative',
}

export const avatarComponentSxProps: SxProps = {
    width: "100%",
    height: "100%",
}

export const avatarButtonBoxSxProps: SxProps = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '5%',
}