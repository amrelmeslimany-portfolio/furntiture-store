import { ReactNode } from "react";

type Props = {
	text: string;
	extra?: ReactNode;
};

const Divider = ({ text, extra }: Props) => {
	return (
		<div className="my-2 flex justify-between gap-2 items-center">
			<small className="text-gray-500 font-normal">{text}</small>
			{extra && extra}
		</div>
	);
};

export default Divider;
