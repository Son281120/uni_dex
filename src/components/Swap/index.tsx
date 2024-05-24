import dynamic from 'next/dynamic'
import CardItem from "./CardItem";
import ReverseTokenButton from "./ReverseTokenButton";

const SwapTokenButton = dynamic(() => import("./SwapTokenButton"), { ssr: false })

export default function SwapTokenCard() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-86px)]">
      <div className="relative flex flex-col min-w-fit  border-2 border-secondary p-4 rounded-xl gap-2">
        <CardItem isFirst={true} />
        <ReverseTokenButton />
        <CardItem isFirst={false} />
        <SwapTokenButton/>
      </div>
    </div>
  );
}
