"use client";

import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

type HeaderMenuProps = {
    id:number;
    title:string;
    value:string;
}

const HeaderSubmenu = ({subMenu}:{subMenu:HeaderMenuProps[]}) => {
  const { setTheme } = useTheme()
  return (
   
    <div className="">
      <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="sm" >
        <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" >
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    </div>
  )
}

export default HeaderSubmenu