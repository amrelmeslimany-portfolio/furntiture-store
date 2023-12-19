import CheckoutBody from "../../components/checkout";
import Breadcrumb from "../../components/common/Breadcrumb";
import Contianer from "../../components/common/Container";
import Head from "../../components/common/Head";
import { BreadcrumbType } from "../../interfaces";
import { useAppSelector } from "../../store";
import EmptyCheckout from "../../components/checkout/EmptyCheckout";

const BREADCRUMBS: BreadcrumbType[] = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Cart", url: "/shop/cart" },
    { label: "Checkout", isCurrentPage: true },
];

const Checkout = () => {
    const { temporeryProducts } = useAppSelector((state) => state.orders);
    const isProducts: boolean = temporeryProducts.length > 0;

    return (
        <>
            <Head title="Checkout" />
            <Contianer className="py-10">
                <Breadcrumb items={BREADCRUMBS} />
                {!isProducts ? <EmptyCheckout /> : <CheckoutBody products={temporeryProducts} />}
            </Contianer>
        </>
    );
};

export default Checkout;
