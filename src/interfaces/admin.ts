import { IconType } from "react-icons";
import { RoomsEnum } from "../constants/enums/furniture";

export interface INumberState {
    text: string;
    number: number;
    icon: IconType;
    percent: {
        isUp?: boolean;
        value: number;
    };
}

export interface IAdminProduct {
    name: string;
    description: string;
    price: string; // Consider using a string type (e.g., string) for price if appropriate
    inStock: string; // Consider using a boolean type for inStock if appropriate
    images: File[]; // Assuming File is from the File API
    rooms: RoomsEnum[];
    category: string;
    dimensions: {
        width: string;
        height: string; // Corrected typo from "hight" to "height"
    };
    weight: string;
    brand: string;
    material: string;
}
