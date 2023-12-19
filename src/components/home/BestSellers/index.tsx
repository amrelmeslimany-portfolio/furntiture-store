import { FiArrowUpRight } from "react-icons/fi";
import { MAIN_FURTNITURE_CATEGORIES } from "../../../constants";
import Contianer from "../../common/Container";
import { LineSmallHeader } from "../../common/Titles/TitleHeader";
import TitleWithText from "../../common/Titles/TitleWithText";
import Product from "../../product";
import FilterTypes from "./FilterTypesSwiper/FilterTypes";
import { ProductCategriedInterface, ProductDetailsType } from "../../../interfaces/products";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store";
import Empty from "../../common/Messages/Empty";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const BestSellers = () => {
    const { products } = useAppSelector((state) => state.products);
    const [selectedType, setSelectedType] = useState<string>(MAIN_FURTNITURE_CATEGORIES[0]);
    const [filteredProducts, setFilteredProducts] = useState<ProductDetailsType[] | null>();
    const isEmpty: boolean = products.length == 0 || filteredProducts?.length == 0;

    useEffect(() => {
        setFilteredProducts(
            selectedType != "All" ? products.filter((item) => item.category == selectedType) : null
        );
    }, [selectedType]);

    return (
        <div className="py-20 relative">
            <Contianer className="mb-10">
                <LineSmallHeader text="best sellers" />
                <TitleWithText
                    title="Our best seller products"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
							asperiores vitae odio voluptates facilis explicabo tempore,"
                />
            </Contianer>
            <FilterTypes selectedType={selectedType} onSelect={(value) => setSelectedType(value)} />
            {isEmpty && <Empty message="No Products With this category" />}
            {!isEmpty && (
                <Contianer>
                    <div className="grid gap-5 mt-4 sm:grid-cols-2 md9:grid-cols-3 xl:grid-cols-4">
                        {(filteredProducts || products).slice(0, 6).map((product) => (
                            <Product key={product.id} product={product as ProductCategriedInterface} />
                        ))}
                    </div>

                    <Link
                        to={{
                            pathname: ROUTES.main.Shop,
                            search: selectedType !== "All" ? `?category=${selectedType}` : "",
                        }}
                        className="base-btn bg-primary text-white rounded-full flex space-x-2 items-center mx-auto mt-10 w-fit"
                    >
                        <span>All Collections</span>
                        <FiArrowUpRight className="text-xl" />
                    </Link>
                </Contianer>
            )}
        </div>
    );
};

export default BestSellers;
