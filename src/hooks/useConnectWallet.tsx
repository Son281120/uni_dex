import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { JsonRpcSigner } from "ethers";
import { Eip1193Provider } from "ethers";
import { BrowserProvider } from "ethers";
import { useEffect, useState } from "react";

const useConnectWallet = (): [
  address: string | undefined,
  networkName: string,
  signer: JsonRpcSigner,
  balance: bigint | undefined
] => {
  const [networkName, setNetworkName] = useState<string>("");
  const [signer, setSigner] = useState<any>();
  const [balance, setBalance] = useState<bigint>();
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId } = useWeb3ModalAccount();
  useEffect(() => {
    const getData = async () => {
      if (walletProvider) {
        const ethersProvider = new BrowserProvider(
          walletProvider as Eip1193Provider
        );
        const balance = await ethersProvider.getBalance(address as string);
        const signer = await ethersProvider.getSigner();
        const network = await ethersProvider._network;
        setBalance(balance);
        setSigner(signer);
        setNetworkName(network.name);
      }
      return;
    };
    getData();
  }, [walletProvider, chainId, address]);

  return [address, networkName, signer, balance];
};

export default useConnectWallet;
