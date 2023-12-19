import { useSearchParams } from "react-router-dom";
import { ProductCategriedInterface, ProductDetailsType } from "../../../interfaces/products";
import { useAppSelector } from "../../../store";
import Pagination from "../../common/Pagination";
import Product from "../../product";
import ProductsHeader from "./Header";
import { useEffect, useRef, useState } from "react";
import { ProductsQueryActions } from "../../../utils/products-utils";
import Empty from "../../common/Messages/Empty";

type Props = {
    onFilterClick: () => void;
    className?: string;
};

const Products = ({ onFilterClick, className }: Props) => {
    const [searchParams] = useSearchParams();
    const { products } = useAppSelector((state) => state.products);
    const [filterdProducts, setFilterdProducts] = useState<ProductDetailsType[]>([]);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleProduts = new ProductsQueryActions(products, searchParams);
        setFilterdProducts(handleProduts.filter().sort().products);

        if (wrapRef.current && searchParams.size && !handleProduts.query.price) {
            wrapRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [searchParams, wrapRef]);

    return (
        <div className={className} ref={wrapRef}>
            <ProductsHeader
                onFilterClick={onFilterClick}
                total={products.length}
                showing={filterdProducts.length}
                isEmpty={products.length == 0}
            />
            {!filterdProducts.length && <Empty message="no products found" />}
            {filterdProducts.length > 0 && (
                <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center gap-2">
                    {filterdProducts.slice(0, 12).map((product) => (
                        <Product product={product as ProductCategriedInterface} key={product.id} />
                    ))}
                </div>
            )}
            <Pagination currentPage={1} totalPages={10} onPageChange={console.log} />
        </div>
    );
};

export default Products;
