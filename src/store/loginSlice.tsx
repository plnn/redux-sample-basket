import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface IUserData {
  name: string;
  email: string;
  password: string;
}

export interface LoginState {
  userData: IUserData;
}

const initialState: LoginState = {
  userData: { name: "", password: "", email: "" },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.userData = initialState.userData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn } = loginSlice.actions;
export const { logOut } = loginSlice.actions;
export const userDataSelector = (state: RootState) => state.login.userData;

export default loginSlice.reducer;
