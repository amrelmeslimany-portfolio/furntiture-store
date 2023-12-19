import ImgOverlay from "../../common/ImgOverlay";
import CategoryFooter from "../../common/Category/CategoryFooter";
import { CategoryType } from "../../../interfaces/products";

type PropsType = { category: CategoryType; height: string };

const CategoryItem = ({ category, height }: PropsType) => {
	return (
		<ImgOverlay height={height} img={category.img}>
			<div className="absolute bottom-0 left-0 right-0 p-4">
				<CategoryFooter
					path={category.path}
					quantity={category.restQuantity.toString()}
					title={category.title}
					linkClassname="bg-white text-black text-xl"
					quentityClassname="text-gray-100 text-lg"
					titleClassname="text-white"
				/>
			</div>
		</ImgOverlay>
	);
};

export default CategoryItem;
