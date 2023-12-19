import { GenderEnum } from "../../../../constants/enums";
import { FaMale, FaFemale } from "react-icons/fa";
import CheckboxIcon from "../Checkbox/CheckboxIcon";
import { IconType } from "react-icons";
import { v4 } from "uuid";

const Genders: { icon: IconType; text: GenderEnum }[] = [
    {
        icon: FaMale,
        text: GenderEnum.Male,
    },
    {
        icon: FaFemale,
        text: GenderEnum.Female,
    },
];

type Props = { selected: GenderEnum; onSelect: (gender: GenderEnum) => void; isError?: boolean };

const GenderSelect = ({ onSelect, selected, isError }: Props) => {
    return (
        <div className="flex space-x-3 mb-3">
            {Genders.map((gender) => (
                <button
                    key={v4()}
                    onClick={() => onSelect(gender.text)}
                    className={`flex-1 flex bg-white p-1.5 rounded-full items-center gap-2 border 
                    ${isError ? "border-red-500" : ""}`}
                >
                    <span className="flex-shrink-0 grid place-content-center w-9 h-9 bg-primary/5  rounded-full">
                        <gender.icon className="text-primary text-lg" />
                    </span>
                    <span className="capitalize">{gender.text}</span>
                    <CheckboxIcon className="flex-shrink-0 ms-auto" checked={gender.text == selected} />
                </button>
            ))}
        </div>
    );
};

export default GenderSelect;
