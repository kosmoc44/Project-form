import { fetchMenuItems } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
// import {
//   BookMarked,
//   BookOpenText,
//   Layers,
//   SlidersHorizontal,
// } from "lucide-react";

// const iconMap = {
//   Dosc: docs,
//   Forms: froms,
//   Sheets: sheets,
//   Slider: slides,
// };

async function MenuItems() {
  const menuItems = await fetchMenuItems("sidebarpf");

  console.log(menuItems);
  

  return (
    <div className="flex flex-col border-y py-2">
      {menuItems.pages.map((page) => (
        <Button
          key={page.id}
          asChild
          variant={"ghost"}
          className="justify-start px-6 w-[95%] rounded-r-full"
        >
          <Link href={`/dashboard/${page.pageUrl}`}>
            {/* <Image 
          src={iconMap[page.localizeInfos.menuTitle as keyof typeof iconMap]}
          alt={page.localizeInfos.menuTitle}
          /> */}
            <p>{page.localizeInfos.menuTitle}</p>
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default MenuItems;
