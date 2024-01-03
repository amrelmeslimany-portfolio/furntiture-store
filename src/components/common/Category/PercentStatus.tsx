import React from "react";
import { INumberState } from "../../../interfaces/admin";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

type Props = Pick<INumberState, "percent"> & { className?: string };

const PercentStatus: React.FC<Props> = ({ percent, className }) => {
    return (
        <p
            className={`
                flex  items-center 
                ${percent.isUp ? "text-green-600" : "text-red-500"} ${className || ""}
        `}
        >
            {percent.isUp ? <FiArrowUp className="text-lg" /> : <FiArrowDown className="text-lg" />}
            <span>{percent.value}%</span>
        </p>
    );
};

export default PercentStatus;
