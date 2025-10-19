import Link from "next/link";
import { Title } from "./ui/text";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="bg-discount-blue rounded-b-lg flex items-center justify-between px-10 md:px-20 py-10">
      <div className="space-y-5">
        <Title>
          Discount 50% off<br />
          Selected headphone
        </Title>
        <Link
          href={"/shop"}
        >
          <Button
            className="bg-shop-violet hover:bg-shop-violet/85 text-white"
          >
            Buy now
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src="/discount.png"
          alt="Discount"
          width={180}
          height={180}
          className="hidden md:inline"
        />
      </div>
    </div>
  )
}
