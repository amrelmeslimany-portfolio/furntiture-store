import { HTMLAttributes } from "react";
import { IconType } from "react-icons";

type PropsType = {
	text: string;
	Icon: IconType;
	className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const IconButton = ({ text, Icon, className }: PropsType) => {
	return (
		<button
			className={`flex items-center space-x-2 text-base group ${
				className || ""
			}`}
		>
			<span className="block rounded-full bg-white shadow group-hover:shadow-md p-1 transition">
				<Icon className="text-secondary text-3xl group-hover:text-primary transition" />
			</span>
			<span className="text-secondary capitalize group-hover:text-primary transition font-medium">
				{text}
			</span>
		</button>
	);
};

export default IconButton;
