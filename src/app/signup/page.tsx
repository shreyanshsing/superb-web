"use client";

import RegisterFormLayout from "@/components/registerFormLayout";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  Grid2,
  InputAdornment,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { CustomOutlinedButton, formContainerSxProps, labelSxProps } from "../login/styles";
import { fontActiveColor, fontColor } from "@/components/navigation/stylesProps";
import useCustomRouter from "@/router/index";
import Routes from "@/router/paths";
import { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CountryIcon from "@mui/icons-material/LocationOn";

export default function SignUp() {
  const { navigateTo } = useCustomRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [])

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
      <Grid2 size={12}>
        <FormLabel sx={labelSxProps}>
          Email <sup>*</sup>
        </FormLabel>
        <OutlinedInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <EmailIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
          required
        />
      </Grid2>
    );
  };

  const renderFullnameField = () => {
    return (
      <Grid2 size={12}>
        <FormLabel sx={labelSxProps}>
          Full Name <sup>*</sup>
        </FormLabel>
        <OutlinedInput
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <PersonIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
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
        <OutlinedInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <PasswordIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
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
        <OutlinedInput
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <PasswordIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
          required
        />
      </Grid2>
    );
  };

  const renderPhoneField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>Phone</FormLabel>
        <OutlinedInput
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <PhoneIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
        />
      </Grid2>
    );
  };

  const renderCountryField = () => {
    return (
      <Grid2 size={6}>
        <FormLabel sx={labelSxProps}>Country</FormLabel>
        <OutlinedInput
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <CountryIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
        />
      </Grid2>
    );
  };

  const renderSignupButton = () => {
    return (
      <Grid2 size={12}>
        <CustomOutlinedButton
          variant={'contained'}
          type="submit"
          onClick={handleSignup}
          sx={{
            width: "100%"
          }}
        >
          Sign Up
        </CustomOutlinedButton>
      </Grid2>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <Grid2 size={12}>
        <Typography variant={'h5'} marginBottom={'1rem'} sx={{ color: fontColor, fontWeight: 300 }} gutterBottom>
          <Checkbox size={"large"} sx={{color: fontColor}} />
          By signing up, you agree to our Terms & Conditions.{" "}
          <Button
            variant={"text"}
            onClick={handleLogin}
            sx={{ fontWeight: 400, fontSize: "1.5rem", marginLeft: "0.5rem", textTransform: 'capitalize'}}
          >
          Read More
        </Button>
        </Typography>
      </Grid2>
    );
  };

  const renderForm = () => {
    return (
      <Grid2
        container
        spacing={2}
      >
        {renderFullnameField()}
        {renderEmailField()}
        {renderPasswordField()}
        {renderConfirmPasswordField()}
        {renderPhoneField()}
        {renderCountryField()}
        {renderTermsAndConditions()}
        {renderSignupButton()}
      </Grid2>
    );
  };

  const showHeading = () => {
    return (
      <Box>
        <Typography variant={'h5'} marginBottom={'1rem'} sx={{ color: fontColor, fontWeight: 300 }} gutterBottom>
          Start for free <br />
        </Typography>
        <Typography variant={"h2"} letterSpacing={2} fontWeight={700} sx={{ color: fontActiveColor }} gutterBottom>
          Create new account
        </Typography>
      </Box>
    )
  }

  const renderLoginBlock = () => {
    return (
      <Box margin={'1rem auto'}>
        <Typography variant={'h5'} sx={{ color: fontColor, fontWeight: 300 }}>
          Already a member?
          <Button
            variant={"text"}
            onClick={handleLogin}
            sx={{ fontWeight: 400, fontSize: "1.5rem", marginLeft: "0.5rem", textTransform: 'capitalize'}}
          >
            Log In
          </Button>
        </Typography>
      </Box>
    );
  };

  return (
    <RegisterFormLayout
      formElement={
        <Box sx={formContainerSxProps}>
          {showHeading()}
          {renderLoginBlock()}
          <form style={{ width: "40%" }} ref={formRef}>
            {renderForm()}
          </form>
        </Box>
      }
    />
  );
}
