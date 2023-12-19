import Empty from "../common/Messages/Empty";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const EmptyCheckout = () => {
    const navigate = useNavigate();
    return (
        <div className="my-10 text-center">
            <Empty message="Firstly add products to cart and checkout" />
            <button
                className="base-btn text-primary hover:underline"
                onClick={() => navigate("/shop" + ROUTES.shop.shoppingcart)}
            >
                Go to Cart
            </button>
        </div>
    );
};

export default EmptyCheckout;
