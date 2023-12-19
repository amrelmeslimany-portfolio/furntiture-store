import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import CategoryItem from "./CategoryItem";
import { CATEGORIES } from "../../../constants";

const HomeCategory = () => {
	return (
		<div className="py-20 bg-gray-100">
			<Contianer>
				<article className="text-center mb-10">
					<LineSmallHeader text="category" className="justify-center" />
					<h2 className="h2 sm:max-w-md sm:mx-auto">
						Discover our unique collection of exclusive categories
					</h2>
				</article>
				<div className="grid  sm:grid-cols-2  md9:grid-cols-4 sm:grid-rows-2 gap-4">
					<div className="md9:col-start-1 md9:col-end-2">
						<CategoryItem
							height="h-[250px] sm:h-full"
							category={CATEGORIES[0]}
						/>
					</div>
					<div>
						<CategoryItem
							height="h-[250px] sm:h-full"
							category={CATEGORIES[1]}
						/>
					</div>
					<div className="md9:col-start-1 md9:col-end-3">
						<CategoryItem
							height="h-[250px] sm:h-full"
							category={CATEGORIES[0]}
						/>
					</div>
					<div className="md9:col-start-3 md9:col-end-5 md9:row-start-1 md9:row-end-3">
						<CategoryItem
							height="h-[250px] md9:h-[600px]"
							category={CATEGORIES[1]}
						/>
					</div>
				</div>
			</Contianer>
		</div>
	);
};

export default HomeCategory;
