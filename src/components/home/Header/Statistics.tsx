import { Fragment } from "react";
import { MAIN_STATISTICS } from "../../../constants";
import { StatisticItemType } from "../../../interfaces";
import { v4 as uuid4 } from "uuid";

function StatisticsHeader() {
	return (
		<ul className="list-none flex space-x-2 max-sm:justify-between sm:space-x-6 items-center">
			{MAIN_STATISTICS.map(
				({ name, value }: StatisticItemType, index: number) => {
					if (index == MAIN_STATISTICS.length - 1)
						return <Static key={uuid4()} name={name} value={value} />;
					return (
						<Fragment key={uuid4()}>
							<Static name={name} value={value} />
							<span className="block h-14 w-px bg-gray-300" />
						</Fragment>
					);
				}
			)}
		</ul>
	);
}

const Static = ({ name, value }: StatisticItemType) => {
	return (
		<li className="flex flex-col space-y-2 text-center">
			<span className="text-3xl font-[700]">{value}+</span>
			<span className="capitalize text-secondaryText">{name}</span>
		</li>
	);
};

export default StatisticsHeader;
