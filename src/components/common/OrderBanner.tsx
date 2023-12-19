import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const OrderBanner = ({ className }: { className?: string }) => {
	return (
		<div
			className={`flex-wrap bg-gray-100 rounded-lg p-4 flex justify-between items-center gap-4 ${
				className || "mt-4"
			}`}
		>
			<article>
				<h5 className="font-semibold text-xl capitalize">Your Orders</h5>
				<p className="text-sm text-secondaryText capitalize">
					visit your orders and more informations
				</p>
			</article>
			<Link
				to={"/shop" + ROUTES.shop.orders}
				className="flex-shrink-0 btn h-fit bg-primary rounded-full max-xs:w-full text-center"
			>
				Orders
			</Link>
		</div>
	);
};

export default OrderBanner;
