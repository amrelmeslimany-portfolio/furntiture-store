import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { MAIN_FURTNITURE_CATEGORIES } from "../../../constants";
import Collapse from "../../common/Collapse";
import Checkbox from "../../common/Form/Checkbox";
import MoreLessButton from "../../common/Button/More";
import useParamsFilter from "../../../hooks/useParamsFilter";
import { toggleSelection } from "../../../utils/functions";
import { ProductsFilterEnum } from "../../../constants/enums";
import useClearQuery from "../../../hooks/useClearQuery";

const CategoriesFilter = () => {
    const [selected, setSelected, setSearchParams, isInQuery] = useParamsFilter<string[]>(
        ProductsFilterEnum.Category
    );
    const [isMore, setIsMore] = useState<boolean>(false);

    const categorySize = MAIN_FURTNITURE_CATEGORIES.length;
    const sliceCategories: number = isMore ? categorySize - 1 : 10;

    const onSelectCategory: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const tempSelected = event.target.value;
        setSelected((previous) => toggleSelection(tempSelected, previous || []));
    };

    const onToggleMore = () => setIsMore((prev) => !prev);

    useClearQuery(isInQuery, setSearchParams, setSelected);

    return (
        <Collapse title="Categories" defaultValue>
            {MAIN_FURTNITURE_CATEGORIES.sort()
                .slice(1, sliceCategories)
                .map((category) => (
                    <Checkbox
                        key={uuid4()}
                        checked={selected?.includes(category) || false}
                        label={category}
                        value={category}
                        onChange={onSelectCategory}
                    />
                ))}
            {categorySize > 10 && <MoreLessButton isMore={isMore} onToggleMore={onToggleMore} />}
        </Collapse>
    );
};

export default CategoriesFilter;
