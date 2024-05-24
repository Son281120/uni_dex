import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./features/wallet.slide";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import swapReducer from "./features/swap.slide";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    swap: swapReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
