import TitleHeader from "../Titles/TitleHeader";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

type PropsType = {
	path: string;
	title: string;
	quantity: string;
	quentityClassname?: string;
	linkClassname?: string;
	titleClassname?: string;
};

const CategoryFooter = ({
	path,
	quantity,
	title,
	quentityClassname,
	titleClassname,
	linkClassname,
}: PropsType) => {
	return (
		<>
			<TitleHeader title={title} className={`${titleClassname || ""} mb-1`}>
				<Link
					className={`${
						linkClassname || "bg-primary text-xl text-white"
					} ml-1 rounded-full  p-1 mt-1 shrink-0 self-start`}
					to={path}
				>
					<FiArrowUpRight />
				</Link>
			</TitleHeader>
			<small
				className={`${quentityClassname || "text-secondaryText text-base"}`}
			>
				<b>{quantity}+</b> items
			</small>
		</>
	);
};

export default CategoryFooter;
