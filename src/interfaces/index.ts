import { IconType } from "react-icons";
import { ActionsEnum } from "../constants/enums";
import { Dispatch, SetStateAction } from "react";

export type SizesType = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

export type StatisticItemType = {
    name: string;
    value: number | string;
};

export type BenefitType = {
    Icon: IconType;
    title: string;
    description: string;
};

export interface TestimonialInterface {
    id: string;
    client: TestimonialClientType;
    rating: number;
    body: string;
}

export type TestimonialClientType = {
    clientID: string;
    image: string;
    name: string;
    jobTitle: string;
};

export type BreadcrumbType = {
    label: string;
    url?: string;
    isCurrentPage?: boolean;
};

export type CustomerReviewType = { date: string } & Omit<TestimonialInterface, "client"> &
    Omit<TestimonialClientType, "jobTitle" | "clientID">;

export type ActionsThemeType = { [key in ActionsEnum]: { color: string; bgColor: string } };

export type StateSelectProps<T> = {
    selected: string[];
    setSelected: Dispatch<SetStateAction<T>>;
};

export type MinMaxType = { min: number; max: number };

export type SortingType = {
    orderBy: "asc" | "desc";
    sortBy: "createdAt" | "createdAt" | "name";
};

export type ToastParamsType = { src: string; text: string; isError?: boolean };

export interface CreditCardInterface {
    cardNumber: string;
    expiryDate: string;
    cvvCode: string;
    cardName?: string;
}

export type CountryType = { name: string; code: string };

export type CodePhoneType = Pick<CountryType, "code"> & { number: string };
