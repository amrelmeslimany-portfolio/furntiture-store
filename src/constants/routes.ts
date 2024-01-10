import { IconType } from "react-icons";
import { BiGroup, BiHome, BiStore } from "react-icons/bi";
import { FiLock, FiMap, FiSettings, FiUser } from "react-icons/fi";

export const ROUTES = {
    main: {
        Home: "/",
        Shop: "/shop",
    },
    shop: {
        shoppingcart: "/cart",
        favourites: "/favourites",
        orders: "/orders",
        checkout: "/checkout",
        invoice: "/invoice",
    },
    products: {
        productdetails: "/product-details",
        rate: "/rate",
    },
    auth: {
        sign_in: "/auth/sign-in",
        sign_up: "/auth/sign-up",
        verificationcode: "/auth/verification-code",
        forgotpassword: "/auth/forgot-password",
        resetpassword: "/auth/reset-password",
    },
    user: {
        profile: "/profile",
        settings: "/profile/settings",
        addresses: "/profile/addresses",
        password: "/profile/password",
    },
    admin: {
        home: "/admin",
        users: "/admin/users",
        categories: "/admin/categories",
        products: "/admin/products",
        productsdetails: "/admin/products/details",
        reviews: "/admin/reviews",
        orders: "/admin/orders",
        stats: "/admin/stats",
        settings: "/admin/settings",
    },
};

export const MAIN_ROUTES_ICONS: { [key: string]: IconType } = {
    home: BiHome,
    shop: BiStore,
    about: BiGroup,
};

export const PROFILE_NAVs: { to: string; icon: IconType; text: string }[] = [
    {
        to: "/profile",
        icon: FiUser,
        text: "Profile",
    },
    {
        to: "/profile/settings",
        icon: FiSettings,
        text: "Settings",
    },
    {
        to: "/profile/addresses",
        icon: FiMap,
        text: "Addresses",
    },

    {
        to: "/profile/password",
        icon: FiLock,
        text: "Change Password",
    },
];
