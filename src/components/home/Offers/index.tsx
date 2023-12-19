import {
	FURNITURE_IMG1,
	FURNITURE_IMG2,
	OFFICE_IMG,
} from "../../../constants/images";
import ImgOverlay from "../../common/ImgOverlay";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import ImgBorderOverlay from "./ImgBorderOverlay";

const OffersHome = () => {
	return (
		<div className="grid  sm:grid-cols-2 gap-5 pb-20 pt-10 ">
			<div className="h-[500px] flex gap-5 flex-row-reverse max-sm:hidden">
				<ImgBorderOverlay img={OFFICE_IMG} className="w-1/2" />
				<ImgBorderOverlay img={FURNITURE_IMG1} className="w-44" />
				<ImgBorderOverlay img={FURNITURE_IMG2} className="w-44" />
			</div>

			<ImgOverlay
				bgClassname="from-black to-black opacity-60"
				rounded="sm:rounded-l-lg"
				height="h-[500px]"
				img={OFFICE_IMG}
			>
				<section className="z-10 relative max-sm:px-5 sm:p-10 flex flex-col items-start justify-center h-full max-sm:container max-sm:mx-auto sm:max-w-lg">
					<LineSmallHeader text="Offers" />
					<h3 className="text-3xl font-bold text-white capitalize max-w-xs">
						Get Upto 50% Offer on festival season!
					</h3>
					<p className="text-gray-300 mt-3 mb-5">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						dolorem minus ipsam repellendus molestias voluptates tempore
						obcaecat
					</p>
					<button className="btn rounded-full bg-primary">Redeem Now</button>
				</section>
			</ImgOverlay>
		</div>
	);
};

export default OffersHome;
