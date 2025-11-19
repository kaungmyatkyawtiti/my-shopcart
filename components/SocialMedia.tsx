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
    <div className="flex items-center gap-4">
      {
        socials.map((social, ind) =>
          <div
            key={ind}
            className="bg-discount-blue/90 hover:bg-discount-blue p-2 rounded-full text-foreground/60 hover:text-shop-violet hover-effect"
          >
            <Link
              href={social.href}
              target="_blank"
            >
              {social.icon}
            </Link>
          </div>
        )
      }
    </div>
  )
}
