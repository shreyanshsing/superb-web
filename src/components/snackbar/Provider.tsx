"use client";

import { Alert, Snackbar } from "@mui/material";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SnackbarContextProps {
  showSnackbar: (message: string, severity: string) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const showSnackbar = (message: string, severity: string) => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity as "success" | "error" | "warning" | "info");
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };
  return (
    <SnackbarContext.Provider value={{ showSnackbar, closeSnackbar }}>
      {children}
      <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={3000}>
        <Alert
          severity={severity}
          onClose={closeSnackbar}
          variant={"filled"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export { SnackbarProvider, useSnackbar };
