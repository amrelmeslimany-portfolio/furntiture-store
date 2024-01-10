import { PiCheck, PiX } from "react-icons/pi";
import { CustomerReviewType } from "../../../interfaces";
import IconCircleButton from "../../common/Button/CircleIcon";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";

type Props = {
    isLast: boolean;
    review: CustomerReviewType;
    isAdmin?: boolean;
};

const CustomerReview = ({ isLast, review, isAdmin }: Props) => {
    return (
        <li className={`${isLast ? "" : "border-b border-gray-100"} pb-3 `}>
            <div className="flex items-center">
                <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full flex-shrink-0 object-cover"
                />
                <div className="ml-2 flex-1">
                    <p className="text-secondary capitalize  font-semibold">{review.name}</p>
                    <MultipleStarsRating value={review.rating} starsClassName="text-sm" />
                    <p className="text-secondaryText text-sm">{new Date(review.date).toDateString()}</p>
                </div>
                {isAdmin && (
                    <div className="flex gap-2 ms-auto">
                        <IconCircleButton
                            icon={<PiCheck className="text-primary group-hover:text-white transition" />}
                            className="group w-8 h-8 bg-white"
                        />
                        <IconCircleButton
                            icon={<PiX className="text-red-500 group-hover:text-white transition" />}
                            className="group w-8 h-8 bg-white"
                        />
                    </div>
                )}
            </div>
            <p className="mt-2 text-gray-700">{review.body}</p>
        </li>
    );
};

export default CustomerReview;
