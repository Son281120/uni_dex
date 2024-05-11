import Image from "next/image";
import Link from "next/link";

export default function Logo () {
  return(
    <div className="sm:block pr-8">
      <Link href={"/"}>
        <Image
          src={"/uniswap-uni-logo.svg"}
          alt="logo"
          height={40}
          width={40}
        />
      </Link>
    </div>
  )
}