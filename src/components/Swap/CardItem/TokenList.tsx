"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../../ui/button";
import { tokens } from "@/config";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ButtonTrigger from "./ButtonTrigger";
import {
  selectFirstToken,
  selectSecondToken,
  swapFirstAndSecond,
} from "@/redux/features/swap.slide";

const TokenList = (props: { isFirst: boolean }) => {
  const { firstToken, secondToken } = useAppSelector((state) => state.swap);
  const dispatch = useAppDispatch();
  const selectToken = (
    address: string,
    name: string,
    symbol: string,
    logo: string,
    balance: number
  ) => {
    // GET BALANCE
    if(address === firstToken.address || address === secondToken.address) {
      dispatch(swapFirstAndSecond())
    }
    props.isFirst
      ? dispatch(selectFirstToken({ address, name, symbol, logo, balance }))
      : dispatch(selectSecondToken({ address, name, symbol, logo, balance }));
  };

  return (
    <Dialog>
      {props.isFirst ? (
        <ButtonTrigger token={firstToken} />
      ) : (
        <ButtonTrigger token={secondToken} />
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Token list</DialogTitle>
          <DialogDescription>Choose another coin</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-3">
            {tokens.map((token) => {
              const { address, name, symbol, logo, balance } = token;
              return (
                <DialogClose asChild key={address}>
                  <Button
                    className="flex items-center justify-between bg-primary-foreground text-primary rounded-2xl px-2 shadow-sm hover:bg-popover hover:shadow-md transition-all"
                    onClick={() =>
                      selectToken(address, name, symbol, logo, balance)
                    }
                  >
                    <div className=" w-7 h-7 rounded-full shadow-sm bg-secondary/80">
                      <Image
                        src={logo}
                        alt={name}
                        height={28}
                        width={28}
                        className="w-7 h-7"
                      />
                    </div>
                    <span className="text-sm">{symbol}</span>
                  </Button>
                </DialogClose>
              );
            })}
          </div>
        </div>
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TokenList;
