import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Facebook, Github, Slack, Youtube } from "lucide-react"
import Link from "next/link"

const socials = [
  {
    title: "Youtube",
    icon: <Youtube />,
    href: "",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "",
  },
  {
    title: "Github",
    icon: <Github />,
    href: "",
  },
  {
    title: "Slack",
    icon: <Slack />,
    href: "",
  },
]

export default function SocialMedia() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {
          socials.map((social, ind) =>
            <Tooltip
              key={ind}
            >
              <TooltipTrigger
                className="bg-discount-blue p-2 rounded-full border border-border text-foreground/60 hover:border-shop-violet hover:text-foreground hoverEffect"
              >
                <Link
                  href={social.href}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-discount-blue text-foreground font-medium p-2 rounded-xl border border-shop-violet mb-2">
                <p>{social.title}</p>
              </TooltipContent>
            </Tooltip>
          )
        }
      </div>
    </TooltipProvider>
  )
}
