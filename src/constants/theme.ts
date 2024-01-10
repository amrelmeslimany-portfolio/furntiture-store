import { ActionsThemeType } from "../interfaces";
import { CustomerRequestsThemeType } from "../interfaces/customer";
import { ActionsEnum, CustomerRequestsEnum, EProductStatus } from "./enums";
import { FiBox, FiHeart, FiShoppingCart } from "react-icons/fi";

export const MAIN_COLORS = {
    primary: "#688272",
    gray: "#717171",
    primary_5: "rgb(104 130 114 / 0.05)",
};

export const STATISTICS_COLORS = ["#4F675D", "#7E9C87", "#698061", "#6A857D", "#92B69C"];

export const ACTIONS_COLORS: ActionsThemeType = {
    [ActionsEnum.Add]: {
        color: "text-primary",
        bgColor: "bg-primary",
    },
    [ActionsEnum.Delete]: {
        color: "text-red-700",
        bgColor: "bg-red-700",
    },
    [ActionsEnum.Update]: {
        color: "text-orange-500",
        bgColor: "bg-orange-500",
    },
};

export const CustomerRequestsIcons: CustomerRequestsThemeType = {
    [CustomerRequestsEnum.Cart]: {
        icon: FiShoppingCart,
    },
    [CustomerRequestsEnum.Favourite]: {
        icon: FiHeart,
    },
    [CustomerRequestsEnum.Order]: {
        icon: FiBox,
    },
};

export const ProductStatusColors: { [key in EProductStatus]: { text: string; bg: string } } = {
    [EProductStatus.Discount]: { text: "text-yellow-500", bg: "bg-yellow-50" },
    [EProductStatus.Hidden]: { text: "text-red-600", bg: "bg-red-50" },
    [EProductStatus.Normal]: { text: "text-green-500", bg: "bg-green-50" },
};
