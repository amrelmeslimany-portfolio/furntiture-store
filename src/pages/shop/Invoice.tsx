import { BreadcrumbType } from "../../interfaces";
import { ROUTES } from "../../constants/routes";
import Head from "../../components/common/Head";
import Contianer from "../../components/common/Container";
import Breadcrumb from "../../components/common/Breadcrumb";
import CheckoutSummery from "../../components/checkout/CheckoutSummery";
import { LOGO_PNG } from "../../constants/images";
import Button from "../../components/common/Button";
import OrdersSummeryList from "../../components/invoices/OrdersSummeryList";
import { useNavigate } from "react-router-dom";
import IconCircleButton from "../../components/common/Button/CircleIcon";
import { FiPrinter } from "react-icons/fi";
import SummryItem from "../../components/cart/SummryItem";
import Divider from "../../components/common/Divider";
import { useAppSelector } from "../../store";
import EmptyCheckout from "../../components/checkout/EmptyCheckout";

const BREADCRUMBS: BreadcrumbType[] = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Cart", url: "/shop/cart" },
    { label: "Checkout", url: "/shop" + ROUTES.shop.checkout },
    { label: "Confirm", isCurrentPage: true },
];

const Invoice = () => {
    const navigate = useNavigate();
    const { temporeryOrder: order, temporeryOnlineForm } = useAppSelector((state) => state.orders);

    const onConfirm = () => {
        console.log(temporeryOnlineForm);
        // save to server the order then clear from orders and remove these items from CART
    };

    return (
        <>
            <Head title="Confirm Order" />
            <Contianer className="py-10">
                <Breadcrumb items={BREADCRUMBS} />
                {!order && <EmptyCheckout />}
                {order && (
                    <>
                        <IconCircleButton
                            icon={<FiPrinter className="text-primary group-hover:text-white transition" />}
                            className="w-10 h-10 group my-5 mx-auto border border-primary"
                        />
                        <section className="max-w-[400px] segment p-4 my-5 mx-auto">
                            <img src={LOGO_PNG} className="w-14 h-14 mx-auto mb-1" />
                            <h4 className="text-xl font-bold text-center">Order Inovice</h4>
                            <CheckoutSummery
                                estimatedDelivery={order?.estimatedDelivery!}
                                itemsCost={order?.productsCost!}
                                totalQuantity={order?.totalQuantity!}
                                orderItems={order?.itemsCount!}
                                paymentMethod={order?.paymentMethod!}
                                extra={<SummryItem text="Delivery Type" value={order?.deliveryType!} />}
                            />
                            <hr className="my-3 border-gray-100" />
                            <OrdersSummeryList products={order?.products!} />
                            <hr className="my-3 border-gray-100" />
                            <Divider text="Address" />
                            <article className="text-start">
                                <h6 className="font-medium">{order?.address.title}</h6>
                                <p className="text-sm text-secondaryText line-clamp-2">
                                    {order?.address.address}
                                </p>
                            </article>
                        </section>
                        <div className="text-center">
                            <Button className="bg-primary w-28 block mx-auto mb-2" onClick={onConfirm}>
                                Confirm
                            </Button>
                            <button
                                className="base-btn text-primary hover:underline"
                                onClick={() => navigate(-1)}
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </Contianer>
        </>
    );
};

export default Invoice;
