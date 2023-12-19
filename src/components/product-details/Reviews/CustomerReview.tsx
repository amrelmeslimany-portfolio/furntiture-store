import { CustomerReviewType } from "../../../interfaces";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";

type Props = {
	isLast: boolean;
	review: CustomerReviewType;
};

const CustomerReview = ({ isLast, review }: Props) => {
	return (
		<li className={`${isLast ? "" : "border-b border-gray-100"} pb-3 `}>
			<div className="flex items-center">
				<img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover" />
				<div className="ml-2">
					<p className="text-secondary capitalize  font-semibold">{review.name}</p>
					<MultipleStarsRating value={review.rating} starsClassName="text-sm" />
					<p className="text-secondaryText text-sm">{new Date(review.date).toDateString()}</p>
				</div>
			</div>
			<p className="mt-2 text-gray-700">{review.body}</p>
		</li>
	);
};

export default CustomerReview;
