import { useNavigate } from "react-router-dom";
import IconCircleButton from "../common/Button/CircleIcon";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";
import { ROUTES } from "../../constants/routes";
import { ProductCategriedInterface } from "../../interfaces/products";
import { useAppDispatch } from "../../store";
import { addToCart } from "../../store/cart/cart-slice";
import { BsCartCheckFill, BsFillHeartFill } from "react-icons/bs";
import { add } from "../../store/favourites/favourite-slice";

type Props = { product: ProductCategriedInterface; isInCart: boolean; isFavorite: boolean };

const ProductActions = ({ product, isInCart, isFavorite }: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onDetails = () => navigate(ROUTES.main.Shop + `/${product.id}`);
    const onAddToCart = () => dispatch(addToCart(product));
    const onAddFavourite = () => {
        if (isFavorite) return navigate("/shop" + ROUTES.shop.favourites);
        dispatch(add(product));
    };

    return (
        <div className="flex gap-4 items-center justify-center">
            <IconCircleButton
                icon={<FiEye />}
                className="bg-white bg-opacity-30 w-10 h-10"
                onClick={onDetails}
            />
            <IconCircleButton
                icon={isInCart ? <BsCartCheckFill /> : <FiShoppingCart />}
                onClick={onAddToCart}
                className={` w-10 h-10 ${!isInCart ? "bg-white/30" : "bg-primary"}`}
            />
            <IconCircleButton
                icon={isFavorite ? <BsFillHeartFill /> : <FiHeart />}
                className={`  w-10 h-10  ${!isFavorite ? "bg-white/30" : "bg-primary"}`}
                onClick={onAddFavourite}
            />
        </div>
    );
};

export default ProductActions;
