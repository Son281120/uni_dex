// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { USDT_CONTRACT_ADDRESS } from "@/config";
// import { IToken } from "@/type/token";

// interface ISwapState<T> {
//   firstToken: T;
//   secondToken: T;
// }

// const initialState: ISwapState<IToken> = {
//   firstToken: {
//     address: USDT_CONTRACT_ADDRESS,
//     name: "Tether",
//     symbol: "USDT",
//     logo: "/tether-usdt-logo.svg",
//     price: "268000000000000",
//     amount: "0",
//   },
//   secondToken: {
//     address: "",
//     name: "",
//     symbol: "",
//     logo: "",
//     price: "0",
//     amount: "0",
//   },
// };

// export const swapSlide = createSlice({
//   name: "swap",
//   initialState,
//   reducers: {
//     getpriceOfToken: (state, action: PayloadAction<{ price: number }>) => {
//       state.firstToken.price = action.payload.price;
//     },
//     selectFirstToken: (state, action: PayloadAction<IToken>) => {
//       state.firstToken.address = action.payload.address;
//       state.firstToken.name = action.payload.name;
//       state.firstToken.symbol = action.payload.symbol;
//       state.firstToken.logo = action.payload.logo;
//       state.firstToken.price = action.payload.price;
//     },
//     selectSecondToken: (state, action: PayloadAction<IToken>) => {
//       state.secondToken.address = action.payload.address;
//       state.secondToken.name = action.payload.name;
//       state.secondToken.symbol = action.payload.symbol;
//       state.secondToken.logo = action.payload.logo;
//       state.secondToken.price = action.payload.price;
//     },
//     swapFirstToSecond: (state, action:PayloadAction<number>) => {
//       let tempToken : IToken = { ...state.firstToken };
//       state.firstToken = { ...state.secondToken };

//       state.secondToken.address = tempToken.address;
//       state.secondToken.name = tempToken.name;
//       state.secondToken.symbol = tempToken.symbol;
//       state.secondToken.logo = tempToken.logo;
//       state.secondToken.price = tempToken.price;
//       state.secondToken.amount = action.payload;

//     },
//     swapSecondToFirst: (state, action:PayloadAction<number>) => {
//       let tempToken : IToken = { ...state.firstToken };

//       state.firstToken.address = state.secondToken.address;
//       state.firstToken.name = state.secondToken.name;
//       state.firstToken.symbol = state.secondToken.symbol;
//       state.firstToken.logo = state.secondToken.logo;
//       state.firstToken.price = state.secondToken.price;
//       state.firstToken.amount = action.payload;

//       state.secondToken = { ...tempToken };
//     },
//     getAmountFirst: (state, action: PayloadAction<number>) => {
//       state.firstToken.amount = action.payload;
//     },
//     getAmountSecond: (state, action: PayloadAction<number>) => {
//       state.secondToken.amount = action.payload;
//     },
//   },
// });

// export const {
//   selectFirstToken,
//   selectSecondToken,
//   getpriceOfToken,
//   swapFirstToSecond,
//   swapSecondToFirst,
//   getAmountFirst,
//   getAmountSecond
// } = swapSlide.actions;

// export default swapSlide.reducer;
