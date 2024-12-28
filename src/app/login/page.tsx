/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import React from "react";
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
import {
  fontActiveColor,
  fontColor,
} from "@/components/navigation/stylesProps";
import RegisterFormLayout from "@/components/registerFormLayout";
import { useEffect, useState } from "react";
import useCustomRouter from "@/router";
import Routes from "@/router/paths";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Lock";
import { trpc } from "@trpc-client/client";
import { useSnackbar } from "@/components/snackbar/Provider";
import LocalStorageService from "@local-storage";
import { useAppState } from "@/store/store";
import { USER_ACTIONS } from "@/store/actions";

export default function Login() {
  const { navigateTo } = useCustomRouter();
  const { showSnackbar } = useSnackbar();
  const dispatch = useAppState().dispatch;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isError, error, data, isSuccess } =
    trpc.session.useMutation();

  const {
    data: userCommunities,
    isError: isFailedToGetCommunities,
    error: getCommunitiesError,
    isFetching: isFetchingCommunities,
  } = trpc.getUserCommunities.useQuery(
    { id: data?.user?.id! },
    { enabled: isSuccess }
  );

  useEffect(() => {
    if (isFailedToGetCommunities) {
      showSnackbar(
        getCommunitiesError?.message ?? "Error fetching user communities",
        "error"
      );
    }
  }, [isFailedToGetCommunities, getCommunitiesError]);

  useEffect(() => {
    if (isSuccess && !isFetchingCommunities) {
      if (userCommunities && userCommunities.length > 0) {
        navigateTo(Routes.DASHBOARD);
      } else {
        navigateTo(Routes.JOIN_COMMUNITY);
      }
    }
  }, [userCommunities, isSuccess]);

  useEffect(() => {
    if (isError) {
      showSnackbar(error?.message ?? "Error logging in", "error");
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      const token = data?.token;
      LocalStorageService.setItem("token", token);
      showSnackbar("Login Successful", "success");
      dispatch({
        type: USER_ACTIONS.SET_USER,
        payload: data?.user,
      });
    }
  }, [isSuccess, data]);

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const payload = {
        email,
        password,
      };
      await mutateAsync(payload);
    } catch (error: any) {
      console.log(error);
      showSnackbar(error?.message ?? "Error logging in", "error");
    }
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
          endAdornment={
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <CustomOutlinedButton
          variant={"outlined"}
          type="submit"
          onClick={handleLogin}
          sx={{
            width: "45%",
            color: fontActiveColor,
            borderColor: fontActiveColor,
          }}
        >
          Forgot Password
        </CustomOutlinedButton>
        <CustomOutlinedButton
          variant={"contained"}
          type="submit"
          onClick={handleLogin}
          color={"primary"}
          sx={{ width: "45%" }}
        >
          Login
        </CustomOutlinedButton>
      </Box>
    );
  };

  const renderSignupBlock = () => {
    return (
      <Box margin={"2rem auto"}>
        <Typography variant={"h6"} sx={{ color: fontColor, fontWeight: 300 }}>
          Don&apos;t have an account?
          <Button
            variant={"text"}
            onClick={handleSignup}
            sx={{
              fontWeight: 400,
              fontSize: "1.2rem",
              marginLeft: "0.5rem",
              textTransform: "capitalize",
            }}
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
        <Typography
          variant={"h6"}
          marginBottom={"1rem"}
          sx={{ color: fontColor }}
          textAlign={"center"}
          gutterBottom
        >
          Welcome back! <br />
        </Typography>
      </Box>
    );
  };

  return (
    <RegisterFormLayout
      formElement={
        <Box sx={formContainerSxProps}>
          {showHeading()}
          <form style={{ width: "70%" }}>
            {renderEmailField()}
            {renderPasswordField()}
            {renderLoginButton()}
          </form>
          {renderSignupBlock()}
        </Box>
      }
    />
  );
}
