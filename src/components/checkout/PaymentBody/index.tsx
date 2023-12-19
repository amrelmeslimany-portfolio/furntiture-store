import { memo, useState } from "react";
import PaySummeryHeader from "./PaySummeryHeader";
import { DelivryOptionsEnum, OnlinePaymentMethodsEnum, PaymentMethodsEnum } from "../../../constants/enums";
import OnlinePayment from "./OnllinePayment";
import CashOnDelivery from "../OnlinePaymentsForms/CashOnDelivery";
import CheckoutSummery from "../CheckoutSummery";
import { OrderProductType } from "../../../interfaces/orders";

type Props = {
    onNext: (values: any) => void;
    deliveryType: DelivryOptionsEnum;
    products: OrderProductType[];
};

const PaymentBody = ({ onNext, deliveryType, products }: Props) => {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodsEnum>(PaymentMethodsEnum.Online);
    const [onlineMethod, setOnlineMethod] = useState<OnlinePaymentMethodsEnum>(
        OnlinePaymentMethodsEnum.CreditCard
    );

    const totalQuantity = products.reduce((sum, item) => (sum += item.quantity!), 0);
    const itemsCost = products.reduce((sum, item) => (sum += item.price * item.quantity!), 0);

    const onSubmit = (values?: any) => {
        onNext({
            onlineForm: paymentMethod == PaymentMethodsEnum.Online && values,
            paymentMethod,
            onlineMethod: paymentMethod == PaymentMethodsEnum.Online && onlineMethod,
        });
    };

    return (
        <div className="max-md:order-1">
            {/* Payment Method Header Choose */}
            <PaySummeryHeader onSelect={(method) => setPaymentMethod(method)} paymentMethod={paymentMethod} />
            {/* The Body result after choose payment type  */}
            {paymentMethod == PaymentMethodsEnum.OnDelivery && <CashOnDelivery onNext={onSubmit} />}
            {paymentMethod == PaymentMethodsEnum.Online && (
                <OnlinePayment
                    onSubmit={onSubmit}
                    onSelect={(method) => setOnlineMethod(method)}
                    selected={onlineMethod}
                />
            )}
            {/* Summery Values */}
            <CheckoutSummery
                estimatedDelivery="5days"
                itemsCost={itemsCost}
                orderItems={products.length}
                totalQuantity={totalQuantity}
                paymentMethod={paymentMethod == PaymentMethodsEnum.Online ? onlineMethod : paymentMethod}
                couponCode={10}
                shippingCost={paymentMethod == PaymentMethodsEnum.Online ? 5 : 10}
                deliveryTypeCost={deliveryType == DelivryOptionsEnum.Fast ? 23 : 0}
            />
        </div>
    );
};

export default memo(PaymentBody);
