import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SubText } from "./ui/text";

interface Contacts {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

const contacts: Contacts[] = [
  {
    icon: <MapPin />,
    title: "Visit Us",
    subTitle: "Yangon: Insein"
  },
  {
    icon: <Phone />,
    title: "Call Us",
    subTitle: "09 787 484 437"
  },
  {
    icon: <Clock />,
    title: "Working Hours",
    subTitle: "Mon - Sat: 9:00 AM - 6:00 PM"
  },
  {
    icon: <Mail />,
    title: "Email Us",
    subTitle: "kmktiti2003@gmail.com"
  },
]

export default function FooterTop() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 border-b border-border"
    >
      {
        contacts.map((contact, ind) =>
          <div
            key={ind}
            className="flex items-center gap-5 group hover:bg-secondary hoverEffect p-4"
          >
            {contact.icon}
            <div className="font-semibold">
              <h3 className="text-foreground/85 group-hover:text-foreground">{contact.title}</h3>
              <SubText
                className="group-hover:text-foreground/70"
              >
                {contact.subTitle}
              </SubText>
            </div>
          </div>
        )
      }
    </div>
  )
}
