import { IconType } from "react-icons";

type PropsType = {
	text: string;
	Icon?: IconType;
	parentClassName?: string;
	iconParentClassName?: string;
	iconClassName?: string;
};

const Tag = ({
	text,
	Icon,
	parentClassName,
	iconClassName,
	iconParentClassName,
}: PropsType) => {
	return (
		<div
			className={`${
				parentClassName || "bg-white"
			} rounded-3xl py-1 pr-2 pl-1 shadow-sm flex items-center w-fit space-x-1`}
		>
			{Icon && (
				<div
					className={`${
						iconParentClassName || "bg-primary"
					} bg-opacity-10 p-1  rounded-full `}
				>
					<Icon className={` ${iconClassName || "text-primary"} text-xl`} />
				</div>
			)}

			<span>{text}</span>
		</div>
	);
};

export default Tag;
