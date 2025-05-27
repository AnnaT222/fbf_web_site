import api from "./axios";

export const login = async (email, password) => {
  const response = await api.post("/api/auth/jwt/create/", {
    email,
    password,
  });

  const { access, refresh } = response.data;
  localStorage.setItem("accessToken", access);
  localStorage.setItem("refreshToken", refresh);
  return response.data;
};

export const signup = async (email, password, re_password) => {
  const response = await api.post("/api/auth/users/", {
    email,
    password,
    re_password,
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
