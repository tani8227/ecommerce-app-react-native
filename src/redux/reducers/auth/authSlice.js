import { createSlice } from "@reduxjs/toolkit";
import firebaseUserSignUp from "./authThunks/userSignUpThunk.js";
import firebaseUserLogin from "./authThunks/userLoginThunk.js";
import getUser from "./authThunks/getUser.js";

const initialState = {
    user: null,
    isLogin: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
            state.isLogin = true;
        },
        userLogOut: (state) => {
            state.user = null;
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder


            .addCase(firebaseUserSignUp.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogin = true;
            })
            .addCase(firebaseUserSignUp.rejected, (state, action) => {
                state.error = action.payload;
                state.isLogin = false;
            })


            .addCase(firebaseUserLogin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogin = true;
            })
            .addCase(firebaseUserLogin.rejected, (state, action) => {
                state.error = action.payload;
                state.isLogin = false;
            })

            .addCase(getUser.fulfilled, (state, action) => {
                const newUser = action.payload;

                if (state.user?.uid === newUser?.uid) {
                    return;
                }

                state.user = newUser;
                state.isLogin = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.payload;
                state.isLogin = false;
            });


    },
});

export const { userLogin, userLogOut } = authSlice.actions;
export default authSlice.reducer;