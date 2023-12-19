import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid4 } from "uuid";
import ProductSwiperItem from "./ProductSwiperItem";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { CategoryType } from "../../../../interfaces/products";
import { FURNITURE_IMG1, FURNITURE_IMG2 } from "../../../../constants/images";
import { ROUTES } from "../../../../constants/routes";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../../constants/breackpoints";
import SwiperButton from "../../../common/Button/SwiperButtons";
import { ArrowsEnum } from "../../../../constants/enums";
import { NavigationSettings } from "../../../../utils/classes/navigation-settings";
import "swiper/css";
import "swiper/css/navigation";
import { RoomsEnum } from "../../../../constants/enums/furniture";

const navigationSettings = new NavigationSettings(".btn-swiper-previous", ".btn-swiper-next");

const ITEMS: CategoryType[] = [
    {
        img: FURNITURE_IMG1,
        path: `${ROUTES.main.Shop}?rooms=${RoomsEnum.LivingRoom}`,
        restQuantity: 56,
        title: "Living Room",
    },
    {
        img: FURNITURE_IMG2,
        path: `${ROUTES.main.Shop}?rooms=${RoomsEnum.Bedroom}`,
        restQuantity: 45,
        title: "Bed Room",
    },
];

const BREAKPOINT: SwiperOptions["breakpoints"] = {
    0: {
        slidesPerView: 1,
    },
    576: {
        slidesPerView: "auto",
    },
};

const ProductsSwiper = () => {
    const isTablet = useMediaQuery({ query: `(min-width: ${SCREENS.md})` });
    return (
        <>
            <Swiper
                navigation={navigationSettings.getOptions}
                breakpoints={BREAKPOINT}
                spaceBetween={20}
                className="px-5 md:pr-5 md:pl-0"
                modules={[Navigation]}
            >
                {ITEMS.map((product: CategoryType) => (
                    <SwiperSlide key={uuid4()} className="w-64 md9:w-72 lg:w-96">
                        <ProductSwiperItem key={product.title} product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`flex mt-4 space-x-2 ${isTablet ? "justify-start" : "justify-center"} `}>
                <SwiperButton arrow={ArrowsEnum.previous} btnClassname={navigationSettings.getClasses.prev} />
                <SwiperButton arrow={ArrowsEnum.next} btnClassname={navigationSettings.getClasses.next} />
            </div>
        </>
    );
};

export default ProductsSwiper;
