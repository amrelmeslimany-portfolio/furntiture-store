import ReactDOM from "react-dom";
import { ReactNode } from "react";

const FloatingButton = ({ icon, onClick }: { icon: ReactNode; onClick: () => void }) => {
	return ReactDOM.createPortal(
		<button
			onClick={onClick}
			className="w-14 h-14 text-2xl shadow-lg bg-red-600/80 backdrop-blur-lg grid place-content-center rounded-full text-white fixed bottom-20  right-1/2 z-10"
		>
			{icon}
		</button>,
		document.body
	);
};

export default FloatingButton;
