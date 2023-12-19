import Tag from "../../../common/Tag";

type PropsType = {
	onSelect: (text: string) => void;
	text: string;
	isActive?: boolean;
};

const FilterTypeItem = ({ text, isActive, onSelect }: PropsType) => {
	const activedClasses = "bg-secondary text-white";

	return (
		<button onClick={() => onSelect(text)} className="w-full">
			<Tag
				text={text}
				parentClassName={`border capitalize w-full  justify-center text-secondaryText ${
					isActive ? activedClasses : ""
				} hover:bg-secondary hover:text-white transition`}
			/>
		</button>
	);
};

export default FilterTypeItem;
