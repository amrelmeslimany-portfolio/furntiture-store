import OrderItemHeader from "./Header";
import OrderProduct from "./OrderProduct";
import { OrderListType } from "../../../interfaces/orders";

const OrderItem = ({ address, id, palced, products, serialNumber, status, totalPrice }: OrderListType) => {
    return (
        <li className="mb-4">
            <OrderItemHeader
                address={address}
                status={status}
                totalPrice={totalPrice}
                id={id}
                orderNumber={serialNumber}
                placed={palced}
            />
            <ul className="p-4 border-x border-b rounded-b-lg border-gray-100 flex flex-col space-y-4">
                {products.map((product) => (
                    <OrderProduct key={product.id} {...product} />
                ))}
            </ul>
        </li>
    );
};

export default OrderItem;
