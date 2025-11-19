import { cn } from "@/lib/utils";
import Link from "next/link";

interface MyLogoProps {
  className?: string;
  spanDesign?: string;
}

export default function MyLogo({
  className,
  spanDesign,
}: MyLogoProps) {
  return (
    <Link
      href={"/"}
      className="inline-flex"
    >
      <h2
        className={cn(
          "text-2xl font-bold uppercase group text-foreground hover:text-shop-violet hover-effect",
          className
        )}
      >
        Shopcar<span className={cn(
          "text-shop-violet group-hover:text-foreground",
          spanDesign
        )}>
          t
        </span>
      </h2>
    </Link>
  )
}
