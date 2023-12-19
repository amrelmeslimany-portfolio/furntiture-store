import { FiMinus, FiPlus } from "react-icons/fi";
import { useAppDispatch } from "../../../store";
import { addToCart, decreaseQuantity as decrease } from "../../../store/cart/cart-slice";
import { ProductCategriedInterface } from "../../../interfaces/products";
import { ProductToasts } from "../../../utils/classes/product-toasts";

type Props = {
    className: string;
    product: ProductCategriedInterface;
};

function QuantityInput({ className, product }: Props) {
    const dispatch = useAppDispatch();
    const increaseQuantity = () => dispatch(addToCart(product));
    const decreaseQuantity = () => {
        dispatch(decrease(product));
        if (product.quantity == 1) new ProductToasts(product.image).quantityError();
    };

    return (
        <div className={`${className} flex items-center h-9`}>
            <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 px-2 h-full rounded-l">
                <FiMinus />
            </button>
            <span className="border-y w-full border-gray-50 text-center px-0.5 grid content-center h-full">
                {product.quantity || 1}
            </span>
            <button onClick={increaseQuantity} className="bg-gray-200 text-gray-600 px-2 h-full rounded-r">
                <FiPlus />
            </button>
        </div>
    );
}

export default QuantityInput;
