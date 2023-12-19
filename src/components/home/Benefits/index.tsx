import { v4 as uuid4 } from "uuid";
import BenefitItem from "./BenefitItem";
import Contianer from "../../common/Container";
import TitleWithText from "../../common/Titles/TitleWithText";
import { MAIN_BENEFITS } from "../../../constants";
import { ShapeText } from "../../../assets/SVGs/TextShape";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";

const Benefits = () => {
	return (
		<div className="py-20 relative">
			<ShapeText
				width={200}
				height={100}
				text="Explore Now"
				bgColor="#688272"
				bgColorOuter="white"
				className="absolute -top-[53px] left-1/2 transform -translate-x-1/2"
			/>
			<Contianer>
				<LineSmallHeader text="benefits" />
				<TitleWithText
					title="What makes us the preferred choice ?"
					text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
							asperiores vitae odio voluptates facilis explicabo tempore,"
				/>
				<div className="grid xs:grid-cols-2 md:grid-cols-3 md9:grid-cols-4 gap-4 mt-10">
					{MAIN_BENEFITS.map((benefit) => (
						<BenefitItem
							key={uuid4()}
							benefit={benefit}
							className="grid-span-1"
						/>
					))}
				</div>
			</Contianer>
		</div>
	);
};

export default Benefits;
