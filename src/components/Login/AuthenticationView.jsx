import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthenticationView = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLogin = () => {
    return loggedIn;
  };
  return (
    <>
      {checkLogin ? (
        <SignUpForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      ) : (
        <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </>
  );
};

export default AuthenticationView;
