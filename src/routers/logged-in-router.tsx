import React from "react";
import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  return (
    <>
      <h1>Logged In</h1>
      <button onClick={() => isLoggedInVar(false)}>Log Out</button>
    </>
  );
};
