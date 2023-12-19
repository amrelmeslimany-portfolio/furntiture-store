import { BiMenu, BiSolidCart, BiSolidHeart, BiSolidHome } from "react-icons/bi";
import { NavLink, NavLinkProps } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { IconType } from "react-icons";
import { useState } from "react";
import Drawer from "../../../common/Drawer";
import DrawerContent from "./DrawerContent";
import Badge from "../../../common/Messages/Badge";
import { useAppSelector } from "../../../../store";

const PAGES = ROUTES.shop;
const BASIC_CLASSES: string = "p-4 text-primary flex-1 relative";
const ICON_CLASSES: string = "mx-auto text-2xl";

const BottomNavbar = () => {
    const { cart } = useAppSelector((state) => state.cart);
    const { favourites } = useAppSelector((state) => state.favourites);
    const [isDialog, setIsDialog] = useState<boolean>(false);
    const openDialog = () => setIsDialog(!isDialog);
    return (
        <div className="flex items-center w-full bg-white/80 backdrop-blur-3xl  rounded-t-lg fixed -bottom-px left-0 z-50">
            <BottomLink to="/" Icon={BiSolidHome} />
            <BottomLink to={"/shop" + PAGES.shoppingcart} Icon={BiSolidCart} badge={cart.length} />
            <BottomLink to={"/shop" + PAGES.favourites} Icon={BiSolidHeart} badge={favourites.length} />
            <button className={`${BASIC_CLASSES}`} onClick={openDialog}>
                <BiMenu className={ICON_CLASSES} />
            </button>
            <Drawer isOpen={isDialog} className="w-full">
                <DrawerContent onClose={() => setIsDialog(false)} />
            </Drawer>
        </div>
    );
};

const BottomLink = ({ to, Icon, badge }: { to: string; Icon: IconType; badge?: number }) => {
    const className: NavLinkProps["className"] = ({ isActive }): string =>
        `${BASIC_CLASSES} ${isActive ? "border-t-2 border-primary text-primary" : ""}`;

    return (
        <NavLink to={to} className={className}>
            {badge ? <Badge value={badge} className="top-1.5 inset-x-1/2 bg-red-700" /> : null}
            <Icon className={ICON_CLASSES} />
        </NavLink>
    );
};

export default BottomNavbar;
