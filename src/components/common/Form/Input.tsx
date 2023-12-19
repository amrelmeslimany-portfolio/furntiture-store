import React from "react";
import { IconType } from "react-icons";
import { SizesType } from "../../../interfaces";

type PropsType = {
    Icon: IconType;
    parentClassname?: string;
    iconColor?: string;
    isFull?: boolean;
    iconSize?: SizesType;
    iconWrapClassname?: string;
    placeholder: string;
    isError?: boolean;
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
    placeholder,
    ...props
}: PropsType) => {
    return (
        <div
            className={`flex space-x-1 border rounded-full p-1.5 bg-white  ${
                isError ? "border-red-500" : ""
            } ${isSuccess ? "border-green-500" : ""} ${isFull ? "w-full" : ""}  ${parentClassname || ""}`}
        >
            <div
                className={`
                bg-opacity-10 grid place-content-center rounded-[50%] flex-shrink-0
                bg-${iconColor || "primary"} 
                ${iconWrapClassname || "w-9 h-9"}`}
            >
                <Icon className={`text-${iconColor || "primary"} text-${iconSize || "xl"}`} />
            </div>
            <input
                type={type}
                className="bg-transparent w-[90%] focus:outline-none active:outline-none"
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
};

export default InputIcon;
