"use client";

import {
  Typography,
  Box,
  FormLabel,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import {
  CustomOutlinedButton,
  fieldContainerSxProps,
  formContainerSxProps,
  labelSxProps,
} from "./styles";
import { fontActiveColor, fontColor } from "@/components/navigation/stylesProps";
import RegisterFormLayout from "@/components/registerFormLayout";
import { useState } from "react";
import useCustomRouter from "@/router";
import Routes from "@/router/paths";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";

export default function Login() {
  const { navigateTo } = useCustomRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password", password);
  };

  const handleSignup = () => {
    navigateTo(Routes.SIGNUP);
  };

  const renderEmailField = () => {
    return (
      <Box sx={fieldContainerSxProps}>
        <FormLabel sx={labelSxProps}>
          Email <sup>*</sup>
        </FormLabel>
        <OutlinedInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          endAdornment= {
            <InputAdornment position={"end"}>
              <EmailIcon sx={{ color: fontActiveColor }} />
            </InputAdornment>
          }
          required
        />
      </Box>
    );
  };

  const renderPasswordField = () => {
    return (
      <Box sx={fieldContainerSxProps}>
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
      </Box>
    );
  };

  const renderLoginButton = () => {
    return (
      <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: '3rem'}}>
        <CustomOutlinedButton
          variant={'outlined'}
          type="submit"
          onClick={handleLogin}
          sx={{ width: "45%", color: fontActiveColor, borderColor: fontActiveColor }}
        >
          Forgot Password
        </CustomOutlinedButton>
        <CustomOutlinedButton
          variant={'contained'}
          type="submit"
          onClick={handleLogin}
          color={'primary'}
          sx={{ width: "45%" }}
        >
          Login
        </CustomOutlinedButton>
      </Box>
    );
  };

  const renderSignupBlock = () => {
    return (
      <Box margin={'1rem auto'}>
        <Typography variant={'h5'} sx={{ color: fontColor, fontWeight: 300 }}>
          Don't have an account?
          <Button
            variant={"text"}
            onClick={handleSignup}
            sx={{ fontWeight: 400, fontSize: "1.5rem", marginLeft: "0.5rem", textTransform: 'capitalize'}}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    );
  };

  const showHeading = () => {
    return (
      <Box>
        <Typography variant={'h5'} marginBottom={'1rem'} sx={{ color: fontColor, fontWeight: 300 }} gutterBottom>
          Welcome back! <br />
        </Typography>
        <Typography variant={"h2"} letterSpacing={2} fontWeight={700} sx={{ color: fontActiveColor }} gutterBottom>
          Login here
        </Typography>
      </Box>
    )
  }

  return (
    <RegisterFormLayout
      formElement={
        <Box sx={formContainerSxProps}>
            {showHeading()}
            {renderSignupBlock()}
          <form style={{ width: "40%" }}>
            {renderEmailField()}
            {renderPasswordField()}
            {renderLoginButton()}
          </form>
        </Box>
      }
    />
  );
}
