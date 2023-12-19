import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Collapse from "../../common/Collapse";
import Checkbox from "../../common/Form/Checkbox";
import { RoomsEnum } from "../../../constants/enums/furniture";
import MoreLessButton from "../../common/Button/More";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { toggleSelection } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import useClearQuery from "../../../hooks/useClearQuery";

const Rooms = Object.keys(RoomsEnum);

const RoomsFilter = () => {
	const [selected, setSelected, setSearchParams, isInQuery] = useParamsFilter<string[]>(
		ProductsFilterEnum.Rooms
	);
	const [isMore, setIsMore] = useState<boolean>(false);

	const roomsSize = Rooms.length;
	const sliceRooms: number = isMore ? roomsSize - 1 : 10;

	const onSelectMaterial: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const tempSelected = event.target.value;
		setSelected((previous) => toggleSelection(tempSelected, previous || []));
	};

	const onToggleMore = () => setIsMore((prev) => !prev);

	useClearQuery(isInQuery, setSearchParams, setSelected);

	return (
		<Collapse title="Rooms" defaultValue={selected!.length > 0}>
			{Object.values(RoomsEnum)
				.slice(0, sliceRooms)
				.map((material) => (
					<Checkbox
						key={uuid4()}
						checked={selected?.includes(material) || false}
						label={material}
						value={material}
						onChange={onSelectMaterial}
					/>
				))}
			{roomsSize > 10 && <MoreLessButton isMore={isMore} onToggleMore={onToggleMore} />}
		</Collapse>
	);
};

export default RoomsFilter;
