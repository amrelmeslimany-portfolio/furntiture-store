import { FiXCircle } from "react-icons/fi";
import TitleHeader from "../../../common/Titles/TitleHeader";
import { MAIN_ROUTES_ICONS, ROUTES } from "../../../../constants/routes";
import { NavbarLinkItem } from "../NavbarLinks/NavbarLinkItem";
import Avatar from "../../../common/Avatar";
import { FURNITURE_IMG1 } from "../../../../constants/images";
import { useMediaQuery } from "react-responsive";
import { getScreen } from "../../../../utils/functions";
import { SCREENS } from "../../../../constants/breackpoints";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../../../common/Button";

type PropsType = {
    onClose: () => void;
};

const DrawerContent = ({ onClose }: PropsType) => {
    const isTablet = useMediaQuery(getScreen(SCREENS.md));
    return (
        <div className="p-4 flex flex-col h-full">
            <TitleHeader title="Menu" className="mb-4">
                <button onClick={onClose}>
                    <FiXCircle className="text-primary group-hover:text-white transition text-xl" />
                </button>
            </TitleHeader>
            <hr className="border-gray-100" />
            {/* IF user */}
            <Link to={ROUTES.user.profile} className="block w-fit mx-auto text-center my-5" onClick={onClose}>
                <Avatar src={FURNITURE_IMG1} className="w-32 h-w-32 mx-auto mb-2" />
                <h5 className="font-medium text-xl capitalize">Amr Mohamed</h5>
                <small className="text-secondaryText block">emai@gmai.com</small>
            </Link>
            <hr className="border-gray-100" />
            <ul className="list-none flex flex-col mt-8 space-y-6 px-5 text-center">
                {Object.entries(ROUTES.main).map(([key, path]) => (
                    <NavbarLinkItem
                        key={key}
                        onClick={onClose}
                        Icon={!isTablet ? MAIN_ROUTES_ICONS[key.toLowerCase()] : undefined}
                        text={key}
                        to={path}
                        unactivedClassName="text-secondaryText"
                    />
                ))}
                {/* If user logged in */}
                <NavbarLinkItem
                    onClick={onClose}
                    Icon={!isTablet ? BiUser : undefined}
                    text="Profile"
                    to={ROUTES.user.profile}
                    unactivedClassName="text-secondaryText"
                />
            </ul>
            <Button className="bg-primary mt-auto block">Logout</Button>
        </div>
    );
};

export default DrawerContent;
