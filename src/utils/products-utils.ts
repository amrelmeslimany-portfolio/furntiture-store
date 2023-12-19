import { orderBy } from "lodash";
import { ProductsFilterEnum } from "../constants/enums";
import { ProductDetailsType, ProductsQueryType } from "../interfaces/products";
import { analysisList } from "./functions";

export class ProductsQueryActions {
	public products: ProductDetailsType[];
	public query: ProductsQueryType;

	private filterKeys: string[] = [];
	private sortKeys: string[] = [];

	constructor(products: ProductDetailsType[], searchParams: URLSearchParams) {
		this.products = products;
		this.query = Object.fromEntries(searchParams);
		this.filterKeys = this.getFilterKeys();
		this.sortKeys = this.getSortingKeys();
	}

	public filter(): ProductsQueryActions {
		this.products = this.products.filter((product: ProductDetailsType) => {
			return this.filterKeys.every((key) => {
				const productValue = product[key as keyof ProductDetailsType];
				const queryValue = this.query[key as keyof ProductsQueryType]?.split(",") || null;
				if (queryValue && typeof productValue !== "undefined") {
					let convertedList = analysisList(queryValue as []); // Convert list to list number if items are number
					return this.handleFilterStatus(key as ProductsFilterEnum, convertedList, productValue);
				}
				return true; // If query value is not provided, consider it a match
			});
		});

		return this;
	}

	public sort(): ProductsQueryActions {
		if (this.sortKeys.length) {
			this.products = orderBy(
				this.products,
				[this.query["sortBy"] as string],
				[this.query["orderBy"] as "asc" | "desc"]
			);
		} else {
			this.products = orderBy(this.products, ["rating"], ["desc"]);
		}
		return this;
	}

	private getFilterKeys(): string[] {
		return Object.keys(this.query).filter((item) => item != "sortBy" && item != "orderBy");
	}

	private getSortingKeys(): string[] {
		return Object.keys(this.query).filter((item) => item == "sortBy" || item == "orderBy");
	}

	private handleFilterStatus(
		key: ProductsFilterEnum,
		list: [] | undefined,
		productValue: any
	): boolean {
		if (key === ProductsFilterEnum.Rating) {
			return (list as number[]).includes(Math.floor(productValue as number));
		}
		if (key === ProductsFilterEnum.Price) {
			const [min, max] = list as number[];
			return (productValue as number) >= min && (productValue as number) <= max;
		}
		if (key === ProductsFilterEnum.Rooms) {
			return list!.some((room) => (productValue as []).includes(room));
		}
		// For non-numeric values like brand
		return list!.includes(productValue as never);
	}
}
