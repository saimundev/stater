import Link from "next/link";

type SidebarMenuItemProps = {
    title:string | undefined;
    link:string | undefined;
}

const SidebarMenuItem = ({title,link=""}:SidebarMenuItemProps) => {
  return (
    <div className="font-medium pt-2 border-l text-lg cursor-pointer text-black/75 hover:text-black hover:border-l hover:border-gray-400 dark:text-white/80 hover:text-white/100">
      <div className="ml-3 ">
        <Link href={link}>{title}</Link>
      </div>
    </div>
  )
}

export default SidebarMenuItem