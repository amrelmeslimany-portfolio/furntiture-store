import ScrollbarWrap from "../../../common/Scrollbar";
import SearchResults from "./SearchResults";
import SearchHistory from "./SearchHistory";
import Divider from "../../../common/Divider";
import { ProductCategriedInterface } from "../../../../interfaces/products";
import Empty from "../../../common/Messages/Empty";

type Props = {
    result: ProductCategriedInterface[];
    input: string;
    onVisit: (value: string) => void;
    onHistoryClick: (value: string) => void;
};

const SearchList = ({ result, input, onVisit, onHistoryClick }: Props) => {
    return (
        <ScrollbarWrap className="bg-white rounded-lg p-4 mt-4 h-72">
            {input.length && !result.length ? <Empty message="Np Products With This Name" /> : null}
            {result.length ? (
                <>
                    <Divider text="Results" />
                    <SearchResults onVisit={(value) => onVisit(value)} products={result} />
                </>
            ) : (
                <>
                    <Divider text="History" />
                    <SearchHistory onClick={onHistoryClick} />
                </>
            )}
        </ScrollbarWrap>
    );
};

export default SearchList;
