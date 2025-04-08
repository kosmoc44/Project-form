import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import IconButton from "./IconButton";
  import { Menu } from "lucide-react";
  import Link from "next/link";
  import Logo from "./Logo";
  import MenuItems from "./MenuItems";
import { DialogTitle } from "@radix-ui/react-dialog";

  
  function Sidebar() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <IconButton Icon={Menu} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="sm:max-w-xs flex flex-col justify-between px-0"
        >
          <SheetHeader>
            <Logo className="px-5 pb-3 text-lg md:text-xl" />
            <MenuItems />
          </SheetHeader>
          <SheetFooter
            className="text-xs flex flex-row space-x-2 items-center justify-center sm:justify-center text-muted-foreground"
          >
            <DialogTitle>
              <Link href={"#"}>Privacy Policy</Link>
            </DialogTitle>
            <span>•</span>
            <DialogTitle>
              <Link href={"#"}>Terms of Service</Link>
            </DialogTitle>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
  
  export default Sidebar;
