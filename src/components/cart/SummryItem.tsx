import { memo } from "react";

type Props = { text: string; value: number | string; status?: "default" | "strong"; color?: string };

const SummryItem = ({ text, value, status = "default", color }: Props) => {
    if (status === "strong")
        return (
            <p className="flex justify-between space-x-2 my-2 font-bold text-lg">
                <span>{text}</span>
                <span>{value}</span>
            </p>
        );

    return (
        <p className={`flex justify-between space-x-2 my-1 ${color || ""}`}>
            <span className="text-secondaryText">{text}</span>
            <span>{value}</span>
        </p>
    );
};

export default memo(SummryItem);
