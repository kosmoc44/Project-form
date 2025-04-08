import { cn } from "@/lib/utils";
import { FormInputIcon } from "lucide-react";

function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-bold text-xl md:text-2xl flex items-center gap-2",
        className
      )}
    >
      <FormInputIcon />
      <span>Project Forms</span>
    </div>
  );
}

export default Logo;
