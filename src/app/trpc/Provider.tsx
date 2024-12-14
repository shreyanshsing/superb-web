"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { trpc } from "@trpc-client/client";
import SuperJSON from "superjson";
import LocalStorageService from "@local-storage";

const url = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api/trpc";

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
        url: url,
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
