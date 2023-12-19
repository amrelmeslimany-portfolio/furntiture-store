import Head from "../../components/common/Head";
import Contianer from "../../components/common/Container";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BreadcrumbType } from "../../interfaces";
import { ProductCategriedInterface } from "../../interfaces/products";
import { MAIN_PRODUCTS } from "../../constants";
import RelatedProducts from "../../components/shop/RelatedProducts";
import OrdersBody from "../../components/orders";

const BREADCRUMBS: BreadcrumbType[] = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Cart", url: "/shop/cart" },
    { label: "Orders", isCurrentPage: true },
];

const Orders = () => {
    return (
        <>
            <Head title="Orders" />
            <Contianer className="py-10">
                <Breadcrumb items={BREADCRUMBS} />
                <OrdersBody />
                <RelatedProducts
                    products={MAIN_PRODUCTS.slice(0, 5) as ProductCategriedInterface[]}
                    title="Recommandtions"
                />
            </Contianer>
        </>
    );
};

export default Orders;
