import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superb",
  description: "Build by fans for fans",
  icons: [
    '/assets/images/logo.png',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sevillana&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{margin: 0}}>{children}</body>
    </html>
  );
}
