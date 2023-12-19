import { useEffect } from "react";
import Slider, { SliderProps } from "rc-slider";
import _debounce from "lodash/debounce";
import Collapse from "../../common/Collapse";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { handleMinMax } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import "rc-slider/assets/index.css";

const PriceFilter = () => {
	const [rangePrice, setRangePrice] = useParamsFilter<number[]>(ProductsFilterEnum.Price);

	const defaultRange: number[] =
		rangePrice.length == 0
			? [0, 10000]
			: rangePrice.map((value) => handleMinMax(value, { min: 0 }));

	const onChange: SliderProps["onChange"] = (value) => {
		setRangePrice(value as number[]);
	};

	useEffect(() => {
		if (rangePrice[0] <= 0 && rangePrice[1] >= 10000) setRangePrice([]);
	}, [rangePrice]);

	return (
		<Collapse title="Price" defaultValue={true}>
			<div className="flex items-center justify-between my-4">
				<span className="text-sm">
					From: <span className="border p-1 rounded">${defaultRange[0]}</span>
				</span>
				<span className="text-sm">
					To: <span className="border p-1 rounded">${defaultRange[1]}</span>
				</span>
			</div>
			<div className="px-2">
				<Slider
					range
					min={0}
					max={10000}
					defaultValue={defaultRange}
					step={100}
					classNames={{
						track: "bg-primary",
						handle:
							"border-primary shadow-primary hover:border-primary active:border-primary opacity-100",
					}}
					onChange={onChange}
				/>
			</div>
		</Collapse>
	);
};

export default PriceFilter;
