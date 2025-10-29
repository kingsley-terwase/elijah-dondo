import { createSlice } from "@reduxjs/toolkit";

const getValidUser = (user) => {
    try {
        if (!user || typeof user !== "object") {
            console.log("Invalid user object:", user);
            return null;
        }

        const validRoles = [1, 2, 3, 4];
        let role = user.role;

        if (typeof role === 'string') {
            role = parseInt(role, 10);
        }

        role = Number(role);

        if (!validRoles.includes(role)) {
            return null;
        }

        const validUser = {
            ...user,
            role
        };

        console.log("✅ Valid user created:", {
            id: validUser.id,
            email: validUser.email,
            role: validUser.role,
            hasToken: !!validUser.token
        });

        return validUser;
    } catch (error) {
        return null;
    }
};

const checkAuthState = () => {
    try {
        const token = localStorage.getItem("authToken");
        const userStr = localStorage.getItem("user");

        console.log("🔍 Checking auth state:", {
            hasToken: !!token,
            hasUserStr: !!userStr
        });

        if (!token || !userStr) {
            return { isAuthenticated: false, user: null };
        }

        const storedUser = JSON.parse(userStr);
        const validUser = getValidUser(storedUser);

        if (!validUser) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            return { isAuthenticated: false, user: null };
        }

        return { isAuthenticated: true, user: validUser };
    } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        return { isAuthenticated: false, user: null };
    }
};

const initialAuthState = checkAuthState();

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: initialAuthState.isAuthenticated,
        user: initialAuthState.user,
        loading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        login: (state, action) => {
            console.log("🔐 Login reducer called with:", action.payload);

            const validUser = getValidUser(action.payload);

            if (validUser) {
                console.log("✅ Login successful, updating state");

                state.isAuthenticated = true;
                state.user = validUser;
                state.loading = false;
                state.error = null;

                localStorage.setItem("user", JSON.stringify(validUser));

                if (validUser.token) {
                    localStorage.setItem("authToken", validUser.token);
                }
            } else {
                state.isAuthenticated = false;
                state.user = null;
                state.loading = false;
                state.error = "Invalid user data received";

                localStorage.removeItem("user");
                localStorage.removeItem("authToken");
            }
        },

        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = action.payload;
        },

        logout: (state) => {
            console.log("🚪 Logging out user");

            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = null;

            localStorage.removeItem("user");
            localStorage.removeItem("authToken");

            console.log("localStorage cleared");
        },

        clearError: (state) => {
            state.error = null;
        },

        refreshAuthState: (state) => {
            console.log("Refreshing auth state");
            const authState = checkAuthState();
            state.isAuthenticated = authState.isAuthenticated;
            state.user = authState.user;
        }
    },
});

export const {
    loginStart,
    login,
    loginFailure,
    logout,
    clearError,
    refreshAuthState
} = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;