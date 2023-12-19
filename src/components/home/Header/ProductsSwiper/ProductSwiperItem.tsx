import { CategoryType } from "../../../../interfaces/products";
import Card from "../../../common/Card";
import CategoryFooter from "../../../common/Category/CategoryFooter";

type PropsType = {
    product: CategoryType;
    className?: string;
};

const ProductSwiperItem = ({ product, className }: PropsType) => {
    return (
        <Card className={className}>
            <div className="overflow-hidden rounded-lg h-72 lg:h-80 mb-2">
                <img
                    src={product.img}
                    loading="lazy"
                    alt="furniture"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <CategoryFooter
                title={product.title}
                path={product.path}
                quantity={product.restQuantity.toString()}
            />
        </Card>
    );
};

export default ProductSwiperItem;
