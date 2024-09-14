"use client";

import RegisterFormLayout from "@/components/registerFormLayout";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { buttonSxProps, labelSxProps } from "../login/styles";
import { fontActiveColor } from "@/components/navigation/stylesProps";
import useCustomRouter from "@/router/index";
import Routes from "@/router/paths";
import { useState } from "react";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CountryIcon from "@mui/icons-material/LocationOn";

export default function SignUp() {
  const { navigateTo } = useCustomRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const handleLogin = () => {
    navigateTo(Routes.LOGIN);
  };

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Password", password);
    console.log("Confirm Password", confirmPassword);
    console.log("Fullname", fullname);
    console.log("Phone", phone);
    console.log("Country", country);
  };

  const renderEmailField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>
          Email <sup>*</sup>
        </FormLabel>
        <TextField
          variant={"outlined"}
          type="email"
          margin={"dense"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <EmailIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
          required
        />
      </Grid2>
    );
  };

  const renderFullnameField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>
          Full Name <sup>*</sup>
        </FormLabel>
        <TextField
          variant={"outlined"}
          type="text"
          margin={"dense"}
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <PersonIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
          required
        />
      </Grid2>
    );
  };

  const renderPasswordField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>
          Password <sup>*</sup>
        </FormLabel>
        <TextField
          variant={"outlined"}
          type="password"
          margin={"dense"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <PasswordIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
          required
        />
      </Grid2>
    );
  };

  const renderConfirmPasswordField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>
          Confirm Password <sup>*</sup>
        </FormLabel>
        <TextField
          variant={"outlined"}
          type="password"
          margin={"dense"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <PasswordIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
          required
        />
      </Grid2>
    );
  };

  const renderPhoneField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>Phone</FormLabel>
        <TextField
          variant={"outlined"}
          type="tel"
          margin={"dense"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <PhoneIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
        />
      </Grid2>
    );
  };

  const renderCountryField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>Country</FormLabel>
        <TextField
          variant={"outlined"}
          type="text"
          margin={"dense"}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position={'end'}>
                        <CountryIcon sx={{color: fontActiveColor}} />
                    </InputAdornment>
                )
            }
          }}
          fullWidth
        />
      </Grid2>
    );
  };

  const renderSignupButton = () => {
    return (
      <Grid2 size={12}>
        <Button
          variant="outlined"
          type="submit"
          onClick={handleSignup}
          sx={buttonSxProps}
        >
          Sign Up
        </Button>
      </Grid2>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <Grid2 size={12}
       
      >
        <Typography sx={{ color: fontActiveColor }}>
            <Checkbox size={'large'} />
          By signing up, you agree to our Terms & Conditions. <Link href={'/terms'}>Click here to read more</Link>
        </Typography>
      </Grid2>
    );
  }

  const renderForm = () => {
    return (
      <Grid2
        container
        spacing={2}
        sx={{
          width: "85%",
          padding: "1rem",
          marginVertical: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {renderEmailField()}
        {renderFullnameField()}
        {renderPasswordField()}
        {renderConfirmPasswordField()}
        {renderPhoneField()}
        {renderCountryField()}
        {renderTermsAndConditions()}
        {renderSignupButton()}
      </Grid2>
    );
  };

  const renderLoginBlock = () => {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: fontActiveColor }}>
          Already have an account?
        </Typography>
        <Button
          variant={"text"}
          onClick={handleLogin}
          sx={{ color: fontActiveColor }}
        >
          Log in
        </Button>
      </Box>
    );
  };

  return (
    <RegisterFormLayout
      formElement={<form style={{ width: "100%" }}>{renderForm()}</form>}
      extraElement={renderLoginBlock()}
    />
  );
}
