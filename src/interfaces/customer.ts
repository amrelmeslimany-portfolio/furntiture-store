import { IconType } from "react-icons";
import { ActionsEnum, CustomerRequestsEnum, RatingCategorysEnum } from "../constants/enums";

export type CustomerRequestsThemeType = { [key in CustomerRequestsEnum]: { icon: IconType } };

export type CustomerHistoryType = {
    type: ActionsEnum;
    date: string;
    request: CustomerRequestsEnum;
    product: string;
};

// Address
export interface AddressDetailsInterface {
    title: string;
    city: string;
    zipCode: string;
    street: string;
    note: string;
}
export type AddressCheckoutType = { id: string; title: string; address: string; current?: boolean };

export type AddressSettingsType = AddressDetailsInterface & { id: string; isCurrent?: boolean };

// Rating
export type ReviewType = Record<keyof typeof RatingCategorysEnum, number> & { body: string; date?: string };
