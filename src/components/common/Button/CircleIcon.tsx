import { HTMLAttributes, ReactNode } from "react";
import Button from ".";
import { SizesType } from "../../../interfaces";
import { Link } from "react-router-dom";

type IconCircleButtonProps = {
    icon: ReactNode;
    iconSize?: SizesType;
    className?: string;
    link?: string;
} & HTMLAttributes<HTMLButtonElement>;

const IconCircleButton = ({ icon, iconSize, className, link, ...props }: IconCircleButtonProps) => {
    if (link) {
        return (
            <Link
                to={link}
                className={`
                rounded-[50%] grid place-content-center transition hover:bg-primary
                text-${iconSize || "xl"} ${className || " "}`}
            >
                {icon}
            </Link>
        );
    }
    return (
        <Button
            className={`rounded-[50%] grid place-content-center text-${iconSize || "xl"} ${className || " "}`}
            {...props}
        >
            {icon}
        </Button>
    );
};

export default IconCircleButton;
