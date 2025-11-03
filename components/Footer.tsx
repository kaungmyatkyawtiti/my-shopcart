import { categories, quickLinks } from "@/lib/data";
import FooterTop from "./FooterTop";
import MyContainer from "./MyContainer";
import MyLogo from "./MyLogo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer
      className="border-t border-border"
    >
      <MyContainer>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <MyLogo />
            <SubText>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </SubText>
            <SocialMedia />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-4 mt-4">
              {
                quickLinks.map((link, ind) =>
                  <li
                    key={ind}
                    className="text-[15px]"
                  >
                    <Link
                      href={link.href}
                      className="font-semibold text-muted-foreground hover:text-shop-violet"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-4 mt-4">
              {
                categories.map((category, ind) =>
                  <li
                    key={ind}
                    className="text-[15px]"
                  >
                    <Link
                      href={category.href}
                      className="font-semibold text-muted-foreground hover:text-shop-violet"
                    >
                      {category.name}
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive offers
            </SubText>
            <form
              className="flex gap-1 space-y-3 lg:flex-col"
            >
              <Input
                placeholder="Enter your email"
                className="rounded-sm max-w-80"
              />
              <Button
                className="bg-shop-violet hover:bg-shop-violet/80 text-white rounded-sm"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="py-6 text-center border-t border-border text-foreground/85">
          © {new Date().getFullYear()}{" "}
          <MyLogo className="text-[17px]" />. All rights reserved.
        </div>
      </MyContainer>
    </footer>
  )
}
