import { SIDE_BAR } from "@/data/SideBar";
import SidebarMenuItem from "../SidebarMenuItem";


const Sidebar = () => {
  return (
    <div className="border-r border-gray-300 w-full h-full dark:border-gray-600">
      <div className="pt-4">
        {SIDE_BAR.map((item) => {
          return (
            <div key={item.id}>
              <SidebarMenuItem title={item.title} link={item.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
