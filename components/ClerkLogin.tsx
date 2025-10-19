"use client";

import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SignIn from "./SignIn";

export default function ClerkLogin() {
  const { user } = useUser();

  console.log("user", user);
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      {
        !user && <SignIn />
      }
    </ClerkLoaded>
  )
}
