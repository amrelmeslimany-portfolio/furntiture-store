import { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Contianer from "../../components/common/Container";
import Head from "../../components/common/Head";
import Aside from "../../components/shop/Aside";
import Products from "../../components/shop/Products";
import { ROUTES } from "../../constants/routes";
import { BreadcrumbType } from "../../interfaces";
import Drawer from "../../components/common/Drawer";
import { useMediaQuery } from "react-responsive";
import { getScreen } from "../../utils/functions";
import { SCREENS } from "../../constants/breackpoints";
import ScrollbarWrap from "../../components/common/Scrollbar";
import RelatedProducts from "../../components/shop/RelatedProducts";
import ShopHeader from "../../components/shop/Header";
import { MAIN_PRODUCTS } from "../../constants";
import { ProductCategriedInterface } from "../../interfaces/products";

const BREADCRUMBS: BreadcrumbType[] = [
    {
        label: "Home",
        url: ROUTES.main.Home,
    },

    {
        label: "Shop",
        isCurrentPage: true,
    },
];

const Shop = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const isTablet = useMediaQuery(getScreen(SCREENS["2md"]));
    const onFilterClick = () => setIsFilterOpen((prev) => !prev);

    return (
        <>
            <Head title="Shop" />
            <ShopHeader />
            <Contianer className="py-10">
                <Breadcrumb items={BREADCRUMBS} />
                <div className="flex gap-10 mt-4">
                    {/* NOTE Large Screens */}
                    {isTablet && <Aside className={`flex-shrink-0 ${!isFilterOpen ? "w-60" : "hidden"}`} />}
                    {/* NOTE Small Screens */}
                    {!isTablet && isFilterOpen && (
                        <Drawer isOpen={isFilterOpen} className="w-72">
                            <ScrollbarWrap className="h-full p-4">
                                <Aside onClose={onFilterClick} />
                            </ScrollbarWrap>
                        </Drawer>
                    )}
                    <Products className="flex-1" onFilterClick={onFilterClick} />
                </div>
                <RelatedProducts
                    products={MAIN_PRODUCTS.slice(0, 5) as ProductCategriedInterface[]}
                    title="You viewed"
                />
            </Contianer>
        </>
    );
};

export default Shop;
