"use client";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers/react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Power, Sparkle } from "lucide-react";
import { ModeToggle } from "../../ModeToggle";
import useConnectWallet from "@/hooks/useConnectWallet";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const [address, networkName] = useConnectWallet();

  return (
    <div>
      {address ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              className="rounded-xl px-2 py-1 md:px-2 md:py-4 transition-all"
            >
              <Sparkle />
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
                  className="py-1 px-2 rounded-full cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
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
        <Button onClick={() => open()} className="rounded-xl">
          Connect Wallet
        </Button>
      )}
    </div>
  );
}
