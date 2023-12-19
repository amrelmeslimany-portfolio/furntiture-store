import { BiCheckCircle, BiCircle } from "react-icons/bi";

const CheckboxIcon = ({ checked, className }: { checked: boolean; className?: string }) => {
    return checked ? (
        <BiCheckCircle className={`flex-shrink-0 text-primary ${className || "ms-auto"}`} />
    ) : (
        <BiCircle className={`flex-shrink-0 text-secondary ${className || "ms-auto"}`} />
    );
};

export default CheckboxIcon;
