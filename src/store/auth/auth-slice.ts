import { createSlice } from "@reduxjs/toolkit";

interface AuthStateInterface {
    isAuth: boolean;
}

const initialState: AuthStateInterface = { isAuth: false };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
