import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="hover:text-shop-violet hover-effect">
        <LogIn className="h-8 w-8 rounded-full" />
      </button>
    </SignInButton>
  );
}
