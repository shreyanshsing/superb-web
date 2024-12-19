import { JSX, useEffect } from "react";
import { useAppState } from "@/store/store";
import useCustomRouter from "@/router";
import Paths from "@/router/paths";

const withAuth = (WrappedComponent: React.FC) => {
  const RequiresAuth = (props: JSX.IntrinsicAttributes) => {
    const { state } = useAppState();
    const { user } = state;
    const { navigateTo } = useCustomRouter();

    useEffect(() => {
      if (!user) {
        navigateTo(Paths.LOGIN);
      }
    }, [navigateTo, user]);

    return <WrappedComponent {...props} />;
  };

  RequiresAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return RequiresAuth;
};

export default withAuth;
