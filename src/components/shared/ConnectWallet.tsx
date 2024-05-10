"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet() {
  const { toast } = useToast();
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const connectWallet = async () => {
    if (!connected) {
      // Connect the wallet using ethers.js
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      // Disconnect the wallet
      (window as any).ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  };
  return (
    <div className="flex items-center justify-center">
      {
        walletAddress ? 
        <p>${walletAddress}</p>
        :
        <Button
        onClick={() => {
          if ((window as any).ethereum === undefined) {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          } else {
            connectWallet();
          }
        }}
      >
        Connect
      </Button>
      }
    </div>
  );
}
