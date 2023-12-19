import { ReactNode } from "react";

type PropsType = {
	children: ReactNode;
	isOpen: boolean;
	className: string;
};

const BottomDialog = ({ isOpen, className, children }: PropsType) => {
	return (
		<div
			className={`${
				className || ""
			} fixed rounded-t-lg z-20 w-full bg-primary bg-opacity-5 max-h-96 overflow-auto transform transition-transform ${
				isOpen ? "translate-y-0" : "translate-y-full"
			}`}
		>
			{children}
		</div>
	);
};

export default BottomDialog;
