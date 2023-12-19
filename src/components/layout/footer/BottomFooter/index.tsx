import {
	MAIN_FOOTER_LINKS,
	MAIN_SOCIAL_ICONS,
} from "../../../../constants/footer-links";
import IconCircleButton from "../../../common/Button/CircleIcon";
import Contianer from "../../../common/Container";
import GlobalLogo from "../../../common/GlobalLogo";
import { v4 as uuid4 } from "uuid";
import MapLinkList from "./MapLinkList";
import Copyright from "./Copyright";

const BottomFooter = () => {
	return (
		<div className="bg-secondary py-20">
			<Contianer>
				<div className="grid gap-4 sm:grid-cols-3  md:grid-flow-col">
					<div className="md:max-w-sm xs:col-span-2">
						<GlobalLogo />
						<p className="text-white text-opacity-60 text-sm my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							vitae illum consequuntur quis beatae laborum ab sequi optio quae,
							soluta, qui earum saepe sed corporis.
						</p>
						<ul className="flex gap-2 flex-wrap">
							{MAIN_SOCIAL_ICONS.map((Icon) => (
								<li key={uuid4()}>
									<IconCircleButton
										icon={<Icon />}
										className="bg-white bg-opacity-10 w-10 h-10"
									/>
								</li>
							))}
						</ul>
					</div>

					{MAIN_FOOTER_LINKS.map((item) => (
						<MapLinkList key={uuid4()} item={item} className="xl:w-44" />
					))}
				</div>
				<hr className="border-white opacity-20 mt-10" />
				<Copyright />
			</Contianer>
		</div>
	);
};

export default BottomFooter;
