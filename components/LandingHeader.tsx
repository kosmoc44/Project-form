"use client";
import {
  BriefcaseIcon,
  FormInputIcon,
  HomeIcon,
  InfoIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";

function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" w-full h-[80px] flex justify-between items-center px-4 md:px-6 bg-muted bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="font-bold text-xl md:text-2xl flex items-center">
        <FormInputIcon className=" w-6 h-6 mr-2" />
        Project Forms
      </div>

      <button
        className=" md:hidden flex items-center justify-center p-2 "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      <nav
        className={`${isMenuOpen ? "block bg-white shadow-md" : "hidden"}
        absolute top-[80px] left-0 w-full z-50 md:static md:flex md:items-center md:gap-6 md:w-auto
        `}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0">
          <li className="w-full">
            <Button variant="ghost" className="w-full md:w-auto">
              <HomeIcon /> Home
            </Button>
          </li>
          <li className="w-full">
            <Button variant="ghost" className="w-full md:w-auto">
              <InfoIcon /> About
            </Button>
          </li>
          <li className="w-full">
            <Button variant="ghost" className="w-full md:w-auto">
              <BriefcaseIcon /> Services
            </Button>
          </li>
          <li className="w-full">
            <Button variant="ghost" className="w-full md:w-auto">
              <MailIcon /> Contact
            </Button>
          </li>
          <li>
            <SignedOut>
              <Button variant="black" asChild>
                <SignInButton mode="modal" fallbackRedirectUrl="/dashboard" />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
