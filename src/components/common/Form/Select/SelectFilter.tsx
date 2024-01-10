import Select, { GroupBase, Props } from "react-select";
import { MAIN_COLORS } from "../../../../constants/theme";
import Empty from "../../Messages/Empty";

function SelectFilter<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option> & { isError?: boolean }
>(props: Props<Option, IsMulti, Group> & { isError?: boolean }) {
    return (
        <Select
            classNames={{
                menu: () => "overflow-hidden py-2",
            }}
            noOptionsMessage={() => <Empty message="Not Found" />}
            theme={(theme) => ({
                ...theme,

                colors: {
                    ...theme.colors,
                    primary25: MAIN_COLORS.primary_5,
                    primary: MAIN_COLORS.primary,
                    primary50: MAIN_COLORS.primary,
                },
            })}
            styles={{
                control: (base) => ({
                    ...base,
                    boxShadow: "none",
                    borderRadius: 50,
                    paddingBlock: "3px",
                    border: props.isError ? "1px solid red" : "",
                    ":hover": {
                        border: props.isError ? "1px solid red" : "",
                    },
                }),
                multiValue: (base) => ({
                    ...base,
                    borderRadius: "5rem",
                    backgroundColor: "#68827220",
                    paddingInline: "2px",
                }),
                menu: (base) => ({ ...base, borderRadius: 20 }),
            }}
            {...props}
        />
    );
}

export default SelectFilter;
