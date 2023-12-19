import { useCallback, useMemo, useState } from "react";
import { DelivryOptionsEnum, PaymentMethodsEnum } from "../../constants/enums";
import OrdersList from "./OrdersList";
import AdressesList from "./AdressesList";
import DeliveryOptions from "./DeliveryOptions";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import PaymentBody from "./PaymentBody";
import { OrderProductType } from "../../interfaces/orders";
import { useAppDispatch } from "../../store";
import { addTempOrder } from "../../store/orders/orders-slice";
import { AddressCheckoutType } from "../../interfaces/customer";

type Props = {
    products: OrderProductType[];
};

const CheckoutBody = ({ products }: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [deliveryOption, setDeliveryOption] = useState<DelivryOptionsEnum>(DelivryOptionsEnum.Normal);
    const [selectedAddress, setSelectedAddress] = useState<AddressCheckoutType | null>();

    const onSubmit = useCallback(
        (values: any) => {
            const paymentMethod =
                values.paymentMethod == PaymentMethodsEnum.Online
                    ? values.onlineMethod
                    : values.paymentMethod;

            // Firstly Save current data order to redux to sumbit it to server next step
            dispatch(
                addTempOrder({
                    onlineForm: values.onlineForm || null,
                    order: {
                        deliveryType: deliveryOption,
                        deliveryTypeCost: 5, // this from server depend on delivery type
                        estimatedDelivery: "3days", // from server
                        itemsCount: products.length,
                        productsCost: products.reduce((sum, { total }) => (sum += total), 0),
                        paymentMethod,
                        products,
                        address: selectedAddress!,
                        shippingCost: 45, // depend on payment method ,
                        totalQuantity: products.reduce((sum, { quantity }) => (sum += quantity!), 0),
                        couponCode: 0, // from server
                    },
                })
            );

            // then go to confirm order invoice
            navigate("/shop" + ROUTES.shop.invoice);
        },
        [selectedAddress, deliveryOption]
    );

    return (
        <div className="mt-5 grid  max-md:grid-cols-1 max-md9:grid-cols-[auto,300px] md9:grid-cols-2 gap-5 md:gap-10">
            {/* NOTE payment and summery side */}
            <PaymentBody
                products={products}
                deliveryType={useMemo(() => deliveryOption, [deliveryOption])}
                onNext={onSubmit}
            />
            {/* NOTE options side */}
            <aside className="max-md:order-0 p-4 bg-gray-50 bg-opacity-80 h-fit md:sticky top-5">
                <section className="mb-5">
                    <h4 className="text-lg capitalize text-secondary font-semibold mb-2">Order Items</h4>
                    <OrdersList products={products} />
                </section>
                <section className="mb-5">
                    <article className="flex justify-between items-center mb-2">
                        <h4 className="text-lg capitalize text-secondary font-semibold ">Delivery To</h4>
                        <Link
                            to={ROUTES.user.addresses}
                            className="base-btn text-primary rounded-full hover:bg-primary hover:bg-opacity-10"
                        >
                            Edit
                        </Link>
                    </article>
                    <AdressesList
                        select={selectedAddress || null}
                        onSelect={useCallback((address) => setSelectedAddress(address), [selectedAddress])}
                    />
                </section>
                <section>
                    <h4 className="text-lg capitalize text-secondary font-semibold mb-2">Delivery Option</h4>
                    <DeliveryOptions
                        currentOption={deliveryOption}
                        onDeliveryChange={useCallback((option) => setDeliveryOption(option), [])}
                    />
                </section>
            </aside>
        </div>
    );
};

export default CheckoutBody;
