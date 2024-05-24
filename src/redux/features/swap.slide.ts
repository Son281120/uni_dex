import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ETH_CONTRACT_ADDRESS } from "@/config";

interface ISwapState<T> {
  firstToken: T;
  secondToken: T;
}

const initialState: ISwapState<IToken> = {
  firstToken: {
    address: ETH_CONTRACT_ADDRESS,
    name: "SepoliaETH",
    symbol: "ETH",
    logo: "/ethereum-eth-logo.svg",
    balance: 0,
    amount: 0,
  },
  secondToken: {
    address: "",
    name: "",
    symbol: "",
    logo: "",
    balance: 0,
    amount: 0,
  },
};

export const swapSlide = createSlice({
  name: "swap",
  initialState,
  reducers: {
    getBalanceOfToken: (state, action: PayloadAction<{ balance: number }>) => {
      state.firstToken.balance = action.payload.balance;
    },
    selectFirstToken: (state, action: PayloadAction<IToken>) => {
      state.firstToken.address = action.payload.address;
      state.firstToken.name = action.payload.name;
      state.firstToken.symbol = action.payload.symbol;
      state.firstToken.logo = action.payload.logo;
      state.firstToken.balance = action.payload.balance;
    },
    selectSecondToken: (state, action: PayloadAction<IToken>) => {
      state.secondToken.address = action.payload.address;
      state.secondToken.name = action.payload.name;
      state.secondToken.symbol = action.payload.symbol;
      state.secondToken.logo = action.payload.logo;
      state.secondToken.balance = action.payload.balance;
    },
    swapFirstAndSecond: (state) => {
      let tempToken = { ...state.firstToken };
      state.firstToken = { ...state.secondToken };
      state.secondToken = { ...tempToken };
    },
    getAmountIn: (state, action: PayloadAction<number>) => {
      state.firstToken.amount = action.payload;
    },
  },
});

export const {
  selectFirstToken,
  selectSecondToken,
  getBalanceOfToken,
  swapFirstAndSecond,
  getAmountIn,
} = swapSlide.actions;

export default swapSlide.reducer;
