import { Fragment, useCallback } from "react";
import { v4 } from "uuid";
import { Menu } from "@headlessui/react";
import { SortItem } from "./SortingItem";
import { BiTime, BiSortAZ, BiSortZA, BiStopCircle } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { IconType } from "react-icons";
import { SortingType } from "../../../../../interfaces";

interface SortItemType extends SortingType {
	name: string;
	icon: IconType;
}

const items: SortItemType[] = [
	{ name: "A to Z", icon: BiSortAZ, orderBy: "asc", sortBy: "name" },
	{ name: "Z to A", icon: BiSortZA, orderBy: "desc", sortBy: "name" },
	{ name: "to Newst", icon: BiTime, orderBy: "asc", sortBy: "createdAt" },
	{ name: "to Oldest", icon: BiTime, orderBy: "desc", sortBy: "createdAt" },
];

const SortingList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const onDefault = () => {
		if (!searchParams.has("sortBy") || !searchParams.has("sortBy")) return;
		searchParams.delete("sortBy");
		searchParams.delete("orderBy");
		setSearchParams(searchParams);
	};

	const onItemClick = useCallback((sorting: SortingType) => {
		Object.entries(sorting).forEach(([key, value]) => searchParams.set(key, value));
		setSearchParams(searchParams);
	}, []);

	return (
		<Fragment>
			<Menu.Item>
				<SortItem Icon={BiStopCircle} text="Default" onClick={onDefault} />
			</Menu.Item>
			{items.map((item) => (
				<Menu.Item key={v4()}>
					<SortItem
						Icon={item.icon}
						text={item.name}
						onClick={() => onItemClick({ orderBy: item.orderBy, sortBy: item.sortBy })}
					/>
				</Menu.Item>
			))}
		</Fragment>
	);
};

export default SortingList;
