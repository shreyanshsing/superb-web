"use client";

import { Typography, Box, FormLabel, TextField, Button, InputAdornment } from "@mui/material";
import {
  buttonSxProps,
  fieldContainerSxProps,
  formContainerSxProps,
  labelSxProps,
} from "./styles";
import { fontActiveColor } from "@/components/navigation/stylesProps";
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
      </Box>
    );
  };

  const renderPasswordField = () => {
    return (
      <Box sx={fieldContainerSxProps}>
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
        {renderForgotPassword()}
      </Box>
    );
  };

  const renderLoginButton = () => {
    return (
      <Box>
        <Button
          variant="outlined"
          type="submit"
          onClick={handleLogin}
          sx={buttonSxProps}
        >
          Login
        </Button>
      </Box>
    );
  };

  const renderForgotPassword = () => {
    return (
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <Button variant={"text"} sx={{ color: fontActiveColor }}>
          Forgot Password?
        </Button>
      </Box>
    );
  };

  const renderSignupBlock = () => {
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
          Don't have an account?
        </Typography>
        <Button
          variant={"text"}
          onClick={handleSignup}
          sx={{ color: fontActiveColor }}
        >
          Sign Up
        </Button>
      </Box>
    );
  };

  return (
    <RegisterFormLayout
      formElement={
        <Box sx={formContainerSxProps}>
          <form style={{ width: "100%" }}>
            {renderEmailField()}
            {renderPasswordField()}
            {renderLoginButton()}
          </form>
        </Box>
      }
      extraElement={renderSignupBlock()}
    />
  );
}
