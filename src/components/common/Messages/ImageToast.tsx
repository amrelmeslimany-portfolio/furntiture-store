import { ToastParamsType } from "../../../interfaces";

const ImageToast = ({ src, text }: Pick<ToastParamsType, "src" | "text">) => {
	return (
		<div className="flex space-x-3 items-center">
			<img src={src} alt={text} className="w-12 h-12 rounded-xl object-cover" />
			<span className="text-secondary capitalize font-medium text-sm">{text}</span>
		</div>
	);
};

export default ImageToast;
