import { Outlet } from "react-router-dom";
import { INTRO_AUTH_IMG } from "../constants/images";
import useInitScroll from "../hooks/useInitScroll";

const AuthLayout = () => {
    useInitScroll();
    return (
        <div className="min-h-screen flex items-center justify-center m-5 relative">
            <img src={INTRO_AUTH_IMG} alt="intro" className="fixed object-cover inset-0 w-full h-full" />
            <div className="fixed object-cover inset-0 w-full h-full backdrop-blur-[1px]" />
            <div className="p-5 xs:p-10 bg-white/80 w-full max-w-lg backdrop-blur-2xl mx-auto rounded-xl my-5">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;
