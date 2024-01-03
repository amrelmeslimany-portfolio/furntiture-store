import { IconType } from "react-icons";

export interface INumberState {
    text: string;
    number: number;
    icon: IconType;
    percent: {
        isUp?: boolean;
        value: number;
    };
}
