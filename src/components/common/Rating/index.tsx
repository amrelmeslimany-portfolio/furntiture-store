import { BiSolidStar } from "react-icons/bi";

import { SizesType } from "../../../interfaces";

type PropsType = { rate: number; size?: SizesType; color?: string };

const OneStarRate = ({ rate, size, color }: PropsType) => {
	return (
		<div className="flex items-center space-x-1 text-secondaryText">
			<BiSolidStar className={`text-orange-400 text-${size || "sm"}`} />
			<span className={`text-${size || "sm"} ${color || ""}`}>
				{rate.toFixed(1)}
			</span>
		</div>
	);
};

export default OneStarRate;
