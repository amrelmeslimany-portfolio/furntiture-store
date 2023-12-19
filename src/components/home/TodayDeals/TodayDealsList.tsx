import { Swiper, SwiperSlide } from "swiper/react";
import { ProductHorizantalInterface } from "../../../interfaces/products";
import ProductHorizntal from "../../product/ProductHorizntal";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { v4 as uuid4 } from "uuid";
import { useAppSelector } from "../../../store";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
	navigationSettings: SwiperOptions["navigation"];
};

const TodayDealsList = ({ navigationSettings }: Props) => {
	const { products } = useAppSelector((state) => state.products);
	return (
		<Swiper
			slidesPerView={"auto"}
			className="px-5 sm:px-16 py-2"
			spaceBetween={20}
			modules={[Navigation]}
			navigation={navigationSettings}
		>
			{products.slice(0, 3).map((product) => (
				<SwiperSlide key={uuid4()} className="max-xs:w-80 xs:w-[520px]">
					<ProductHorizntal key={product.id} product={product as ProductHorizantalInterface} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default TodayDealsList;
