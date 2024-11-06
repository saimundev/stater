"use client";
import { TOP_BAR } from "@/data/topBar";
import HeaderSubmenu from "./HeaderSubmenu";
import MenuItem from "./MenuItem";
import { Button } from "../ui/button";

const Header = () => {
  const handleGoLink = (link: string) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="py-4 border-b border-gray-200 bg-white/75 backdrop-blur dark:bg-black/75 dark:border-gray-600 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">LOGO</div>
        <div className="flex gap-4">
          {TOP_BAR.map((item, index) => {
            if (item.subMenu && item.subMenu.length > 0) {
              return <HeaderSubmenu key={index} />;
            }
            if (item?.icon) {
              return (
                <div
                  key={item.id}
                  className={`flex items-center ${item?.spacing ? "ml-8" : ""}`}
                  onClick={() => handleGoLink(item.link)}
                >
                  <Button variant="outline" size="icon">
                    {item.icon}
                  </Button>
                </div>
              );
            }
            return (
              <div className="flex items-center" key={item.id}>
                <div className={``}>
                  <MenuItem title={item.title} link={item.link} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
