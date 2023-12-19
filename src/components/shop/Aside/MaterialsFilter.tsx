import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Collapse from "../../common/Collapse";
import Checkbox from "../../common/Form/Checkbox";
import { FurnitureMaterials } from "../../../constants/enums/furniture";
import MoreLessButton from "../../common/Button/More";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { toggleSelection } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import useClearQuery from "../../../hooks/useClearQuery";

const Materials = Object.keys(FurnitureMaterials);

const MaterialsFilter = () => {
	const [selected, setSelected, setSearchParams, isInQuery] = useParamsFilter<string[]>(
		ProductsFilterEnum.Material
	);
	const [isMore, setIsMore] = useState<boolean>(false);

	const materialsSize = Materials.length;
	const sliceMaterials: number = isMore ? materialsSize - 1 : 10;

	const onSelectMaterial: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const tempSelected = event.target.value;
		setSelected((previous) => toggleSelection(tempSelected, previous || []));
	};

	const onToggleMore = () => setIsMore((prev) => !prev);

	useClearQuery(isInQuery, setSearchParams, setSelected);

	return (
		<Collapse title="Materials" defaultValue={selected!.length > 0}>
			{Object.values(FurnitureMaterials)
				.slice(0, sliceMaterials)
				.map((material) => (
					<Checkbox
						key={uuid4()}
						checked={selected?.includes(material) || false}
						label={material}
						value={material}
						onChange={onSelectMaterial}
					/>
				))}
			{materialsSize > 10 && <MoreLessButton isMore={isMore} onToggleMore={onToggleMore} />}
		</Collapse>
	);
};

export default MaterialsFilter;
