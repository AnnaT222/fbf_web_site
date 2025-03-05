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
                },
                withCredentials: false, // Change to true if backend supports cookies
            }
        );

        console.log("Login successful:", response.data); // Debugging log

        const { access, refresh } = response.data;

        // Ensure tokens are stored correctly
        if (access && refresh) {
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            console.log("Tokens saved successfully.");
        } else {
            console.error("Tokens missing in response:", response.data);
        }

        return response.data; // Return tokens
    } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error);
        throw error;
    }
};
