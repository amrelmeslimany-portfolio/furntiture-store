import { Link, NavLink, NavLinkProps } from "react-router-dom";
import Button from "../../../common/Button";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { ROUTES } from "../../../../constants/routes";
import { useState } from "react";
import SearchModalContent from "../Search";
import { CHAIR_IMG1 } from "../../../../constants/images";
import Avatar from "../../../common/Avatar";
import { useAppSelector } from "../../../../store";
import Badge from "../../../common/Messages/Badge";

const FeaturesLinks = () => {
    const { cart } = useAppSelector((state) => state.cart);
    const { favourites } = useAppSelector((state) => state.favourites);
    const [searchModal, setSearchModal] = useState<boolean>(false);
    const linkClassname: NavLinkProps["className"] = ({ isActive }) =>
        `btn rounded-full text-xl relative ${isActive ? "bg-primary text-white" : ""}`;

    // FIXME testing
    const user: boolean = false;

    return (
        <>
            <div className="flex items-center space-x-3">
                <Button className="text-xl" onClick={() => setSearchModal(true)}>
                    <FiSearch className="align-middle" />
                </Button>
                <NavLink className={linkClassname} to={"/shop" + ROUTES.shop.shoppingcart}>
                    <Badge value={cart.length} />
                    <FiShoppingCart className="align-middle" />
                </NavLink>
                <NavLink to={"/shop" + ROUTES.shop.favourites} className={linkClassname}>
                    <Badge value={favourites.length} />
                    <FiHeart className="align-middle" />
                </NavLink>
                <span className="h-5 bg-white w-[1px] block" />
                {!user ? (
                    <>
                        <Link
                            to={ROUTES.auth.sign_in}
                            className="text-white font-[500] hover:bg-primary transition btn-primary"
                        >
                            Sign In
                        </Link>
                        <Link to={ROUTES.auth.sign_up} className="btn-primary bg-primary ">
                            Sign Up
                        </Link>
                    </>
                ) : (
                    <Link
                        to={ROUTES.user.profile}
                        className="flex space-x-2 items-center py-1 px-1.5 rounded-full hover:bg-white group transition"
                    >
                        <Avatar src={CHAIR_IMG1} className="w-6 h-6" />
                        <p className="max-w-[110px] truncate capitalize text-white group-hover:text-primary transition">
                            Amr Mohamed
                        </p>
                    </Link>
                )}
            </div>
            <SearchModalContent isOpen={searchModal} setIsOpen={setSearchModal} />
        </>
    );
};

export default FeaturesLinks;
