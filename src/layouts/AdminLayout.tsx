import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/admin/sidebar";
import Navbar from "../components/layout/admin/navbar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getScreen } from "../utils/functions";
import { SCREENS } from "../constants/breackpoints";
import Contianer from "../components/common/Container";

const AdminLayout = () => {
    const minMD: boolean = useMediaQuery(getScreen(SCREENS["2md"]));
    const [isSidebar, setIsSidebar] = useState<boolean>(minMD);

    useEffect(() => {
        setIsSidebar(minMD);
    }, [minMD]);

    return (
        <main className="flex min-h-screen">
            <Sidebar onMenu={() => setIsSidebar(false)} isSidebar={isSidebar} />
            <div className={`flex-1 transition bg-primary/5 ${isSidebar ? "md9:ps-72" : ""}`}>
                <Contianer>
                    <Navbar isSidebar={isSidebar} onMenuClick={() => setIsSidebar((prev) => !prev)} />
                    <div className="px-4 pb-4">
                        <Outlet />
                    </div>
                </Contianer>
            </div>
        </main>
    );
};

export default AdminLayout;
