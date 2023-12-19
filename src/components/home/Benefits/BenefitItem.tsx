import { BenefitType } from "../../../interfaces";

type PropsType = {
	benefit: BenefitType;
	className?: string;
};

const BenefitItem = ({ className, benefit }: PropsType) => {
	return (
		<div className={`${className} bg-gray-100 p-4 rounded-lg`}>
			<div className="p-2 rounded-lg bg-white inline-block mb-2">
				<benefit.Icon className="text-secondary text-3xl" />
			</div>
			<article>
				<h4 className="text-xl font-bold mb-1 capitalize">{benefit.title}</h4>
				<p className="text-secondaryText">{benefit.description}</p>
			</article>
		</div>
	);
};

export default BenefitItem;
