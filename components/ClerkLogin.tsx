"use client";

import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import SignIn from "./SignIn";
import { Skeleton } from "./ui/skeleton";

export default function ClerkLogin() {
  const { user } = useUser();

  console.log("user", user);
  return (
    <div className="h-8 w-8 flex items-center justify-center">
      <ClerkLoading>
        <Skeleton className="h-8 w-8 rounded-full" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignedIn>
          <UserButton
            fallback={<Skeleton className="h-8 w-8 rounded-full" />}
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignIn />
        </SignedOut>
      </ClerkLoaded>
    </div>
  )
}
