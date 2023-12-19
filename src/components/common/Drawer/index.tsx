import { ReactNode } from "react";
import ReactDOM from "react-dom";

type PropsType = {
	isOpen: boolean;
	children: ReactNode;
	className?: string;
};
const Drawer = ({ children, isOpen, className }: PropsType) => {
	return ReactDOM.createPortal(
		<div
			className={`${
				className || ""
			} z-50 fixed inset-y-0 left-0 bg-white shadow-md transform ${
				isOpen ? "translate-x-0" : "translate-x-full"
			} transition-transform duration-300 ease-in-out`}
		>
			{children}
		</div>,
		document.body
	);
};

export default Drawer;
