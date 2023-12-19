import { ActionsThemeType } from "../interfaces";
import { CustomerRequestsThemeType } from "../interfaces/customer";
import { ActionsEnum, CustomerRequestsEnum } from "./enums";
import { FiBox, FiHeart, FiShoppingCart } from "react-icons/fi";

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
