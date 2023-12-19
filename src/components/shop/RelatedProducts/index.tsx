import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCategriedInterface } from "../../../interfaces/products";
import TitleHeader from "../../common/Titles/TitleHeader";
import SwiperButton from "../../common/Button/SwiperButtons";
import { NavigationSettings } from "../../../utils/classes/navigation-settings";
import { ArrowsEnum } from "../../../constants/enums";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Product from "../../product";
import "swiper/css";
import "swiper/modules";

type Props = {
	products: ProductCategriedInterface[];
	title: string;
};

const navigationSettings = new NavigationSettings(
	".btnrelated-swiper-previous",
	".btnrelated-swiper-next"
);
const ResponsiveSwiper: SwiperOptions["breakpoints"] = {
	0: {
		slidesPerView: 1,
	},
	640: {
		slidesPerView: 2,
	},
	992: {
		slidesPerView: 3,
	},
};

const RelatedProducts = ({ products, title }: Props) => {
	return (
		<div className="my-10">
			<TitleHeader title={title} className="mb-5 capitalize flex-wrap">
				<div className={`flex mt-4 space-x-2`}>
					<SwiperButton
						arrow={ArrowsEnum.previous}
						btnClassname={navigationSettings.getClasses.prev}
					/>
					<SwiperButton arrow={ArrowsEnum.next} btnClassname={navigationSettings.getClasses.next} />
				</div>
			</TitleHeader>
			<Swiper
				modules={[Navigation]}
				breakpoints={ResponsiveSwiper}
				navigation={navigationSettings.getOptions}
				slidesPerView={3}
				spaceBetween={20}
			>
				{products.map((product) => (
					<SwiperSlide key={product.id}>
						<Product product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default RelatedProducts;
