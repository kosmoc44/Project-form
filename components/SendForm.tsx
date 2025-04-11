"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Send } from "lucide-react";
import IconButton from "./IconButton";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// const tabs = [
//   {
//     value: "Link",
//     icon: Link2,
//   },
// ] as const;

function SendForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <IconButton Icon={Send} className="md:hidden" />
          <Button
            variant={"brand"}
            size={"sm"}
            className="px-6 hidden md:inline"
          >
            Send
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-2">
        <DialogHeader>
          <DialogTitle className="font-normal text-2xl px-4 py-3">
            Send Form
          </DialogTitle>
          <DialogDescription
            className="text-accent-foreground flex justify-between
          items-center p-4"
          >
            Collect email addresses
            <Select defaultValue="do-not-collect">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Do not collect" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="do-not-collect">Do not collect</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="responder-input">Resonder input</SelectItem>
              </SelectContent>
            </Select>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SendForm;
