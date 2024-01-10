import React from "react";
import { IconType } from "react-icons";
import { SizesType } from "../../../interfaces";

type PropsType = {
    Icon?: IconType;
    parentClassname?: string;
    iconColor?: string;
    isFull?: boolean;
    iconSize?: SizesType;
    iconWrapClassname?: string;
    placeholder: string;
    isError?: boolean;
    apprex?: string;
    isSuccess?: boolean;
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputIcon = ({
    Icon,
    parentClassname,
    iconColor,
    isFull,
    iconSize,
    isError,
    isSuccess,
    iconWrapClassname,
    type,
    apprex,
    placeholder,
    ...props
}: PropsType) => {
    return (
        <div
            className={`flex space-x-1.5 border rounded-full  bg-white  
            ${isError ? "border-red-500" : ""} 
            ${isSuccess ? "border-green-500" : ""} 
            ${isFull ? "w-full" : ""}  
            ${parentClassname || ""}
            ${Icon ? "p-1.5" : "py-2 px-2.5"}`}
        >
            {Icon && (
                <div
                    className={`
                bg-opacity-10 grid place-content-center rounded-[50%] flex-shrink-0
                bg-${iconColor || "primary"} 
                ${iconWrapClassname || "w-8 h-8"}`}
                >
                    <Icon className={`text-${iconColor || "primary"} text-${iconSize || "lg"}`} />
                </div>
            )}
            <input
                type={type}
                className="bg-transparent w-[90%] focus:outline-none active:outline-none"
                placeholder={placeholder}
                {...props}
            />
            {apprex && (
                <span className="flex-shrink-0 ms-auto text-gray-400 border-s ps-2.5 uppercase font-medium text-sm block">
                    {apprex}
                </span>
            )}
        </div>
    );
};

export default InputIcon;
