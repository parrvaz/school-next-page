import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface AuthState {
  phoneVerifyToken?: string;
}

const initialState: AuthState = {
  phoneVerifyToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updatePhoneVerifyToken: (state, action: PayloadAction<string>) => {
      state.phoneVerifyToken = action.payload;
    },
  },
});

export const { updatePhoneVerifyToken } = authSlice.actions;

export const selectPhoneVerifyToken = (state: RootState) =>
  state.auth.phoneVerifyToken;

export default authSlice.reducer;
