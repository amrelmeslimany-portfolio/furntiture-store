import { Swiper, SwiperSlide } from "swiper/react";
import ImgOverlay from "../../common/ImgOverlay";
import Tag from "../../common/Tag";
import { BiDownArrowAlt } from "react-icons/bi";
import { MAIN_SHOP_HEADERS } from "../../../constants";
import { Autoplay } from "swiper/modules";
import Contianer from "../../common/Container";
import "swiper/css";
import "swiper/modules";

const ShopHeader = () => {
	return (
		<Swiper autoplay={{ disableOnInteraction: false, delay: 5000 }} modules={[Autoplay]} allowTouchMove={false}>
			{MAIN_SHOP_HEADERS.map((header) => (
				<SwiperSlide key={header.id}>
					<ImgOverlay img={header.image} height="h-[600px]" rounded="rounded-none" bgClassname="from-black to-black opacity-60 z-10">
						<Contianer>
							<article className="text-center relative z-20 max-md:pt-[30%] md:pt-[12%] ">
								<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize">{header.title}</h1>
								<p className="md:text-lg capitalize text-gray-300 mt-2 max-w-md mx-auto">{header.text}</p>
								<Tag text="Products Below" parentClassName="mx-auto bg-white capitalize mt-4" Icon={BiDownArrowAlt} />
							</article>
						</Contianer>
					</ImgOverlay>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ShopHeader;
