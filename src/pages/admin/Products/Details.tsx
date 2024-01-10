import React from "react";
import Head from "../../../components/common/Head";
import TitleHeader from "../../../components/common/Titles/TitleHeader";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { EActions } from "../../../constants/enums";
import NumbersList from "../../../components/admin/analytics/NumbersList";
import { PiArmchair, PiMoney, PiStorefront, PiTruck } from "react-icons/pi";
import { INumberState } from "../../../interfaces/admin";
import Actions from "../../../components/admin/products/Table/Actions";
import Details from "../../../components/product-details/Details";
import { MAIN_PRODUCTS } from "../../../constants";
import Reviews from "../../../components/product-details/Reviews";

const NUMBERS_LIST: INumberState[] = [
    {
        text: "Orders",
        number: 468,
        icon: PiTruck,
        percent: {
            isUp: true,
            value: 8.5,
        },
    },
    {
        text: "In Stock",
        number: 468,
        icon: PiStorefront,
        percent: {
            value: 3.0,
        },
    },
    {
        text: "Revenue",
        number: 4677,
        icon: PiMoney,
        percent: {
            isUp: true,
            value: 7.54,
        },
    },
];

const AdminProductDetails = () => {
    console.log("Must be here an product id");

    return (
        <>
            <Head title={`Product Name`} />
            <section>
                <TitleHeader title="Details">
                    <Actions />
                </TitleHeader>
                <NumbersList
                    states={NUMBERS_LIST}
                    className="grid-cols-1 sm:grid-cols-2 md9:grid-cols-3 my-8"
                />
                <Details isAdmin product={MAIN_PRODUCTS[0]} />
                {/* <Specification specifications={productSpecifications} /> */}
                <Reviews isAdmin />
            </section>
        </>
    );
};

export default AdminProductDetails;
