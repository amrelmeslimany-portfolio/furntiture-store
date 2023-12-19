import Head from "../../components/common/Head";
import Contianer from "../../components/common/Container";
import RelatedProducts from "../../components/shop/RelatedProducts";
import { MAIN_PRODUCTS } from "../../constants";
import { ProductCategriedInterface } from "../../interfaces/products";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BreadcrumbType } from "../../interfaces";
import { ROUTES } from "../../constants/routes";
import { Link, useParams } from "react-router-dom";
import Details from "../../components/product-details/Details";
import Specification from "../../components/product-details/Specifications";
import Reviews from "../../components/product-details/Reviews";
import Empty from "../../components/common/Messages/Empty";

const BREADCRUMBS: BreadcrumbType[] = [
    { label: "Home", url: ROUTES.main.Home },
    { label: "Shop", url: ROUTES.main.Shop },
    { label: "Product Details", isCurrentPage: true },
];

// NOTE For testing
const productSpecifications = [
    { label: "Brand", value: "Acme Furniture" },
    { label: "Dimensions", value: 'W: 40", H: 30", D: 20"' },
    { label: "Color", value: "Espresso" },
    { label: "Brand", value: "Acme Furniture" },
    { label: "Dimensions", value: 'W: 40", H: 30", D: 20"' },
    { label: "Color", value: "Espresso" },
    { label: "Brand", value: "Acme Furniture" },
    { label: "Dimensions", value: 'W: 40", H: 30", D: 20"' },
    { label: "Color", value: "Espresso" },
    { label: "Brand", value: "Acme Furniture" },
    { label: "Dimensions", value: 'W: 40", H: 30", D: 20"' },
    { label: "Color", value: "Espresso" },
    { label: "Brand", value: "Acme Furniture" },
    { label: "Dimensions", value: 'W: 40", H: 30", D: 20"' },
    { label: "Color", value: "Espresso" },
];

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>(); // FIXME fetch product details by id
    const foundProduct = MAIN_PRODUCTS.find((current) => current.id == id)!;
    // FIXME you will form or modal details on CategiredProduct here

    return (
        <>
            <Head title="Product Details" />
            <Contianer className="py-10">
                {/* Breadcrumb */}
                <Breadcrumb items={BREADCRUMBS} />
                {/* No Product Found */}
                {!foundProduct && (
                    <Empty
                        message="No Product Found Please Select Another Product"
                        extra={
                            <Link
                                className="mt-3 block base-btn bg-primary rounded-full w-28 text-white mx-auto "
                                to="/shop"
                            >
                                Shop
                            </Link>
                        }
                    />
                )}
                {/* Details Body */}
                {foundProduct && (
                    <div>
                        <Details product={foundProduct} />
                        <Specification specifications={productSpecifications} />
                        <Reviews />
                    </div>
                )}

                {/* Related Products */}
                <RelatedProducts
                    products={MAIN_PRODUCTS.slice(0, 5) as ProductCategriedInterface[]}
                    title="You viewed"
                />
            </Contianer>
        </>
    );
};

export default ProductDetails;
