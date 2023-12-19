import { HTMLAttributes, ReactNode } from "react";
import Button from ".";
import { SizesType } from "../../../interfaces";

type IconCircleButtonProps = {
	icon: ReactNode;

	iconSize?: SizesType;
	className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const IconCircleButton = ({
	icon,

	iconSize,
	className,
	...props
}: IconCircleButtonProps) => {
	return (
		<Button
			className={`rounded-[50%] grid place-content-center text-${
				iconSize || "xl"
			} ${className || " "}`}
			{...props}
		>
			{icon}
		</Button>
	);
};

export default IconCircleButton;
