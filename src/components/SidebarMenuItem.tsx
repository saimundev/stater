"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarMenuItemProps = {
  title: string | undefined;
  link: string | undefined;
};

const SidebarMenuItem = ({ title, link = "" }: SidebarMenuItemProps) => {
  const pathName = usePathname();
  return (
    <div className="font-medium pt-2 border-l text-lg cursor-pointer text-black/75 hover:text-black hover:border-l hover:border-gray-400 dark:text-white/80 hover:text-black/100">
      <div className="ml-3 ">
        <Link
          href={link}
          className={cn(pathName === link ? "text-blue-500" : "")}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenuItem;
