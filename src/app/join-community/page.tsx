/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import RegisterFormLayout from "@/components/registerFormLayout";
import {
  Avatar,
  Box,
  Container,
  Divider,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { CustomOutlinedButton, formContainerSxProps } from "../login/styles";
import { useEffect, useMemo, useRef, useState } from "react";
import { fontActiveColor } from "@/theme/color-palette";
import { createCommunityBoxSxProps } from "./styles";
import { trpc } from "@trpc-client/client";
import { useSnackbar } from "@/components/snackbar/Provider";
import useImageUpload from "@/hooks/useImageUpload";
import { useAppState } from "@/store/store";
import withAuth from "@/hoc/withAuth";
import { flushSync } from "react-dom";
import SearchCommunity from "./search-community";

const JoinCommunity = () => {
  const { state } = useAppState();
  const { user } = state;
  const { showSnackbar } = useSnackbar();
  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [communityName, setCommunityName] = useState("");
  const [description, setDescription] = useState("");
  const { mutateAsync, isPending, isError } =
    trpc.createCommunity.useMutation();
  const { getSignedUrl, getPublicUrl, uploadFile } = useImageUpload();
  const [fileKey, setFileKey] = useState<string | null>(null);

  useEffect(() => {
    if (isError) {
      showSnackbar("Failed to create community", "error");
    }
  }, [isError, showSnackbar]);

  const isCreateDisabled = useMemo(() => {
    return !file || !communityName;
  }, [file, communityName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }
    const { url, key } = (await getSignedUrl("profiles", file)) as {
      url: string;
      key: string;
    };
    if (url && key) {
      await uploadFile(url, file);
      flushSync(() => {
        setFileKey(key);
      });
    }
  };

  const handleSubmit = async () => {
    try {
      await handleUpload();
      if (!fileKey) {
        return;
      }
      const publicUrl = getPublicUrl(fileKey!);
      await mutateAsync({
        name: communityName,
        description: description,
        avatar: publicUrl,
        ownerId: user?.id || "",
      });
      showSnackbar("Community created successfully", "success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      showSnackbar("Failed to create community", "error");
    } finally {
      setFile(null);
      setCommunityName("");
      setStep(1);
    }
  };

  const showSearchCommunity = () => {
    return (
      <Box sx={{ width: "70%", margin: "auto", textAlign: "center" }}>
        <SearchCommunity />
        <Divider sx={{ margin: "1.5rem 0", color: fontActiveColor }}>
          <Typography variant="h6" margin={1} gutterBottom>
            or create a new community
          </Typography>
        </Divider>
        <CustomOutlinedButton
          variant={"contained"}
          onClick={() => setStep(2)}
          sx={{ width: "50%", margin: "auto" }}
        >
          create community
        </CustomOutlinedButton>
      </Box>
    );
  };

  const showAvatar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <input
          ref={inputRef}
          onChange={handleChange}
          accept="image/*"
          style={{ display: "none" }}
          id="avatar-upload"
          type="file"
        />
        <Avatar
          onClick={() => inputRef.current?.click()}
          sx={{
            width: 120,
            height: 120,
            cursor: "pointer",
            objectFit: "cover",
          }}
          src={file ? URL.createObjectURL(file) : ""}
          variant={"rounded"}
          alt="upload here"
        />
      </Box>
    );
  };

  const showCreateCommunity = () => {
    return (
      <Box sx={createCommunityBoxSxProps}>
        <Typography variant="h6" gutterBottom>
          Create a community
        </Typography>
        {showAvatar()}
        <OutlinedInput
          placeholder="community name*"
          value={communityName}
          onChange={(e) => setCommunityName(e.target.value)}
          required
        />
        <OutlinedInput
          placeholder="community description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          sx={{ padding: "1rem 2rem" }}
          multiline={true}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CustomOutlinedButton
            variant={"outlined"}
            type="submit"
            onClick={() => setStep(1)}
            sx={{
              width: "45%",
              color: fontActiveColor,
              borderColor: fontActiveColor,
            }}
          >
            go back
          </CustomOutlinedButton>
          <CustomOutlinedButton
            variant={"contained"}
            disabled={isCreateDisabled || isPending}
            onClick={() => handleSubmit()}
            sx={{ width: "45%", margin: "auto" }}
          >
            {isPending ? "creating..." : "create"}
          </CustomOutlinedButton>
        </Box>
      </Box>
    );
  };

  return (
    <RegisterFormLayout
      formElement={
        <Container sx={formContainerSxProps}>
          {step === 1 ? showSearchCommunity() : showCreateCommunity()}
        </Container>
      }
    />
  );
};

export default withAuth(JoinCommunity);
