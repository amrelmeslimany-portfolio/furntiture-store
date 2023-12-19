import { BiChair, BiPlay } from "react-icons/bi";
import Tag from "../../common/Tag";
import Button from "../../common/Button";
import IconButton from "../../common/Button/IconButton";
import ProductsSwiper from "./ProductsSwiper/ProductsSwiper";
import StatisticsHeader from "./Statistics";
import Contianer from "../../common/Container";

const HomeHeader = () => {
	return (
		<header className="bg-gray-100 py-20">
			<Contianer>
				<div className="flex items-center gap-16   justify-between flex-col md:flex-row">
					<div className="flex flex-col space-y-8    md:w-3/4 lg:w-1/2">
						<Tag text="Award Furniture Store" Icon={BiChair} />
						<h2 className="text-4xl md:text-5xl font-bold capitalize ">
							Make your interior Minimalist
							<span className="text-primary"> &</span> Modern
						</h2>
						<p className="text-secondaryText font-normal text-xl ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Molestias, quibusdam.
						</p>
						<div className="flex items-center space-x-5">
							<Button className="bg-primary text-base">Get Started</Button>
							<IconButton text="watch video" Icon={BiPlay} />
						</div>
						<StatisticsHeader />
					</div>
					<div className="w-full md:max-w-[35%] lg:max-w-[50%]">
						<ProductsSwiper />
					</div>
				</div>
			</Contianer>
		</header>
	);
};

export default HomeHeader;
