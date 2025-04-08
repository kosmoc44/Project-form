import { fetchMenuItems } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";

interface PageLocalizeInfo {
  title: string;
}

interface Page {
  id: number;
  pageUrl: string;
  localizeInfos: PageLocalizeInfo;
  attributeValues: Record<string, unknown>;
  parentId: number | null;
  position: number;
}

interface MenuItemsData {
  id: number;
  identifier: string;
  localizeInfos: {
    title: string;
  };
  pages: Page[];
}

async function MenuItems() {
  const menuItems = await fetchMenuItems("sidebarpf") as MenuItemsData;

  if (!menuItems?.pages) return null;

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
            <p>{page.localizeInfos.title}</p> 
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default MenuItems;
