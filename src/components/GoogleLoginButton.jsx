// src/components/GoogleLoginButton.js
import React from "react";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google"; // Backend OAuth URL
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
