import {
    DelivryOptionsEnum,
    OnlinePaymentMethodsEnum,
    OrdersStatusEnum,
    PaymentMethodsEnum,
} from "../constants/enums";
import { AddressCheckoutType } from "./customer";
import { ProductCategriedInterface } from "./products";

export type OrderProductType = Pick<
    ProductCategriedInterface,
    "id" | "image" | "quantity" | "name" | "price"
> & { total: number };

export interface OrderInterface {
    itemsCount: number;
    estimatedDelivery: string;
    totalQuantity: number;
    shippingCost: number;
    deliveryTypeCost: number;
    deliveryType: DelivryOptionsEnum;
    paymentMethod: PaymentMethodsEnum | OnlinePaymentMethodsEnum;
    products: OrderProductType[];
    productsCost: number;
    address: AddressCheckoutType;
    couponCode?: number;
}

export type OrdersListProduct = Required<
    Pick<ProductCategriedInterface, "id" | "image" | "name" | "quantity">
> & {
    status: OrdersStatusEnum;
};

export type OrderListType = {
    id: string;
    serialNumber: string;
    status: OrdersStatusEnum;
    palced: string;
    totalPrice: number;
    address: Pick<AddressCheckoutType, "address" | "title">;
    products: OrdersListProduct[];
};
