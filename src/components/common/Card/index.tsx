import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
	width?: string;
	padding?: "p-2" | "p-4" | "p-6" | "p-10";
	bgColor?: string;
	className?: string;
};

const Card = ({ className, children, padding, width, bgColor }: PropsType) => {
	return (
		<div
			className={` shadow-sm rounded-lg ${bgColor || "bg-white"} ${
				padding || "p-2"
			}  ${width || "w-full "} ${className || ""}`}
		>
			{children}
		</div>
	);
};

export default Card;
