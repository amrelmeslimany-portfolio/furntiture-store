import Head from "../../components/common/Head";
import Contianer from "../../components/common/Container";
import Breadcrumb from "../../components/common/Breadcrumb";
import { BreadcrumbType } from "../../interfaces";
import { ProductCategriedInterface } from "../../interfaces/products";
import { MAIN_PRODUCTS } from "../../constants";
import RelatedProducts from "../../components/shop/RelatedProducts";
import FavouritesBody from "../../components/favourites";

const BREADCRUMBS: BreadcrumbType[] = [
	{ label: "Home", url: "/" },
	{ label: "Shop", url: "/shop" },
	{ label: "Favourites", isCurrentPage: true },
];

const Favourites = () => {
	return (
		<>
			<Head title="Favourites" />
			<Contianer className="py-10">
				<Breadcrumb items={BREADCRUMBS} />
				<FavouritesBody />
				<RelatedProducts products={MAIN_PRODUCTS.slice(0, 5) as ProductCategriedInterface[]} title="Recommandtions" />
			</Contianer>
		</>
	);
};

export default Favourites;
