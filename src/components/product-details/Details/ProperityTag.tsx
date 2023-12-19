import { IconType } from "react-icons";

const ProperityTag = ({ Icon, value, affix }: { Icon: IconType; value: string; affix?: string }) => {
	return (
		<li className="bg-white shadow-sm py-1 px-1.5 rounded-full flex space-x-1 items-center border border-gray-50">
			<div className="bg-primary p-2 rounded-[50%] bg-opacity-10 text-primary">
				<Icon className="text-sm" />
			</div>
			{affix && (
				<p className="text-sm">
					<span className="mr-0.5">{value}</span>
					<span className="text-primary">{affix}</span>
				</p>
			)}
			{!affix && <p>{value}</p>}
		</li>
	);
};

export default ProperityTag;
