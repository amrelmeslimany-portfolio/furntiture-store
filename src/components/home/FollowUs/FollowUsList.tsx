import { Swiper, SwiperSlide } from "swiper/react";
import { MAIN_FOLLOWUS } from "../../../constants";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const BREAKPOINTS: SwiperOptions["breakpoints"] = {
	0: {
		centeredSlides: true,
	},
	640: {
		centeredSlides: false,
	},
};

const FollowUsList = () => {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={15}
			autoplay={{ disableOnInteraction: false, stopOnLastSlide: false }}
			allowTouchMove={false}
			modules={[Autoplay]}
			loop
			breakpoints={BREAKPOINTS}
		>
			{MAIN_FOLLOWUS.map((item) => (
				<SwiperSlide
					key={item.id}
					className="rounded-lg overflow-hidden w-52 h-52"
				>
					<img
						draggable="false"
						src={item.img}
						alt="furniture follow us room"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default FollowUsList;
