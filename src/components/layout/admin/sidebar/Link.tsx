import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type Props = { to?: string; text: string; icon: IconType; onClick?: (() => void) | null };

const Link: React.FC<Props> = ({ text, to, icon: Icon, onClick }) => {
    const classes = "mb-2 flex py-2 px-4 transition  items-center gap-4 rounded-full";

    const iconText = (
        <>
            <Icon size={21} />
            <span>{text}</span>
        </>
    );

    if (!to && onClick) {
        return (
            <button
                onClick={onClick}
                className={`${classes} text-gray-600 hover:bg-primary hover:text-white w-full`}
            >
                {iconText}
            </button>
        );
    }

    return (
        <NavLink
            to={to!}
            className={({ isActive }) => `
            ${classes}
            ${isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-primary hover:text-white"}`}
        >
            {iconText}
        </NavLink>
    );
};

export default Link;
