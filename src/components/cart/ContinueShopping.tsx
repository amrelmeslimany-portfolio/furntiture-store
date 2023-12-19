import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ContinueShopping = () => {
	return (
		<Link className="text-primary text-center mt-3" to={ROUTES.main.Shop}>
			Continue Shopping
		</Link>
	);
};

export default ContinueShopping;
