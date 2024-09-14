"use client";

import { useRouter, useParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const params = useParams();

  const navigateTo = (path: string, params?: any) => {
    const newPath= path + (params ? `?${new URLSearchParams(params).toString()}` : '');
    router.push(newPath);
  };

  const getParams = (key: string) => {
    return params[key];
  }

  return {
    navigateTo,
    getParams
  };
};

export default useCustomRouter;
