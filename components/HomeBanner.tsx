import Link from "next/link";
import { Title } from "./ui/text";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div
      className="bg-discount-blue rounded-b-lg flex flex-col-reverse md:flex-row items-center justify-between px-0 md:px-20 py-10 text-center md:text-left gap-7"
    >
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

      <div className="relative w-55 h-55">
        <Image
          src="/discount.png"
          alt="Discount"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
