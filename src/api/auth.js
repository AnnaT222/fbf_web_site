import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/jwt/create/';

export const login = async (email, password) => {
    try {
        console.log("Attempting login with:", email, password); // Debugging log

        const response = await axios.post(
            API_URL,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                withCredentials: false, // Keep this false unless backend supports cookies
            }
        );

        console.log("Login successful:", response.data); // Debugging log

        const { access, refresh } = response.data;

        if (access && refresh) {
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            console.log("Tokens saved successfully.");
        } else {
            console.error("Tokens missing in response:", response.data);
            throw new Error("Authentication failed: No tokens received.");
        }

        return response.data;
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        throw error;
    }
};
