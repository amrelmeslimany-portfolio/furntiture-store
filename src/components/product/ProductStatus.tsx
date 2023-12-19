import OneStarRate from "../common/Rating";
import { BsCartCheckFill, BsHeartFill } from "react-icons/bs";

type Props = {
	rating: number;
	isFavourite: boolean;
	isInCart: boolean;
};

const ProductStatus = ({ isFavourite, isInCart, rating }: Props) => {
	return (
		<div className="flex flex-col absolute right-2 top-2 items-end gap-1 ">
			<div className="segment bg-white p-1 w-fit  ">
				<OneStarRate rate={rating} />
			</div>
			{isInCart && (
				<div className="segment bg-primary/10 p-1 w-fit  ">
					<BsCartCheckFill className="text-primary" />
				</div>
			)}
			{isFavourite && (
				<div className="segment bg-red-50 p-1 w-fit ">
					<BsHeartFill className="text-red-400" />
				</div>
			)}
		</div>
	);
};

export default ProductStatus;
