import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Collapse from "../../common/Collapse";
import Checkbox from "../../common/Form/Checkbox";
import { FurnitureBrands } from "../../../constants/enums/furniture";
import MoreLessButton from "../../common/Button/More";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { toggleSelection } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import useClearQuery from "../../../hooks/useClearQuery";

const Brands = Object.keys(FurnitureBrands);

const BrandsFilter = () => {
	const [selected, setSelected, setSearchParams, isInQuery] = useParamsFilter<string[]>(
		ProductsFilterEnum.Brand
	);
	const [isMore, setIsMore] = useState<boolean>(false);
	const brandsSize = Brands.length;
	const sliceBrands: number = isMore ? brandsSize - 1 : 10;

	const onSelectBrand: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		const tempSelected = event.target.value;
		setSelected((previous) => toggleSelection(tempSelected, previous || []));
	};

	const onToggleMore = () => setIsMore((prev) => !prev);

	useClearQuery(isInQuery, setSearchParams, setSelected);

	return (
		<Collapse title="Brands" defaultValue={selected!.length > 0}>
			{Object.values(FurnitureBrands)
				.slice(0, sliceBrands)
				.map((brand) => (
					<Checkbox
						key={uuid4()}
						checked={selected?.includes(brand) || false}
						label={brand}
						value={brand}
						onChange={onSelectBrand}
					/>
				))}
			{brandsSize > 10 && <MoreLessButton isMore={isMore} onToggleMore={onToggleMore} />}
		</Collapse>
	);
};

export default BrandsFilter;
