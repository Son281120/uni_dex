import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: "",
  reducers: {
    logOut: () => {
      return "";
    },
    logIn: (state, action: PayloadAction<any>) => {},
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
