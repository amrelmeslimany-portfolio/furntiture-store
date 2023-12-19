import Dropdown from "../../../common/Dropdown";
import SortingList from "./SortingList";
import { BiFilterAlt, BiSortAZ } from "react-icons/bi";
import ShowingTotal from "../../../common/Messages/ShowingTotal";

type Props = {
    onFilterClick: () => void;
    total: number;
    showing: number;
    isEmpty: boolean;
};

const ProductsHeader = ({ onFilterClick, showing, total, isEmpty = false }: Props) => {
    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex space-x-2">
                <button className="btn-dropdown" onClick={onFilterClick}>
                    <BiFilterAlt />
                </button>
                <Dropdown
                    buttonClassName="btn-dropdown text-lg"
                    button={<BiSortAZ />}
                    options={<SortingList />}
                />
            </div>
            {!isEmpty && (
                <div className="flex-shrink-0 h-auto">
                    <ShowingTotal showing={showing} total={total} />
                </div>
            )}
        </div>
    );
};

export default ProductsHeader;
