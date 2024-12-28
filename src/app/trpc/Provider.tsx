"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { trpc } from "@trpc-client/client";
import SuperJSON from "superjson";
import LocalStorageService from "@local-storage";

const url = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PROD_API_URL : process.env.NEXT_PUBLIC_DEV_API_URL;

export const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        transformer: SuperJSON,
        url: url!,
        headers() {
          return {
            Authorization: "Bearer " + LocalStorageService.getItem("token"),
          };
        },
      }),
    ],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
