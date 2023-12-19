type Props = {
	onToggleMore: () => void;
	isMore: boolean;
};

const MoreLessButton = ({ isMore, onToggleMore }: Props) => {
	return (
		<button className="text-sm text-primary font-bold underline ms-1" onClick={onToggleMore}>
			{!isMore ? "More..." : "Less"}
		</button>
	);
};

export default MoreLessButton;
