import { v4 as uuid4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { MAIN_FURTNITURE_CATEGORIES } from "../../../../constants";
import FilterTypeItem from "./FilterTypeItem";
import "swiper/css";

type Props = {
	onSelect: (type: string) => void;
	selectedType: string;
};

const FilterTypes = ({ onSelect, selectedType }: Props) => {
	return (
		<Swiper slidesPerView={"auto"} className="px-5 sm:px-16 py-2" spaceBetween={10}>
			{MAIN_FURTNITURE_CATEGORIES.sort().map((type) => (
				<SwiperSlide key={uuid4()} className="w-28">
					<FilterTypeItem
						key={type}
						onSelect={(value) => onSelect(value)}
						isActive={selectedType === type}
						text={type}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default FilterTypes;
