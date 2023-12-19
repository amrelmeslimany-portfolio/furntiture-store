import CuoponCode from "./CuoponCode";
import { padStartZero } from "../../utils/functions";
import SummryItem from "./SummryItem";
import Button from "../common/Button";
import ContinueShopping from "./ContinueShopping";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { ProductCategriedInterface } from "../../interfaces/products";
import { addTempProducts } from "../../store/orders/orders-slice";
import { Dispatch } from "@reduxjs/toolkit";
import { OrderProductType } from "../../interfaces/orders";

type Props = {
    totalItems: number;
    products: ProductCategriedInterface[];
    dispatch: Dispatch;
};

const SummeryAside = ({ products, totalItems, dispatch }: Props) => {
    const navigate = useNavigate();

    const totalPrice: string = products
        .reduce((sum, item) => (sum += item.price * item.quantity!), 0)
        .toFixed(2);

    const onCheckout = () => {
        // Save chose products wants order to temporery products at Orders Slice
        const items: OrderProductType[] = products.map(({ id, image, name, price, quantity }) => ({
            id,
            image,
            name,
            price,
            quantity,
            total: price * quantity!,
        }));

        dispatch(addTempProducts(items));

        // Then Go to checkout page
        navigate("/shop" + ROUTES.shop.checkout);
    };

    return (
        <div className="lg:w-72 max-lg:flex flex-shrink-0 justify-between max-md:flex-col max-md:ms-auto max-sm:w-full max-lg:border-t max-lg:pt-5">
            <CuoponCode />
            <section className="sm:w-72 flex flex-col">
                <h6 className="font-semibold mb-2">Subtotal</h6>
                <SummryItem value={padStartZero(totalItems)} text="Items" />
                <SummryItem value={"+$10"} text="Shipping" />
                <SummryItem value={"-10%"} text="Promocode" />
                <SummryItem value={`$${totalPrice}`} text="Total" status="strong" />
                <Button className="bg-primary w-full mt-4" onClick={onCheckout}>
                    Checkout
                </Button>
                <ContinueShopping />
            </section>
        </div>
    );
};

export default SummeryAside;
