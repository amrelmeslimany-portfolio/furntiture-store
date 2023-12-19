import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { v4 } from "uuid";
import { CHAIR_IMG1, CHAIR_IMG2, CHAIR_IMG3, CHAIR_IMG4, CHAIR_IMG5, CHAIR_IMG6, CHAIR_IMG7 } from "../../../../constants/images";
import { getMagnifiedTranslation } from "../../../../utils/functions";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/modules";
import "./ImagesGellay.css";

const images = [CHAIR_IMG1, CHAIR_IMG2, CHAIR_IMG3, CHAIR_IMG4, CHAIR_IMG5, CHAIR_IMG6, CHAIR_IMG7];

const defaultTranslation = "translate(-50% , -50%)";

const BREAKPOINTS: SwiperOptions["breakpoints"] = {
	0: {
		direction: "horizontal",
	},
	992: {
		direction: "vertical",
	},
};

const ImagesGellary = () => {
	const [currentImage, setCurrentImage] = useState<string>(CHAIR_IMG1);
	const [imageStyle, setImageStyle] = useState<string>(defaultTranslation);
	const [isScrollEnable, setIsScrollEnable] = useState<boolean>(true);
	const imageWrap = useRef<HTMLDivElement | null>(null);

	const onMouseMove = (event: React.MouseEvent) => {
		setImageStyle(getMagnifiedTranslation(event, imageWrap));
	};
	const onTouchStart = (event: React.TouchEvent) => {
		setIsScrollEnable(false);
		setImageStyle(getMagnifiedTranslation(event, imageWrap));
	};

	const onMouseLeave = () => {
		if (!isScrollEnable) setIsScrollEnable(true);
		setImageStyle(defaultTranslation);
	};

	useEffect(() => {
		if (!isScrollEnable) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "auto";
			};
		}
	}, [isScrollEnable]);

	return (
		<div className="w-full flex gap-1 max-md9:flex-col sm:w-5/12 ">
			<Swiper
				slidesPerView={"auto"}
				breakpoints={BREAKPOINTS}
				spaceBetween={4}
				modules={[Navigation]}
				navigation={{ nextEl: ".swiperdetails-button-next", prevEl: ".swiperdetails-button-prev" }}
				className="max-md9:order-1 flex-shrink-0 max-md9:w-full md9:h-[500px] "
			>
				{images.map((img) => (
					<SwiperSlide
						key={v4()}
						className={`w-20  h-20 cursor-pointer hover:border border-primary transition ${currentImage == img ? "border" : ""}`}
						onClick={() => setCurrentImage(img)}
					>
						<img src={img} alt="chair" />
					</SwiperSlide>
				))}
				<div className="swiperdetails-button-prev shadow-md" children={<FiChevronLeft />} />
				<div className="swiperdetails-button-next shadow-md" children={<FiChevronRight />} />
			</Swiper>
			<div
				ref={imageWrap}
				className="flex-grow max-sm:h-[400px] max-md9:h-[350px] md9:h-[500px]  overflow-hidden relative max-md9:order-0"
				onMouseMove={onMouseMove}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchStart}
				onTouchCancel={onMouseLeave}
				onTouchEnd={onMouseLeave}
				onMouseLeave={onMouseLeave}
			>
				<img
					src={currentImage}
					className="transition-transform duration-75  absolute top-1/2 left-1/2 pointer-events-none  object-cover w-full h-full"
					style={{ transform: imageStyle }}
					alt="chair"
				/>
			</div>
		</div>
	);
};

export default ImagesGellary;
