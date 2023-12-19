import { VictoryBar, VictoryChart, VictoryLabel } from "victory";
import { STATISTICS_COLORS } from "../../../constants/theme";

const TotalStatistics = ({ className }: { className?: string }) => {
	const data = [
		{ x: "Cart", y: 8 },
		{ x: "Favourites", y: 5 },
		{ x: "Orders", y: 10 },
	];
	return (
		<section className={`bordered-segment md9:mt-5 ${className || ""}`}>
			<h6 className="font-semibold capitalize">Total Activities</h6>
			<VictoryChart domainPadding={60}>
				<VictoryBar
					labels={({ datum }) => datum.y}
					style={{
						labels: { fill: "white" },
						data: { fill: ({ index }) => STATISTICS_COLORS[index as number] },
					}}
					labelComponent={<VictoryLabel dy={30} />}
					data={data}
				/>
			</VictoryChart>
		</section>
	);
};

export default TotalStatistics;
