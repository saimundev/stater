import Link from "next/link";

type MenuItemProps = {
    title:string | undefined;
    link:string | undefined;
}

const MenuItem = ({title="",link="/"}:MenuItemProps) => {
  return (
    <div className="font-medium text-md hover:text-blue-400 cursor-pointer">
       <Link href={link}>{title}</Link>
    </div>
  )
}

export default MenuItem