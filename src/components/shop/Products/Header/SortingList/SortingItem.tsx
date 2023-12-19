import { HTMLAttributes, forwardRef } from "react";
import { IconType } from "react-icons";

export const SortItem = forwardRef(
	(
		{ Icon, text, ...props }: { Icon: IconType; text: string } & HTMLAttributes<HTMLButtonElement>,
		ref: React.ClassAttributes<HTMLButtonElement>["ref"]
	) => {
		return (
			<button ref={ref} className="dropdown-item" {...props}>
				<Icon className="text-xl text-primary" />
				<span>{text}</span>
			</button>
		);
	}
);
