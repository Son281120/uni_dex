"use client";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { getAmountIn } from "@/redux/features/swap.slide";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const InputAmount = (props: { isFirst: boolean }) => {
  const [value, setValue] = useState<string>("");
  const { firstToken, secondToken } = useAppSelector((state) => state.swap);
  const dispatch = useAppDispatch();

  const searchValue = useDebounce(value, 1000);

  useEffect(() => {
    const getAmount = (searchValue: string) => {
      dispatch(getAmountIn(+searchValue));
    };
    getAmount(searchValue);
  }, [searchValue, dispatch]);
  return (
    <Input
      className="text-4xl text-primary bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-none p-0"
      placeholder="0"
      value={props.isFirst ? firstToken.amount : secondToken.amount}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default InputAmount;
