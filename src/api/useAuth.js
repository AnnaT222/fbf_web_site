import { useState } from "react";
import { login, signup, logout } from "./authService";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );

  const handleLogin = async (email, password) => {
    await login(email, password);
    setIsAuthenticated(true);
  };

  const handleSignup = async (email, password, re_password) => {
    await signup(email, password, re_password);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, handleLogin, handleSignup, handleLogout };
};
