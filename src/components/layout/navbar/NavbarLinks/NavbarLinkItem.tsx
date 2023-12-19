import { ReactNode } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type PropsType = {
    text: string;
    to: string;
    unactivedClassName: string;
    onClick?: () => void;
    Icon?: IconType;
    actived?: ReactNode;
    className?: string;
};

export const NavbarLinkItem = ({
    text,
    to,
    Icon,
    actived,
    className,
    unactivedClassName,
    onClick,
}: PropsType) => {
    const whenActive = (isActive: boolean) => (isActive ? "text-primary font-bold" : unactivedClassName);

    return (
        <li className="relative text-left" onClick={onClick}>
            <NavLink to={to} className={`text-base group ${Icon ? "flex items-center space-x-4" : ""}`}>
                {({ isActive }) => (
                    <>
                        {Icon && (
                            <Icon className={`text-2xl group-hover:text-primary ${whenActive(isActive)}`} />
                        )}
                        {isActive && actived}
                        <span className={`${className || ""} hover:text-primary ${whenActive(isActive)}`}>
                            {text}
                        </span>
                    </>
                )}
            </NavLink>
        </li>
    );
};
