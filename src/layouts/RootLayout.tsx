import Newsletter from "../components/layout/footer";
import BottomFooter from "../components/layout/footer/BottomFooter";
import Navbar from "../components/layout/navbar";
import { Outlet } from "react-router-dom";
import useInitScroll from "../hooks/useInitScroll";
import InitAlerts from "../components/initial-alerts";

const RootLayout = () => {
    useInitScroll();
    return (
        <>
            <InitAlerts />
            <Navbar />
            <Outlet />
            <Newsletter />
            <BottomFooter />
        </>
    );
};

export default RootLayout;
