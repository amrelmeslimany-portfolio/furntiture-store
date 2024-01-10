import { ReactNode } from "react";
import TitleHeader from "../Titles/TitleHeader";

type PropsType = {
    children: ReactNode;
    width?: string;
    padding?: "p-2" | "p-4" | "p-6" | "p-10";
    bgColor?: string;
    title?: string;
    className?: string;
};

const Card = ({ className, children, padding, width, bgColor, title }: PropsType) => {
    return (
        <div
            className={` shadow-sm rounded-lg ${bgColor || "bg-white"} ${padding || "p-2"}  ${
                width || "w-full "
            } ${className || ""}`}
        >
            {title && <TitleHeader title={title} isH6 children className="mb-3" />}
            {children}
        </div>
    );
};

export default Card;
