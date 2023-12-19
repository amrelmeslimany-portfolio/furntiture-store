import Divider from "../Divider";
import { IconType } from "react-icons";

type Props = {
	smallTitle: string;
	Icon: IconType;
	title: string;
	description?: string;
	className?: string;
};

const InfoCard = ({ Icon, smallTitle, title, description, className }: Props) => {
	return (
		<>
			<Divider text={smallTitle} />
			<div className={`bordered-segment bg-primary bg-opacity-5 ${className || ""}`}>
				<Icon className="text-5xl mb-2 text-primary" />
				<article>
					<h6 className="font-semibold capitalize">{title}</h6>
					{description && <p className="text-sm text-gray-500">{description}</p>}
				</article>
			</div>
		</>
	);
};

export default InfoCard;
