import { FiXCircle } from "react-icons/fi";
import TitleHeader from "../../common/Titles/TitleHeader";
import BrandsFilter from "./BrandsFilter";
import CategoriesFilter from "./CategoriesFilter";
import MaterialsFilter from "./MaterialsFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import { useSearchParams } from "react-router-dom";
import RoomsFilter from "./RoomsFilter";

type Props = {
    onClose?: () => void;
    className?: string;
};

const Aside = ({ onClose, className }: Props) => {
    const [, setSearchParams] = useSearchParams();
    const onClearFilter = () => setSearchParams({});
    return (
        <aside className={className}>
            <TitleHeader title="Filter" className="mb-2">
                {onClose && (
                    <button onClick={onClose}>
                        <FiXCircle className="text-primary group-hover:text-white transition text-xl" />
                    </button>
                )}
            </TitleHeader>
            <div className="mt-2 flex flex-col gap-2">
                <CategoriesFilter />
                <RoomsFilter />
                <BrandsFilter />
                <RatingFilter />
                <PriceFilter />
                <MaterialsFilter />
                <button className="text-primary base-btn bg-primary/5 my-3" onClick={onClearFilter}>
                    Clear Filter
                </button>
            </div>
        </aside>
    );
};

export default Aside;
