"use client";
import { useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import useConnectWallet from "@/hooks/useConnectWallet";

const SwapTokenButton = () => {
  const { firstToken, secondToken } = useAppSelector((state) => state.swap);
  const [address, balance] = useConnectWallet();
  return (
    <>
      {address ? (
        <>
          {firstToken.address && secondToken.address ? (
            <>
              {firstToken.amount && secondToken.amount ? (
                <Button className="rounded-xl text-xl text-white py-6 bg-pink-600 hover:bg-pink-600/90 transition-colors hover:animate-pulse">
                  <span className="font-bold">Wrap</span>
                </Button>
              ) : (
                <Button disabled={true} className="rounded-xl text-xl py-6">
                  <span className="font-bold">Enter amount token</span>
                </Button>
              )}
            </>
          ) : (
            <Button disabled={true} className="rounded-xl text-xl py-6">
              <span className="font-bold">Select a token</span>
            </Button>
          )}
        </>
      ) : (
        <Button className="rounded-xl text-xl py-6">
          <span className="font-bold">Connect Walet</span>
        </Button>
      )}
    </>
  );
};

export default SwapTokenButton;
