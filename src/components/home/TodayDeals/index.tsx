import { ArrowsEnum } from "../../../constants/enums";
import { NavigationSettings } from "../../../utils/classes/navigation-settings";
import SwiperButton from "../../common/Button/SwiperButtons";
import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import TodayDealsList from "./TodayDealsList";

const navigationSettings = new NavigationSettings(".btnswiper-today-prev", ".btnswiper-today-next");

const TodayDeals = () => {
	return (
		<div className="pb-20 pt-5 relative">
			<Contianer className="mb-10 ">
				<LineSmallHeader text="today deals" />
				<article className="flex justify-between gap-5 max-xs:flex-col">
					<h2 className="h2 sm:max-w-[400px] ">unmissable daily deals Await: shop now and save!</h2>
					<div className="flex gap-2 xs:self-end">
						<SwiperButton
							arrow={ArrowsEnum.previous}
							btnClassname={navigationSettings.getClasses.prev}
						/>
						<SwiperButton
							arrow={ArrowsEnum.next}
							btnClassname={navigationSettings.getClasses.next}
						/>
					</div>
				</article>
			</Contianer>
			<TodayDealsList navigationSettings={navigationSettings.getOptions} />
		</div>
	);
};

export default TodayDeals;
