import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/admin/sidebar";
import Navbar from "../components/layout/admin/navbar";
import { useState } from "react";

const AdminLayout = () => {
    const [isSidebar, setIsSidebar] = useState<boolean>(true);
    return (
        <main className="flex min-h-screen">
            <Sidebar isSidebar={isSidebar} />
            <div className={`flex-1 transition bg-primary/5 ${isSidebar ? "ps-72" : ""}`}>
                <Navbar isSidebar={isSidebar} onMenuClick={() => setIsSidebar((prev) => !prev)} />
                <div className="px-4 pb-4">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default AdminLayout;
