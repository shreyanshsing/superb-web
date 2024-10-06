"use client";

import { Alert, Snackbar } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

interface SnackbarContextProps {
  showSnackbar: (message: string, severity: string) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);
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
      <Snackbar open={open} onClose={() => setOpen(false)}>
        <Alert
          severity={severity}
          onClose={() => setOpen(false)}
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
