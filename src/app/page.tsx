"use client";

import useCustomRouter from "@/router/index";
import Routes from "@/router/paths";

export default function Home() {
  const { navigateTo } = useCustomRouter();

  const handleBtnClick = () => {
    console.log("Button Clicked");
    navigateTo(Routes.DASHBOARD);
  };

  const handleRegisterClick = (path: string) => {
    navigateTo(path);
  }

  return (
    <>
      <h1>Landing Page</h1>
      <button onClick={handleBtnClick}>Goto Dashboard</button>
      <button onClick={() => handleRegisterClick(Routes.LOGIN)}>Login</button>
      <button onClick={() => handleRegisterClick(Routes.SIGNUP)}>Register</button>
    </>
  );
}
