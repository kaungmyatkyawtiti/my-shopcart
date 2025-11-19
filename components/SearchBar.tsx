// import { Search } from "lucide-react";
//
// export default function SearchBar() {
//   return (
//     <div className="">
//       <Search size={22} />
//     </div>
//   );
// }

"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command"
import { ArrowRight } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Search } from "lucide-react";
import { Kbd, KbdGroup } from "./ui/kbd";
import MyLogo from "./MyLogo"
import { Button } from "./ui/button"

const searches = [
  "The Movie",
  "The Life of a blah blah and idk",
  "killing love",
  "The sharks",
  "Doom",
  "Life of Pi",
  "Colorful house",
];

export default function SearchBar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-[13px] rounded-lg text-foreground/80 hover:text-foreground group"
        >
          <Search size={17} />
          <span>Search products</span>
          <div>
            <KbdGroup>
              <Kbd className="group-hover:text-white">CtrlK</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="p-0 shadow-lg border-0 sm:max-w-[550px] overflow-hidden rounded-xl bg-popover"
        aria-describedby={undefined}
      >
        <DialogHeader className="px-4 pt-4">
          <DialogTitle className="text-center">
            <MyLogo />
          </DialogTitle>
        </DialogHeader>

        <Command className="rounded-none bg-popover">
          <CommandInput
            placeholder="Search products..."
            className="font-medium"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup className="py-4">
              {
                searches.map((search, ind) =>
                  <CommandItem
                    key={ind} className="py-2 font-medium">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {search}
                  </CommandItem>
                )
              }
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
