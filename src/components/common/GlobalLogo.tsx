import { LOGO_PNG } from "../../constants/images";

type Props = {
    textClassName?: string;
    className?: string;
    isText?: boolean;
    imgSize?: number;
};

const GlobalLogo = ({ textClassName, className, isText, imgSize }: Props) => {
    return (
        <div className={`flex space-x-3 ${className || ""}`}>
            <img src={LOGO_PNG} loading="lazy" width={imgSize || 40} />
            {isText && (
                <span className={`text-2xl font-[600] ${textClassName || "text-white"}`}>Furniture</span>
            )}
        </div>
    );
};

export default GlobalLogo;
