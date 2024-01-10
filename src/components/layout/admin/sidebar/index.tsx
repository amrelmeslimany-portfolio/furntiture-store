import GlobalLogo from "../../../common/GlobalLogo";
import Link from "./Link";
import { IconType } from "react-icons";
import { ROUTES } from "../../../../constants/routes";

import {
    PiArmchair,
    PiGear,
    PiList,
    PiSignOut,
    PiSquaresFour,
    PiStar,
    PiTag,
    PiTruck,
    PiUsers,
} from "react-icons/pi";
import React from "react";
import IconCircleButton from "../../../common/Button/CircleIcon";

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
    {
        icon: PiTag,
        text: "Categories",
        to: ROUTES.admin.categories,
    },
];

type Props = { isSidebar: boolean; onMenu: () => void };

const Sidebar: React.FC<Props> = ({ isSidebar, onMenu }) => {
    return (
        <aside
            className={`
            fixed inset-y-0 left-0 w-72 bg-white flex-shrink-0 h-screen z-50 flex flex-col transform transition
            ${!isSidebar ? "-translate-x-full" : "translate-x-0"}
            `}
        >
            <IconCircleButton
                icon={<PiList className="text-gray-600 group-hover:text-white transition" />}
                className={`
                md9:hidden absolute start-[300px] top-3 bg-white w-8 h-8 group shadow
                ${!isSidebar ? "-start-10" : ""}`}
                onClick={onMenu}
            />
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
