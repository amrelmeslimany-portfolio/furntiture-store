import { memo } from "react";
import Prices from "../product/Prices";
import { OrderProductType } from "../../interfaces/orders";
import { padStartZero } from "../../utils/functions";

type Props = { products: OrderProductType[] };

const OrdersList = ({ products }: Props) => {
    return (
        <ul>
            {products.map((item) => (
                <li
                    key={item.id}
                    className="p-4 mb-2 rounded-lg shadow-sm border bg-white border-gray-100 flex gap-4 xl:items-center "
                >
                    <img
                        src={item.image}
                        className="rounded-lg w-24 h-24 object-cover flex-shrink-0"
                        alt="chair"
                    />
                    <div className="flex-grow flex gap-2 justify-between items-center flex-wrap">
                        <section>
                            <h6 className="font-semibold capitalize text-lg">{item.name}</h6>
                            <ul>
                                <li>
                                    <span className="text-xs font-light">Price: </span>$
                                    {item.price.toFixed(2)}
                                </li>
                                <li>
                                    <span className="text-xs font-light">Quantity: </span>
                                    {padStartZero(item.quantity!)}
                                </li>
                            </ul>
                        </section>
                        <Prices priceAfter={item.total} className="text-lg flex-shrink-0" />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default memo(OrdersList);
