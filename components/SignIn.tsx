import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="hover:text-shop-violet hoverEffect">
        <LogIn size={24} />
      </button>
    </SignInButton>
  );
}
