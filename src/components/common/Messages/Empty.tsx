import { ReactNode } from "react";
import { EMPTY_IMG } from "../../../constants/images";

type Props = {
    message: string;
    src?: string;
    className?: string;
    imgSize?: string;
    extra?: ReactNode;
};

const Empty = ({ message, className, extra, src, imgSize }: Props) => {
    return (
        <div className={`text-center my-4 ${className || ""}`}>
            <img src={src || EMPTY_IMG} alt="Empty" className={`mx-auto  ${imgSize || "w-40 h-40"}`} />
            <p className="text-secondaryText mt-3 capitalize text-sm">{message}</p>
            {extra}
        </div>
    );
};

export default Empty;
