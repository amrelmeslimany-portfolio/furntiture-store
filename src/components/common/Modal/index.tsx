import React from "react";
import ReactDOM from "react-dom";

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	onOverlayClick?: () => void;
	contentClassname?: string;
};

const Modal = ({
	children,
	contentClassname,
	onOverlayClick,
	isOpen,
}: Props) => {
	const isTop = contentClassname?.includes("top-");
	const content: React.ReactNode | null = isOpen && (
		<div className="overlay-fixed z-50">
			<div
				className="backdrop-blur-xl  overlay-fixed bg-black bg-opacity-80"
				onClick={onOverlayClick}
			/>
			<div
				className={`absolute ${
					!isTop ? "top-1/2" : ""
				} left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
					contentClassname || ""
				}`}
			>
				{children}
			</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.body);
};

export default Modal;
