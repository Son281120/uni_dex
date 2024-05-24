import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrowserProvider, Eip1193Provider } from "ethers";

// export const connectWallet = createAsyncThunk(
//   'account/fetchAccount',
//   async () => {
//   }
// )
export const walletSlide = createSlice({
  name: "wallet",
  initialState: {},
  reducers: {
    disconnectWallet: (state) => {
      state = {};
    },
    connectWallet: (state, action: PayloadAction<any>) => {
      state = action.payload;
    }
    
  },
});

export const { connectWallet, disconnectWallet } = walletSlide.actions;

export default walletSlide.reducer;
