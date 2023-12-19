import { v4 as uuid4 } from "uuid";
import Collapse from "../../common/Collapse";
import Checkbox from "../../common/Form/Checkbox";
import MultipleStarsRating from "../../common/Rating/MultipleStarsRating";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { toggleSelection } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import useClearQuery from "../../../hooks/useClearQuery";

const Ratings: number[] = [5, 4, 3, 2, 1];

const RatingFilter = () => {
	const [selected, setSelected, setSearchParams, isInQuery] = useParamsFilter<number[]>(
		ProductsFilterEnum.Rating
	);

	const onSelectRate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const tempSelected: number = Number(event.target.value);
		setSelected((previous) => toggleSelection(tempSelected, previous || []));
	};

	useClearQuery(isInQuery, setSearchParams, setSelected);

	return (
		<Collapse title="Rating" defaultValue>
			{Ratings.map((rate) => (
				<Checkbox
					key={uuid4()}
					className="w-full"
					checked={selected?.includes(rate) || false}
					value={rate}
					label={
						<div className="flex items-center space-x-1 w-full justify-between">
							<MultipleStarsRating starsClassName="text-lg" value={rate} />
							<span className="text-sm text-secondaryText">(0{rate})</span>
						</div>
					}
					onChange={onSelectRate}
				/>
			))}
		</Collapse>
	);
};

export default RatingFilter;
