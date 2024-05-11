"use client";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers/react";
import { Button } from "../../ui/button";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Power, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "../../ModeToggle";

export default function ConnectButton() {
  const [networkName, setNetworkName] = useState<string>("");
  const { open } = useWeb3Modal();
  const { walletProvider } = useWeb3ModalProvider();
  const { address,chainId, isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const getData = async () => {
      if (walletProvider) {
        const ethersProvider = new BrowserProvider(walletProvider as any);
        const balance = await ethersProvider.getBalance(address as string);
        const network = await ethersProvider._network;
        setNetworkName(network.name);
      }
      return;
    };
    getData();
  }, [walletProvider, chainId, address]);

  return (
    <div>
      {isConnected ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} className="rounded-xl px-2 py-1 md:px-2 md:py-4 transition-all">
              <Sparkle/>
              <span className="hidden md:block px-2 bg-gradient-to-br from-red-500 to-blue-500 text-transparent  bg-clip-text ">
                {address?.slice(0, 6) +
                  "..." +
                  address?.slice(address.length - 5, address.length)}
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit</SheetTitle>
            </SheetHeader>
            <div className="flex items-center justify-between my-2">
              <Button variant={"outline"} className="rounded-xl">
                <Sparkle className="rotate-2" />
                <span className="inline-block px-2 bg-gradient-to-br from-red-500 to-blue-500 text-transparent  bg-clip-text">
                  {address?.slice(0, 6) +
                    "..." +
                    address?.slice(address.length - 5, address.length)}
                </span>
              </Button>
              <Button
                onClick={() => open({ view: "Networks" })}
                className="rounded-full"
              >
                {networkName}
              </Button>
            </div>
            <div>
              <ModeToggle />
              <SheetClose>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="py-1 px-2 rounded-full cursor-pointer"
                  onClick={() => disconnect()}
                >
                  <Power className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </SheetClose>
            </div>

            {/* <Button onClick={getBalance}>get balane</Button> */}
          </SheetContent>
        </Sheet>
      ) : (
        <Button onClick={() => open()} className="rounded-xl">Connect Wallet</Button>
      )}
    </div>
  );
}
