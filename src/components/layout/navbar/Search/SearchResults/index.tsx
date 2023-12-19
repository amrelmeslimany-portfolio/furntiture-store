import { Link } from "react-router-dom";
import { ProductCategriedInterface } from "../../../../../interfaces/products";

const SearchResults = ({
    products,
    onVisit,
}: {
    products: ProductCategriedInterface[];
    onVisit: (value: string) => void;
}) => {
    return (
        <div>
            {products.map((product) => (
                <Link
                    key={product.id}
                    to={`/shop/${product.id}`}
                    onClick={() => onVisit(product.name)}
                    className="flex gap-1 rounded items-center cursor-pointer group hover:bg-primary transition mb-3 hover:text-white overflow-hidden"
                >
                    <div className="w-14 h-16 flex-shrink-0">
                        <img src={product.image} alt="chair" className="w-full h-full" />
                    </div>
                    <article className="truncate p-2">
                        <h6 className="font-medium  capitalize w-full">{product.name}</h6>
                        <p className="capitalize text-xs text-secondaryText group-hover:text-gray-200">
                            {product.category}
                        </p>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export default SearchResults;
