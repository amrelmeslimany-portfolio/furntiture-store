import IconCircleButton from "../../../common/Button/CircleIcon";
import { PiList } from "react-icons/pi";
import Avatar from "../../../common/Avatar";
import { CHAIR_IMG1 } from "../../../../constants/images";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import React from "react";
import GlobalLogo from "../../../common/GlobalLogo";

type Props = {
    isSidebar: boolean;
    onMenuClick: () => void;
};

const Navbar: React.FC<Props> = ({ onMenuClick, isSidebar }) => {
    return (
        <div className="p-4 flex justify-between items-center gap-4">
            <div className="flex gap-2 items-center">
                {!isSidebar && <GlobalLogo imgSize={35} />}
                <IconCircleButton
                    icon={<PiList className="text-gray-600 group-hover:text-white transition" />}
                    className="w-8 h-8 group"
                    onClick={onMenuClick}
                />
            </div>

            <Link
                to={ROUTES.user.profile}
                className="flex items-center space-x-1.5 hover:bg-primary group transition p-1.5 rounded-full  max-w-[150px]"
            >
                <Avatar src={CHAIR_IMG1} className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-600 group-hover:text-white transition truncate">Amr Admin</span>
            </Link>
        </div>
    );
};

export default Navbar;
