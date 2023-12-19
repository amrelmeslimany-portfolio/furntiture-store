import { CustomerHistoryType } from "../../../../interfaces/customer";
import { ACTIONS_COLORS, CustomerRequestsIcons } from "../../../../constants/theme";
import { IconType } from "react-icons";
import IconCircleButton from "../../../common/Button/CircleIcon";

const HistoryItem = (props: CustomerHistoryType) => {
	const textColor = ACTIONS_COLORS[props.type].color;
	const iconClasses: string = `${textColor} ${ACTIONS_COLORS[props.type].bgColor}`;
	const Icon: IconType = CustomerRequestsIcons[props.request].icon;
	return (
		<li className="p-3 segment flex gap-3 mb-3">
			<div
				className={`md:w-20 md:h-20 w-14 h-14 flex-shrink-0 rounded-[50%] flex items-center justify-center bg-opacity-5 ${iconClasses}`}
			>
				<Icon className="md:text-4xl text-2xl" />
			</div>
			<div className="flex flex-auto justify-between gap-1.5 flex-wrap">
				<article>
					<small className={textColor}>{props.type}</small>
					<h6 className="font-semibold text-lg capitalize">{props.product}</h6>
					<p className="text-secondaryText text-sm">
						You {props.type} A Product To {props.request}
					</p>
				</article>
				<span className="text-sm text-secondaryText block xl:mt-2.5 font-medium flex-shrink-0">
					{props.date}
				</span>
			</div>
			<IconCircleButton
				icon={<Icon className={`group-hover:text-white transition ${textColor}`} />}
				className="w-10 h-10 ms-auto group"
			/>
		</li>
	);
};

export default HistoryItem;
