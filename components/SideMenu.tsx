import { cn } from "@/lib/utils";
import MyLogo from "./MyLogo";
import { Search, X } from "lucide-react";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import SocialMedia from "./SocialMedia";
import { ModeToggle } from "./ModeToggle";
import { Kbd, KbdGroup } from "./ui/kbd";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({
  isOpen,
  onClose
}: SideMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 shadow-xl hoverEffect lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
      onClick={onClose}
    >
      <div
        className="min-w-72 max-w-96 bg-card h-screen text-foreground/85 p-5 border-r border-r-border/50 flex flex-col gap-5 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <Button
            onClick={onClose}
            title="close"
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-secondary"
          >
            <X size={18} />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <MyLogo />
          <ModeToggle />
        </div>

        <div className="flex flex-col space-y-2">
          {
            links.map((link, ind) =>
              <Link
                key={ind}
                href={link.href}
                className={cn(
                  "text-muted-foreground hover:text-shop-violet hover:bg-accent py-2 px-3 rounded-md hoverEffect font-semibold",
                  pathname === link.href && "text-shop-violet bg-accent"
                )}
              >
                {link.name}
              </Link>
            )
          }
        </div>

        <div
          className="md:hidden"
        >
          <Button
            variant="secondary"
          >
            <Search size={16} />
            <span>Search</span>
            <div>
              <KbdGroup>
                <Kbd>Shift</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
          </Button>
        </div>

        <div>
          <SocialMedia />
        </div>
      </div>
    </div >
  )
}
