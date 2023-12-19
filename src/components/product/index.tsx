import Card from "../common/Card";
import TitleHeader from "../common/Titles/TitleHeader";
import ProductActions from "./ProductActions";
import { ProductCategriedInterface } from "../../interfaces/products";
import ProductRooms from "./ProductRooms";
import ProductStatus from "./ProductStatus";
import { useAppSelector } from "../../store";

type PropsType = {
    product: ProductCategriedInterface;
};

const Product = ({ product }: PropsType) => {
    const { cart } = useAppSelector((state) => state.cart);
    const { favourites } = useAppSelector((state) => state.favourites);
    const isInCart: boolean = Boolean(cart.find(({ id }) => product.id == id));
    const isFavorite: boolean = Boolean(favourites.find(({ id }) => product.id == id));
    return (
        <Card className="border border-gray-100 group flex flex-col">
            <div className="rounded-lg overflow-hidden bg-gray-100 mb-1 relative ">
                <ProductStatus rating={product.rating} isFavourite={isFavorite} isInCart={isInCart} />
                <img src={product.image} loading="lazy" alt="furniture" className="w-full h-full " />
                <div className="inset-0 absolute h-full w-full bg-black bg-opacity-40 backdrop-blur grid place-content-center opacity-0  transition  group-hover:opacity-100">
                    <ProductActions isInCart={isInCart} isFavorite={isFavorite} product={product} />
                </div>
            </div>
            <TitleHeader isH5 className="gap-2" title={product.name}>
                <div>
                    <span className="mr-px ">$</span>
                    <span className="text-lg font-medium">{product.price.toFixed(2)}</span>
                </div>
            </TitleHeader>
            <span className="capitalize text-secondaryText text-sm block mb-3 mt-1">{product.category}</span>
            <div className="flex justify-between gap-2 flex-wrap items-center mt-auto">
                <span className="inline-block text-sm rounded-full py-1 px-2 mt-auto bg-primary/5">
                    {product.brand}
                </span>
                <span className="text-xs capitalize text-primary">{product.material}</span>
            </div>
            <ProductRooms rooms={product.rooms} className="text-xs" />
        </Card>
    );
};

export default Product;
