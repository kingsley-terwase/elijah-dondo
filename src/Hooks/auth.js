import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../Store/Slice/authSlice";
import { toastErr, toastInfo, toastSuccess } from "../Utilities/alertServices";
import axiosInstance from "../Utilities";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            console.log("Sending login request with:", { email });

            const response = await axiosInstance.post(`/login`, {
                email,
                password
            });

            console.log("Login response received:", response.data);

            const { token, data: user, message, success, ...otherData } = response.data;

            if (!token) {
                throw new Error("No token received from server");
            }

            if (!user) {
                throw new Error("No user data received from server");
            }

            const userData = {
                ...user,
                token,
            };

            dispatch(loginAction(userData));
            setLoading(false);
            navigate("/dashboard");

            return response.data;
        } catch (err) {
            console.error("Error during login:", {
                message: err.message,
                response: err.response?.data,
                status: err.response?.status
            });

            const errorMessage = err.response?.data?.message || err.message || "Login failed. Please try again.";

            setLoading(false);
            setError(errorMessage);
            toastErr(errorMessage);

            throw err;
        }
    };

    return { login, loading, error };
};
