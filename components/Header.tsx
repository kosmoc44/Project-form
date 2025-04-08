import { UserButton } from "@clerk/nextjs";
import { Feather, Grip } from "lucide-react";
import Link from "next/link";
import IconButton from "./IconButton";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="sticky top-0 flex justify-between gap-4 px-4 py-2.5 bg-white z-50 mx-auto">
      <div className=" flex items-center space-x-2">
        <Sidebar />
        <Link href={"/"} className="flex items-center space-x-1">
          <Feather className="icon-feather w-10 h-10" />
          <p className="text-xl text-neutral-500"></p>
        </Link>
      </div>
      <div className="flex items-center md:justify-content-between md:flex-1 max-w-lg lg:max-w-4xl xl:max-w-5xl">
        {/* <Search /> */}
        <div className="flex items-center">
          <IconButton Icon={Grip} className="mr-3" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
}

export default Header;
