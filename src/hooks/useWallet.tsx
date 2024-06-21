import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { IWallet } from "@/type/wallet";
import { BrowserProvider, ethers } from "ethers";
import Uniswap from "../../contracts/Uniswap.json";
type UseWalletType = {
  wallet: IWallet | undefined;
  setWallet: Dispatch<SetStateAction<IWallet | undefined>>;
};

const useWallet = (): UseWalletType => {
  const { walletProvider } = useWeb3ModalProvider();
  const [wallet, setWallet] = useState<IWallet>();

  useEffect(() => {
    const fetchWallet = async () => {
      if (walletProvider) {
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();
        const network = ethersProvider._network.toJSON();
        const contract = new ethers.Contract(
          "0x64F12D9e31FfDb745407445E2C010F3Aa13b8f50",
          Uniswap.abi,
          signer
        );
        setWallet({ signer, address, network, contract, ethersProvider });
      }
    };
    fetchWallet();
  }, [walletProvider]);
  return { wallet, setWallet };
};

export default useWallet;
