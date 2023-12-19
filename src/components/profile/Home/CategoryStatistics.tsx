import { VictoryContainer, VictoryPie } from "victory";
import { STATISTICS_COLORS } from "../../../constants/theme";

const CategoryStatistics = ({ className }: { className?: string }) => {
	const data = [
		{ x: "Chairs", y: 8 },
		{ x: "Bedroom", y: 5 },
		{ x: "Dining", y: 3 },
		{ x: "Office", y: 6 },
		{ x: "Outdoor", y: 4 },
	];
	return (
		<section className={`bordered-segment ${className || ""}`}>
			<h6 className="font-semibold capitalize">Most Categories</h6>
			<p className="text-sm text-secondaryText capitalize">The Moste 5 Categories you ordered</p>
			<VictoryPie
				name="Most Categories"
				width={500}
				containerComponent={<VictoryContainer style={{ height: "auto" }} />}
				colorScale={STATISTICS_COLORS}
				padAngle={({ datum }) => datum.y}
				innerRadius={80}
				data={data}
				style={{ labels: { fontSize: 20 } }}
			/>
		</section>
	);
};

export default CategoryStatistics;
