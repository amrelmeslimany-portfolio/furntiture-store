import { useState } from "react";
import { OrdersStatusEnum } from "../../constants/enums";
import OrderItem from "./OrderItem";
import ShowingTotal from "../common/Messages/ShowingTotal";
import { OrderListType } from "../../interfaces/orders";
import { v4 } from "uuid";
import { CHAIR_IMG1, CHAIR_IMG2, CHAIR_IMG3 } from "../../constants/images";

const ORDERS: OrderListType[] = [
    {
        id: v4(),
        address: { address: "33324 Williamson Cape, 632 Walsh Glen, 45930", title: "Home" },
        palced: "02-05-2020",
        serialNumber: "566-898-688",
        status: OrdersStatusEnum.Completed,
        totalPrice: 25,
        products: [
            { id: v4(), image: CHAIR_IMG1, name: "Chair 1", quantity: 4, status: OrdersStatusEnum.Completed },
            { id: v4(), image: CHAIR_IMG2, name: "Chair 2", quantity: 2, status: OrdersStatusEnum.Completed },
            { id: v4(), image: CHAIR_IMG3, name: "Chair 3", quantity: 1, status: OrdersStatusEnum.Completed },
        ],
    },
    {
        id: v4(),
        address: { address: "33324 Williamson Cape, 632 Walsh Glen, 45930", title: "Home" },
        palced: "02-05-2020",
        serialNumber: "566-898-688",
        status: OrdersStatusEnum.Pending,
        totalPrice: 25,
        products: [
            { id: v4(), image: CHAIR_IMG1, name: "Chair 1", quantity: 4, status: OrdersStatusEnum.Pending },
            { id: v4(), image: CHAIR_IMG2, name: "Chair 2", quantity: 2, status: OrdersStatusEnum.Pending },
            { id: v4(), image: CHAIR_IMG3, name: "Chair 3", quantity: 1, status: OrdersStatusEnum.Cancelled },
        ],
    },
    {
        id: v4(),
        address: { address: "33324 Williamson Cape, 632 Walsh Glen, 45930", title: "Home" },
        palced: "02-05-2020",
        serialNumber: "566-898-688",
        status: OrdersStatusEnum.Pending,
        totalPrice: 25,
        products: [
            { id: v4(), image: CHAIR_IMG1, name: "Chair 1", quantity: 4, status: OrdersStatusEnum.Pending },
            { id: v4(), image: CHAIR_IMG2, name: "Chair 2", quantity: 2, status: OrdersStatusEnum.Pending },
            { id: v4(), image: CHAIR_IMG3, name: "Chair 3", quantity: 1, status: OrdersStatusEnum.Cancelled },
        ],
    },
    {
        id: v4(),
        address: { address: "33324 Williamson Cape, 632 Walsh Glen, 45930", title: "Home" },
        palced: "02-05-2020",
        serialNumber: "566-898-688",
        status: OrdersStatusEnum.Cancelled,
        totalPrice: 25,
        products: [
            { id: v4(), image: CHAIR_IMG1, name: "Chair 1", quantity: 4, status: OrdersStatusEnum.Cancelled },
            { id: v4(), image: CHAIR_IMG2, name: "Chair 2", quantity: 2, status: OrdersStatusEnum.Cancelled },
            { id: v4(), image: CHAIR_IMG3, name: "Chair 3", quantity: 1, status: OrdersStatusEnum.Cancelled },
        ],
    },
];

const OrdersBody = () => {
    const [finishedStatus, setFinishedStatus] = useState<OrdersStatusEnum>(OrdersStatusEnum.Completed);
    const filteredOrders = ORDERS.filter((order) => order.status === finishedStatus);
    return (
        <section>
            <h3 className="text-2xl font-medium mb-2">Orders</h3>
            <div>
                <div className="flex flex-wrap max-xs:flex-col justify-between gap-2 items-center mb-4  ">
                    <div className="flex gap-2 mt-2 max-xs:flex-col max-xs:w-full">
                        {Object.values(OrdersStatusEnum).map((status) => (
                            <button
                                key={status}
                                className={`
                                ${
                                    status == finishedStatus ? "bg-primary text-white" : "bg-gray-100"
                                }  btn-secondary `}
                                onClick={() => setFinishedStatus(status)}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                    <hr className="my-2 border-gray-100 xs:hidden w-full" />
                    <ShowingTotal showing={filteredOrders.length} total={ORDERS.length} />
                </div>
            </div>
            <hr className="my-4 border-gray-100 max-xs:hidden" />
            <ul className="my-2">
                {filteredOrders.map((order) => (
                    <OrderItem key={order.id} {...order} />
                ))}
            </ul>
            {/* See More Button */}
            <div className="text-center mt-5">
                <button className="base-btn bg-primary/5 text-primary w-40">More</button>
            </div>
        </section>
    );
};

export default OrdersBody;
