import IconCircleButton from "../../common/Button/CircleIcon";
import { BiCartAdd, BiHeart, BiShareAlt, BiSolidHeart } from "react-icons/bi";
import Button from "../../common/Button";
import { ProductCategriedInterface } from "../../../interfaces/products";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addToCart } from "../../../store/cart/cart-slice";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { add, deleteByID } from "../../../store/favourites/favourite-slice";

type Props = {
    isShare: boolean;
    isInCart: boolean;
    product: ProductCategriedInterface;
    className?: string;
};

const DetailsActions = ({ className, isShare, product, isInCart }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { favourites } = useAppSelector((state) => state.favourites);
    const isFav: boolean = Boolean(favourites.find(({ id }) => id == product.id));

    const onBuy = () => {
        if (isInCart) navigate("/shop" + ROUTES.shop.shoppingcart);
        else dispatch(addToCart(product));
    };

    const onFavourite = () => {
        if (!isFav) dispatch(add(product));
        else dispatch(deleteByID([product.id]));
    };

    return (
        <div className={`mt-4 border-gray-100 flex items-center gap-2 ${className || ""}`}>
            <Button
                className="bg-primary mt-1 flex items-center space-x-1.5 justify-center max-sm:flex-1"
                onClick={onBuy}
            >
                {isInCart ? <BsCartCheckFill /> : <BiCartAdd className="text-2xl" />}
                <span className="text-lg">{isInCart ? "In Cart" : "Buy Now"}</span>
            </Button>
            <IconCircleButton
                icon={
                    isFav ? (
                        <BiSolidHeart className="text-2xl text-red-500 group-hover:text-white" />
                    ) : (
                        <BiHeart className="text-2xl transition text-secondary group-hover:text-white" />
                    )
                }
                className={`w-11 h-11 group  border ${isFav ? "bg-red-50" : ""}`}
                onClick={onFavourite}
            />
            {isShare && (
                <IconCircleButton
                    icon={
                        <BiShareAlt className="text-2xl transition text-secondary group-hover:text-white" />
                    }
                    className="w-11 h-11 group  border"
                />
            )}
        </div>
    );
};

export default DetailsActions;
