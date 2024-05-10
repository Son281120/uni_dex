import ConnectButton from "./ConnectButton";
import ConnectWallet from "./ConnectWallet";

export default function TopBar () {
  return <div className="flex items-center justify-between px-3 py-5">
    <h1>Topbar</h1>
    <ConnectButton/>
  </div>
}