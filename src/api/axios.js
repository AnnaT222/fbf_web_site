// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000", // change if needed
//   headers: {
//     Accept: "application/json",
//   },
// });

// // attach the JWT automatically to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   console.log("Token:", token); // Debugging line to check the token value

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;




// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // make sure this matches your Django runserver
  headers: {
    Accept: "application/json",
    // Don't add Authorization here — we add it dynamically below
  },
});

// Automatically attach JWT to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
