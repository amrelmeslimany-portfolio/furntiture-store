import IconCircleButton from "../common/Button/CircleIcon";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { Table } from "../common/Table";
import { useAppDispatch, useAppSelector } from "../../store";
import { clear, deleteByID } from "../../store/favourites/favourite-slice";
import Empty from "../common/Messages/Empty";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cart/cart-slice";
import { ProductCategriedInterface } from "../../interfaces/products";
import { BsCartCheckFill } from "react-icons/bs";
import TitleHeader from "../common/Titles/TitleHeader";
import { padStartZero } from "../../utils/functions";

const HEADERS: string[] = ["product", "price", "in stock", "options"];

const FavouritesBody = () => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.cart);
    const { favourites } = useAppSelector((state) => state.favourites);

    const isInCart = (id: string): ProductCategriedInterface | undefined =>
        cart.find((item) => id == item.id);

    return (
        <div className="mt-5">
            <TitleHeader title="Favourites">
                {favourites.length > 0 && (
                    <button
                        className="base-btn text-primary hover:bg-primary hover:text-white rounded-full"
                        onClick={() => dispatch(clear())}
                    >
                        Clear
                    </button>
                )}
            </TitleHeader>
            {favourites.length == 0 && (
                <div className="text-center">
                    <Empty message="No favourites products" />
                    <Link to="/shop" className="text-primary hover:underline">
                        Continue Shopping
                    </Link>
                </div>
            )}
            {favourites.length > 0 && (
                <>
                    <Table headers={HEADERS}>
                        {favourites.map((product) => (
                            <tr key={product.id}>
                                <td className="p-4">
                                    <Link
                                        to={`/shop/${product.id}`}
                                        className="w-80 flex items-center space-x-3"
                                    >
                                        <img
                                            src={product.image}
                                            alt={"Helloa Chair"}
                                            className="w-20 h-20 object-cover flex-shrink-0"
                                        />
                                        <h5 className="flex-grow font-semibold capitalize text-lg">
                                            {product.name}
                                        </h5>
                                    </Link>
                                </td>

                                <td className="p-4">
                                    <div className="w-20">${product.price.toFixed(2)}</div>
                                </td>
                                <td className="p-4">
                                    <span className="text-green-800 text-sm block w-20">In Stock</span>
                                </td>
                                <td className="p-4 ">
                                    <div className="flex space-x-1">
                                        <IconCircleButton
                                            icon={
                                                isInCart(product.id) ? (
                                                    <BsCartCheckFill className="text-lg text-white" />
                                                ) : (
                                                    <FiShoppingCart className="text-lg text-primary" />
                                                )
                                            }
                                            className={`w-10 h-10  ${
                                                isInCart(product.id) ? "bg-primary" : "hover:bg-gray-100"
                                            }`}
                                            onClick={() => dispatch(addToCart(product))}
                                        />
                                        <IconCircleButton
                                            icon={<FiTrash2 className="text-lg text-red-500" />}
                                            className="w-10 h-10 hover:bg-gray-100"
                                            onClick={() => dispatch(deleteByID([product.id]))}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Table>
                    <p className="text-secondary text-sm text-end border-t border-gray-100 pt-3 mt-3">
                        Total Items: <b>{padStartZero(favourites.length)}</b>
                    </p>
                </>
            )}
        </div>
    );
};

export default FavouritesBody;
