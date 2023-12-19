import { padStartZero } from "../../../utils/functions";

const Badge = ({ value, className }: { value: number; className?: string }) => {
	if (value == 0) return;
	return (
		<span
			className={`
            absolute text-white flex-center text-xs w-5 h-5 rounded-full  
            ${className || "bg-red-600 -top-0.5 -right-1.5"}`}
		>
			{padStartZero(value)}
		</span>
	);
};

export default Badge;
