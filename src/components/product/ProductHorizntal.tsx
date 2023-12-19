import { ProductHorizantalInterface } from "../../interfaces/products";
import Button from "../common/Button";
import Card from "../common/Card";
import OneStarRate from "../common/Rating";
import Prices from "./Prices";

type PropsType = {
	product: ProductHorizantalInterface;
};

const ProductHorizntal = ({ product }: PropsType) => {
	return (
		<Card className="border border-gray-100 flex gap-4 max-xs:flex-col" padding="p-4">
			<div className="h-80 w-full xs:w-60 rounded overflow-hidden flex-shrink-0">
				<img src={product.image} alt="chair" className="h-full w-full object-cover" />
			</div>
			<section className="self-center">
				<h4 className="text-xl capitalize font-bold">{product.name}</h4>
				<Prices priceBefore={product.price} priceAfter={product.price * 0.9} />
				<div className="flex items-center space-x-2">
					<OneStarRate rate={product.rating} size="lg" color="text-gray-700" />
					<span className="text-gray-700">(40 reviews)</span>
				</div>
				<p className="text-secondaryText capitalize my-4">{product.description}</p>
				<Button className="bg-primary mt-1">Buy Now</Button>
			</section>
		</Card>
	);
};

export default ProductHorizntal;
