import React, { HTMLAttributes } from "react";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";

type CheckboxType = React.InputHTMLAttributes<HTMLInputElement>;

type Props = {
    checked: boolean;
    label?: string | React.ReactNode;
    value: CheckboxType["value"];
    onChange: CheckboxType["onChange"];
    className?: string;
    iconClassName?: string;
} & HTMLAttributes<HTMLInputElement>;

const Checkbox = ({ checked, label, value, onChange, iconClassName, className, ...props }: Props) => {
    return (
        <label className={`flex items-center space-x-2 ${className || ""}`}>
            <div>
                <input
                    type="checkbox"
                    className="hidden w-0 h-0"
                    checked={checked}
                    onChange={onChange}
                    value={value}
                    {...props}
                />
                {checked ? (
                    <BiSolidCheckboxChecked className={`${iconClassName || "w-5 h-5"} text-primary`} />
                ) : (
                    <BiCheckbox className={`${iconClassName || "w-5 h-5"} text-gray-400`} />
                )}
            </div>
            {label && <div className="w-full">{label}</div>}
        </label>
    );
};

export default Checkbox;
