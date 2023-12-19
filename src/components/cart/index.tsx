import { Table } from "../common/Table";
import Checkbox from "../common/Form/Checkbox";
import CartItem from "./CartItem";
import OrderBanner from "../common/OrderBanner";
import { useAppDispatch, useAppSelector } from "../../store";
import Empty from "../common/Messages/Empty";
import ContinueShopping from "./ContinueShopping";
import { useState } from "react";
import FloatingButton from "../common/Button/Floating";
import { FiTrash2 } from "react-icons/fi";
import { deleteByIDs } from "../../store/cart/cart-slice";
import { ProductToasts } from "../../utils/classes/product-toasts";
import SummeryAside from "./SummeryAside";
import { ProductCategriedInterface } from "../../interfaces/products";

const TABLE_TITLES: string[] = ["Product", "Price", "Quantity", "Total", "Options"];

const CartBody = () => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.cart);
    const [selectedList, setSelectedList] = useState<string[]>([]);

    // Handle List Working On
    const isSelectedEmpy = selectedList.length == 0;
    const products: ProductCategriedInterface[] = isSelectedEmpy
        ? cart
        : cart.filter(({ id }) => selectedList.includes(id)); //  when user select elements, getting the selected live change

    // On select items
    const onSelectAllItem = () => {
        selectedList.length ? setSelectedList([]) : setSelectedList(cart.map(({ id }) => id));
    };
    const onSelectItem = (id: string) => {
        if (selectedList.includes(id)) setSelectedList((prev) => prev.filter((item) => item != id));
        else setSelectedList((prev) => [...prev, id]);
    };

    // On clear selected items
    const onDeleteItem = (id: string) => {
        dispatch(deleteByIDs([id]));
        if (selectedList.includes(id)) setSelectedList((prev) => prev.filter((item) => item != id));
    };
    const onClearSelected = () => {
        dispatch(deleteByIDs(selectedList));
        ProductToasts.removed(selectedList.length);
        setSelectedList([]);
    };

    return (
        <>
            <OrderBanner />
            <section className="mt-5">
                <h3 className="text-2xl font-medium">Cart</h3>
                <div className="flex gap-5 lg:gap-10 max-lg:flex-col">
                    {/*  When empty list */}
                    {cart.length == 0 && (
                        <div className="flex flex-col mx-auto">
                            <Empty message="Empty Cart please shopping to add" />
                            <ContinueShopping />
                        </div>
                    )}
                    {/*  When list has products */}
                    {cart.length > 0 && (
                        <>
                            <Table
                                headers={[
                                    <Checkbox
                                        value="all"
                                        checked={selectedList.length == cart.length}
                                        onChange={onSelectAllItem}
                                    />,
                                    ...TABLE_TITLES,
                                ]}
                                className="h-fit flex-1"
                            >
                                {cart.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        product={item}
                                        isSelected={selectedList.includes(item.id)}
                                        onSelect={() => onSelectItem(item.id)}
                                        onDeleteItem={onDeleteItem}
                                    />
                                ))}
                            </Table>
                            {/* Summery Section */}
                            <SummeryAside
                                dispatch={dispatch}
                                products={products}
                                totalItems={products.length}
                            />
                        </>
                    )}
                </div>
            </section>
            {/* Floating button showing when selected items */}
            {selectedList.length ? <FloatingButton onClick={onClearSelected} icon={<FiTrash2 />} /> : null}
        </>
    );
};

export default CartBody;
