import { ReactNode } from "react";
import { OnlinePaymentMethodsEnum, PaymentMethodsEnum } from "../../constants/enums";
import { padStartZero } from "../../utils/functions";
import SummryItem from "../cart/SummryItem";

type Props = {
    orderItems: number;
    totalQuantity: number;
    itemsCost: number;
    estimatedDelivery: string;
    paymentMethod: OnlinePaymentMethodsEnum | PaymentMethodsEnum;
    extra?: ReactNode;
    shippingCost?: number;
    deliveryTypeCost?: number;
    couponCode?: number;
};

const CheckoutSummery = ({
    couponCode = 0,
    estimatedDelivery,
    itemsCost,
    orderItems,
    totalQuantity,
    extra,
    paymentMethod,
    shippingCost = 0,
    deliveryTypeCost = 0,
}: Props) => {
    const cost = itemsCost + shippingCost + deliveryTypeCost;
    const discountedCost = cost - (cost * couponCode) / 100;
    return (
        <div className="pt-5 mt-5 border-t border-gray-100">
            <SummryItem status="strong" text="Total" value={`$${discountedCost.toFixed(2)}`} />
            <SummryItem text="Order Items" value={padStartZero(orderItems)} />
            <SummryItem text="Total Quantity" value={padStartZero(totalQuantity)} />
            <SummryItem text="Items Cost" value={`$${itemsCost.toFixed(2)}`} />
            <SummryItem text="Estimated Delivery" value={estimatedDelivery} />
            <SummryItem text="Shipping Cost" value={`+$${shippingCost.toFixed(2)}`} color="text-red-500" />
            <SummryItem
                text="Delivery Type"
                value={`+$${deliveryTypeCost.toFixed(2)}`}
                color="text-red-500"
            />
            <SummryItem text="Coupon Code" value={`-${couponCode}%`} color="text-green-600" />
            <SummryItem text="Payment Method" value={paymentMethod} />
            {extra || null}
        </div>
    );
};

export default CheckoutSummery;
