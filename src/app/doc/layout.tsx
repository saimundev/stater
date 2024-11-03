import Sidebar from "@/components/shared/Sidebar";
import { SIDEBAR_WIDTH } from "@/constant/constant";

type DocLayoutProps = {
    children:React.ReactNode;
}

const DocLayout = ({children}:DocLayoutProps) => {
  return (
    <div className="flex">
            <div style={{width:SIDEBAR_WIDTH}} className="h-[calc(100vh-74px)] sticky top-[74px] overflow-hidden ">
                <Sidebar/>
            </div>
            <div className="w-full p-2 overflow-hidden ">
                {children}
            </div>
    </div>
  )
}

export default DocLayout