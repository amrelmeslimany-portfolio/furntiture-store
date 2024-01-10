import React from "react";
import Card from "../../../common/Card";
import { Table } from "../../../common/Table";
import { CHAIR_IMG1 } from "../../../../constants/images";
import { EProductStatus } from "../../../../constants/enums";
import { ProductStatusColors } from "../../../../constants/theme";
import Actions from "./Actions";
import { v4 } from "uuid";
import ShowingTotal from "../../../common/Messages/ShowingTotal";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const ITEMS: { status: EProductStatus }[] = [
    {
        status: EProductStatus.Discount,
    },
    {
        status: EProductStatus.Hidden,
    },
    {
        status: EProductStatus.Normal,
    },
    {
        status: EProductStatus.Discount,
    },
    {
        status: EProductStatus.Normal,
    },
    {
        status: EProductStatus.Hidden,
    },
    {
        status: EProductStatus.Normal,
    },
    {
        status: EProductStatus.Discount,
    },
];

const ProductsTable = () => {
    return (
        <Card className="px-4 pb-4 mt-8 mb-4">
            <div className="p-4">
                <ShowingTotal showing={10} total={50} />
            </div>

            <Table
                headers={["#", "Product", "In Stock", "Price", "Status", "Options"]}
                headClassName="bg-transparent px-4 pb-4"
                tableClassName=" border-separate border-spacing-y-2"
            >
                {ITEMS.map((item, index) => {
                    const { bg, text: textColor } = ProductStatusColors[item.status];
                    return (
                        <tr key={v4()} className={`${bg} bg-opacity-50`}>
                            <td className="py-2 px-4 rounded-s-full text-secondaryText" width={60}>
                                {index + 1}
                            </td>
                            <td className="py-2 px-4 ">
                                <Link
                                    to={`${ROUTES.admin.productsdetails}/50`}
                                    className="flex gap-3 items-center hover:underline"
                                >
                                    <img src={CHAIR_IMG1} className="w-12 h-12 rounded-xl flex-shrink-0" />
                                    <h6 className="font-medium capitalize truncate">Product Name</h6>
                                </Link>
                            </td>
                            <td className="py-2 px-4">50</td>
                            <td className="py-2 px-4">$564.55</td>
                            <td className={`py-2 px-4 ${textColor}`}>{item.status}</td>
                            <td className="py-2 px-4 rounded-e-full" width={200}>
                                <Actions />
                            </td>
                        </tr>
                    );
                })}
            </Table>
        </Card>
    );
};

export default ProductsTable;
