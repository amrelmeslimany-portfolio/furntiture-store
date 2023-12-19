import { IconType } from "react-icons";

const ShippingItem = ({
	Icon,
	label,
	value,
	className,
}: {
	Icon: IconType;
	label: string;
	value: string;
	className: string;
}) => {
	return (
		<p className="capitalize text-secondary">
			<Icon className={`${className || ""} max-xs:inline-block max-xs:me-2`} />
			{label}: <b className={className}>{value}</b>
		</p>
	);
};

export default ShippingItem;
