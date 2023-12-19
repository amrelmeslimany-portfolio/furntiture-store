import _ from "lodash";
import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";

type PropsType = {
    value: number;
    onRate?: (rate: number) => void;
    starNumber?: number;
    className?: string;
    starsClassName?: string;
};

const MultipleStarsRating = ({ starNumber, className, value, starsClassName, onRate }: PropsType) => {
    const rangeNumber = _.range(1, starNumber ? starNumber + 1 : 6);
    const [rate, setRate] = useState<number>(value);
    const [hover, setHover] = useState<number | null>(null);

    const onChange = (rate: number) => {
        setRate(rate);
        onRate && onRate(rate);
    };

    return (
        <ul className={`flex space-x-1 items-center  ${className || ""}`}>
            {rangeNumber.map((item: number) => {
                return (
                    <li
                        key={item}
                        className={`
						${onRate ? "cursor-pointer transition " : ""} 
						${starsClassName || "text-xl"}
						${(hover && item <= hover) || (!hover && item <= Math.round(rate)) ? "text-orange-400" : "text-gray-300"}  
						`}
                        onClick={onRate ? () => onChange(item) : undefined}
                        onMouseEnter={onRate ? () => setHover(item) : undefined}
                        onMouseLeave={onRate ? () => setHover(null) : undefined}
                    >
                        <BiSolidStar />
                    </li>
                );
            })}
        </ul>
    );
};

export default MultipleStarsRating;
