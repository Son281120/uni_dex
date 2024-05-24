import { Input } from "../../ui/input";
import InputAmount from "./InputAmount";
import TokenList from "./TokenList";

type CardItemProp = {
  isFirst: boolean;
};


const CardItem = (props: CardItemProp) => {
  const { isFirst } = props;
  return (
    <div className="flex flex-col justify-between w-[480px] min-h-24 rounded-xl p-4 bg-secondary">
      <span className="text-left text-primary/60 text-sm pb-2">
        {isFirst ? "You pay" : "You receive"}
      </span>
      <div className="flex items-center">
        <InputAmount isFirst={isFirst}/>
        <TokenList isFirst={isFirst} />
      </div>
      <span className="text-right text-primary/60 text-sm pt-2">
        Balance: 0
      </span>
      {/* {isFirst ? <Button variant={"link"}>Max</Button>: <></>} */}
    </div>
  );
};

export default CardItem;
