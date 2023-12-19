import { OrderProductType } from "../../interfaces/orders";
import { padStartZero } from "../../utils/functions";

const OrdersSummeryList = ({ products }: { products: OrderProductType[] }) => {
    return (
        <ul>
            {products.map((item, index) => (
                <li
                    key={item.id}
                    className=" mb-2  bg-gray-50 p-2 rounded  border-b pb-1.5 border-gray-50/10"
                >
                    <span className="text-sm text-secondaryText block mb-1">{padStartZero(index + 1)}</span>
                    <div className="flex gap-1.5 justify-between">
                        <article>
                            <h6 className="text-lg capitalize font-medium line-clamp-2 leading-tight">
                                {item.name}
                            </h6>
                            <span className="text-sm block mt-1">
                                Quantity: {padStartZero(item.quantity!)}
                            </span>
                        </article>
                        <span className="flex-shrink-0">${item.price.toFixed(2)}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default OrdersSummeryList;
