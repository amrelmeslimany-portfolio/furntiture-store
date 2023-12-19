import { OverallStasticType } from "../../../interfaces/products";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";

type Props = OverallStasticType;

const StatisticItem = ({ label, rating, statistic }: Props) => {
	return (
		<li className="flex text-sm text-secondaryText justify-between space-x-1">
			<span className="capitalize">{label}:</span>
			<div className="flex items-center space-x-1">
				<MultipleStarsRating value={rating} starsClassName="text-sm" />
				<span>({statistic})</span>
			</div>
		</li>
	);
};

export default StatisticItem;
