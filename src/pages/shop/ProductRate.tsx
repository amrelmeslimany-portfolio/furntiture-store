import Head from "../../components/common/Head";
import Contianer from "../../components/common/Container";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BreadcrumbType } from "../../interfaces";
import { ROUTES } from "../../constants/routes";
import { useParams } from "react-router-dom";
import { CHAIR_IMG1 } from "../../constants/images";
import TitleHeader from "../../components/common/Titles/TitleHeader";
import RateProductForm from "../../components/orders/RateProduct";

const BREADCRUMBS: BreadcrumbType[] = [
    { label: "Home", url: ROUTES.main.Home },
    { label: "Orders", url: ROUTES.main.Shop + ROUTES.shop.orders },
    { label: "Rate Product", isCurrentPage: true },
];

const ProductRate = () => {
    const { id } = useParams<{ id: string }>(); // FIXME fetch product details by id
    console.log(id);

    return (
        <>
            <Head title="Rate Product Name" />
            <Contianer className="py-10">
                {/* Breadcrumb */}
                <Breadcrumb items={BREADCRUMBS} />
                <div className="flex max-md:flex-col gap-5 mt-5">
                    <div className="w-full md:max-w-sm md9:max-w-xl  flex-shrink-0 h-[480px] ">
                        <img
                            src={CHAIR_IMG1}
                            loading="lazy"
                            alt="product name"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <section className="flex-1">
                        <TitleHeader title="Rate PRoduct Name" children="" />
                        <p className="text-sm text-secondaryText mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit . Sed nec diam ultricies,
                        </p>
                        <RateProductForm />
                    </section>
                </div>
            </Contianer>
        </>
    );
};

export default ProductRate;
