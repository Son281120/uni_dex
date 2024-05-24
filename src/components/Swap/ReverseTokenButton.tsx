"use client";
import { swapFirstAndSecond } from "@/redux/features/swap.slide";
import { useAppDispatch } from "@/redux/store";
import { ArrowDown } from "lucide-react";

const ReverseTokenButton = () => {
  const dispatch = useAppDispatch();

  const swapFirstTokenAndSecondToken = () => {
    dispatch(swapFirstAndSecond());
  };
  return (
    <button
      onClick={swapFirstTokenAndSecondToken}
      className="absolute z-[4] top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary p-2 ring-4 ring-background rounded-lg"
    >
      <ArrowDown className="h-[1.2rem] w-[1.2rem]" />
    </button>
  );
};

export default ReverseTokenButton;
