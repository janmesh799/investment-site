import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
    isLoggedIn: (user ? true : false),
    user: user || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem('user')
        }
    },
    extraReducers: (builder) => {

    }
});

export const { signup, logout } = authSlice.actions;
export default authSlice.reducer;
