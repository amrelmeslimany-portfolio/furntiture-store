import GlobalLogo from "../../../common/GlobalLogo";
import Link from "./Link";
import { IconType } from "react-icons";
import { ROUTES } from "../../../../constants/routes";

import { PiArmchair, PiGear, PiSignOut, PiSquaresFour, PiStar, PiTruck, PiUsers } from "react-icons/pi";
import React from "react";

const LINKS: { icon: IconType; text: string; to: string }[] = [
    {
        icon: PiSquaresFour,
        text: "Home",
        to: ROUTES.admin.home,
    },
    {
        icon: PiArmchair,
        text: "Products",
        to: ROUTES.admin.products,
    },
    {
        icon: PiUsers,
        text: "Users",
        to: ROUTES.admin.users,
    },
    {
        icon: PiTruck,
        text: "Orders",
        to: ROUTES.admin.orders,
    },
    {
        icon: PiStar,
        text: "Reviews",
        to: ROUTES.admin.reviews,
    },
];

type Props = { isSidebar: boolean };

const Sidebar: React.FC<Props> = ({ isSidebar }) => {
    return (
        <aside
            className={`
            fixed inset-y-0 left-0 w-72 bg-white flex-shrink-0 h-screen flex flex-col transform transition
            ${!isSidebar ? "-translate-x-full" : "translate-x-0"}
            `}
        >
            <GlobalLogo className="justify-center py-4" imgSize={50} />
            <nav className="pt-1 px-4 overflow-y-auto h-full">
                {LINKS.map((item) => (
                    <Link key={item.text} {...item} />
                ))}
            </nav>
            <div className="mt-auto px-4  pb-2">
                <hr className=" mb-2 mt-0" />
                <Link icon={PiGear} text="Settings" to={ROUTES.admin.settings} />
                <Link icon={PiSignOut} text="Logout" onClick={() => {}} />
            </div>
        </aside>
    );
};

export default Sidebar;
