
import React from "react";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import imgSrc from "@assets/images/404.png";

export default function NotFound() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Image src={imgSrc} alt="404" width={100} height={100} />
      <Typography variant={"h3"} gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant={"body1"} gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Link href="/">Back to home</Link>
    </Container>
  );
}
