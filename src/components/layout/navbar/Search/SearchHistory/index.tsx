import { FiClock } from "react-icons/fi";
import { v4 } from "uuid";
import { useAppSelector } from "../../../../../store";

type Props = {
    onClick: (value: string) => void;
};

const SearchHistory = ({ onClick }: Props) => {
    const { searchHistory } = useAppSelector((state) => state.products);
    return searchHistory.length ? (
        <ul>
            {searchHistory.map((item) => (
                <li
                    key={v4()}
                    className="flex gap-4 truncate items-center cursor-pointer hover:bg-primary group rounded p-2"
                    onClick={() => onClick(item)}
                >
                    <FiClock className="flex-shrink-0 text-secondaryText group-hover:text-gray-200" />
                    <span className="capitalize truncate group-hover:text-white">{item}</span>
                </li>
            ))}
        </ul>
    ) : (
        <span>You haven't search on product yet Please Input Product Name</span>
    );
};

export default SearchHistory;
