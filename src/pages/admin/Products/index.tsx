import React from "react";
import Head from "../../../components/common/Head";
import TitleHeader from "../../../components/common/Titles/TitleHeader";
import InputIcon from "../../../components/common/Form/Input";
import { FaSearch } from "react-icons/fa";
import ProductsTable from "../../../components/admin/products/Table/ProductsTable";
import Pagination from "../../../components/common/Pagination";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { EActions } from "../../../constants/enums";

const Products = () => {
    return (
        <>
            <Head title="Products" />
            <section>
                <TitleHeader title="Products">
                    <InputIcon
                        Icon={FaSearch}
                        placeholder="Enter Product Name"
                        type="text"
                        isFull
                        parentClassname="mx-20"
                    />
                    <Link
                        to={`${ROUTES.admin.products}/${EActions.New}`}
                        className="base-btn text-white rounded-full bg-primary items-center flex-shrink-0"
                    >
                        New Product
                    </Link>
                </TitleHeader>
                <ProductsTable />
                <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
            </section>
        </>
    );
};

export default Products;
