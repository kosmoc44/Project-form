import { Feather } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className=" flex items-center space-x-2">
        {/* <Sidebar /> */}
        <Link href={"/"} className="flex items-center space-x-1">
          <Feather className="icon-feather w-10 h-10"/>
          <p className="text-xl text-neutral-500"></p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
