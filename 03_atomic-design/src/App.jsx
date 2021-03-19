import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
};
