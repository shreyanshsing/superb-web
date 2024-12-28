"use client";

import { useRouter, useParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const params = useParams();

  const navigateTo = (path: string, params?: Record<string, string>) => {
    const newPath = path + (params ? `?${new URLSearchParams(params).toString()}` : '');
    router.push(newPath);
    
  };

  const getParams = (key: string) => {
    return params[key];
  }

  const replace = (path: string, params?: Record<string, string>) => {
    const newPath = path + (params ? `?${new URLSearchParams(params).toString()}` : '');
    router.replace(newPath);
  }

  return {
    navigateTo,
    getParams,
    replace
  };
};

export default useCustomRouter;
