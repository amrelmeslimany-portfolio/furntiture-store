import { ProductsFilterEnum } from "../constants/enums";
import {
    FurnitureBrands,
    FurnitureMaterials,
    ProductCategriesEnum,
    RoomsEnum,
} from "../constants/enums/furniture";

export type CategoryType = {
    img: string;
    title: string;
    path: string;
    restQuantity: number;
};

export interface ProductInterface {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    createdAt: Date;
    brand: FurnitureBrands;
    material: FurnitureMaterials;
    rooms: RoomsEnum[];
}

export interface ProductCategriedInterface extends ProductInterface {
    category: ProductCategriesEnum;
    quantity?: number;
}

export interface ProductHorizantalInterface extends ProductInterface {
    description: string;
}

export type ProductDetailsType = ProductInterface & ProductCategriedInterface & ProductHorizantalInterface;

// @base Product Details
export type OverallStasticType = { label: string; rating: number; statistic: number };

export type ProductsQueryType = Partial<Record<ProductsFilterEnum, string>> & {
    sortBy?: string;
    orderBy?: string;
};
