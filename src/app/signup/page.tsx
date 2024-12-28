"use client";

import React from "react";
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
import {
  CustomOutlinedButton,
  formContainerSxProps,
  labelSxProps,
} from "../login/styles";
import {
  fontActiveColor,
  fontColor,
} from "@/components/navigation/stylesProps";
import useCustomRouter from "@/router/index";
import Routes from "@/router/paths";
import { FormEvent, useEffect, useMemo, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import CountryIcon from "@mui/icons-material/LocationOn";
import { trpc } from "@trpc-client/client";
import { useSnackbar } from "@/components/snackbar/Provider";
import { useAppState } from "@/store/store";
import LocalStorageService from "@/services/localStorageService";

export default function SignUp() {
  const { dispatch } = useAppState();
  const { navigateTo } = useCustomRouter();
  const { showSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const payload = useMemo(() => {
    return {
      email,
      password,
      name: fullname,
      phone,
      country,
    };
  }, [email, password, fullname, phone, country]);

  const { mutateAsync, isError, isPending, error, data } =
    trpc.createUser.useMutation();
  const { mutateAsync: loginUser, data: loginResponse } =
    trpc.session.useMutation();

  useEffect(() => {
    if (isError) {
      showSnackbar(error?.message, "error");
    }
  }, [isError]);

  useEffect(() => {
    (async () => {
      if (data) {
        dispatch({ type: "SET_USER", payload: data });
        await loginUser({ email, password });
      }
    })();
  }, [data]);

  useEffect(() => {
    if (loginResponse) {
      const token = loginResponse?.token;
      LocalStorageService.setItem("token", token);
      navigateTo(Routes.JOIN_COMMUNITY);
    }
  }, [loginResponse]);

  const handleLogin = () => {
    navigateTo(Routes.LOGIN);
  };

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      await mutateAsync(payload);
      showSnackbar("User created successfully", "success");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showSnackbar(error?.message, "error");
    }
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
          variant={"contained"}
          type="submit"
          sx={{
            width: "100%",
          }}
        >
          {isPending ? "Signing up..." : "Sign Up"}
        </CustomOutlinedButton>
      </Grid2>
    );
  };

  const renderTermsAndConditions = () => {
    return (
      <Grid2 size={12}>
        <Typography
          variant={"h6"}
          marginBottom={"1rem"}
          sx={{ color: fontColor }}
          gutterBottom
        >
          <Checkbox sx={{ color: fontColor }} />
          By signing up, you agree to our Terms & Conditions.{" "}
          <Button
            variant={"text"}
            onClick={handleLogin}
            sx={{
              fontSize: "1rem",
              marginLeft: "0.5rem",
              textTransform: "capitalize",
            }}
          >
            Read More
          </Button>
        </Typography>
      </Grid2>
    );
  };

  const renderForm = () => {
    return (
      <Grid2 container spacing={2}>
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
        <Typography variant={"h6"} sx={{ color: fontColor }} gutterBottom>
          Join us! <br />
        </Typography>
      </Box>
    );
  };

  const renderLoginBlock = () => {
    return (
      <Box margin={"1rem auto"}>
        <Typography variant={"h6"} sx={{ color: fontColor }}>
          Already a member?
          <Button
            variant={"text"}
            onClick={handleLogin}
            sx={{
              fontSize: "1rem",
              marginLeft: "0.5rem",
              textTransform: "capitalize",
            }}
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
          <form onSubmit={handleSignup} style={{ width: "70%" }}>
            {renderForm()}
          </form>
          {renderLoginBlock()}
        </Box>
      }
    />
  );
}
