import React from "react";
import { Table } from "../../common/Table";
import Card from "../../common/Card";
import TitleHeader from "../../common/Titles/TitleHeader";
import { v4 } from "uuid";
import { OrdersStatusEnum } from "../../../constants/enums";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const data: {
    profile: string;
    address: string;
    date: string;
    status: OrdersStatusEnum;
    price: number;
}[] = [
    {
        profile: "Amr Mohamed",
        address: "London",
        date: "22/08/2022",
        status: OrdersStatusEnum.Cancelled,
        price: 920,
    },
    {
        profile: "Another Customer",
        address: "London",
        date: "22/08/2022",
        status: OrdersStatusEnum.Pending,
        price: 568,
    },
    {
        profile: "Amr Mohamed",
        address: "London",
        date: "22/08/2022",
        status: OrdersStatusEnum.Completed,
        price: 920,
    },
    {
        profile: "Another Customer",
        address: "London",
        date: "22/08/2022",
        status: OrdersStatusEnum.Cancelled,
        price: 568,
    },
    {
        profile: "Another Customer",
        address: "London",
        date: "22/08/2022",
        status: OrdersStatusEnum.Pending,
        price: 568,
    },
];
const OrdersTable = () => {
    return (
        <Card className="px-2 py-4">
            <TitleHeader isH6 title="Customer Orders" children={MoreButton} className="px-4" />
            <Table
                headers={["Customer", "Address", "Date", "Status", "Price"]}
                tableClassName="border-spacing-y-2 border-separate"
                headClassName="bg-opacty-0 px-4 pb-4"
            >
                {data.map((item) => (
                    <tr
                        key={v4()}
                        className={`
                        ${item.status == OrdersStatusEnum.Cancelled && "bg-red-50"}
                        ${item.status == OrdersStatusEnum.Completed && "bg-green-50"}
                        ${item.status == OrdersStatusEnum.Pending && "bg-orange-50"}
                    `}
                    >
                        <td className="px-4 py-2.5 rounded-s-full font-medium truncate">{item.profile}</td>
                        <td className="px-4 py-2.5">{item.address}</td>
                        <td className="px-4 py-2.5">{item.date}</td>
                        <td className="px-4 py-2.5">{item.status}</td>
                        <td className="px-4 py-2.5 rounded-e-full">${item.price}</td>
                    </tr>
                ))}
                {
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{MoreButton}</td>
                        <td></td>
                        <td></td>
                    </tr>
                }
            </Table>
        </Card>
    );
};

const MoreButton = (
    <Link to={ROUTES.admin.orders} className="btn-text bg-primary/5 px-2 py-1 rounded-full" children="More" />
);

export default OrdersTable;
