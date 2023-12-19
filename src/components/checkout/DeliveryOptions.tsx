import { DelivryOptionsEnum } from "../../constants/enums";
import { FAST_DELIVERY_IMG, NORMAL_DELIVERY_IMG } from "../../constants/images";
import { v4 } from "uuid";
import CheckboxIcon from "../common/Form/Checkbox/CheckboxIcon";

const Options: { image: string; value: DelivryOptionsEnum }[] = [
    { image: NORMAL_DELIVERY_IMG, value: DelivryOptionsEnum.Normal },
    { image: FAST_DELIVERY_IMG, value: DelivryOptionsEnum.Fast },
];

type Props = {
    onDeliveryChange: (option: DelivryOptionsEnum) => void;
    currentOption: DelivryOptionsEnum;
};

const DeliveryOptions = ({ onDeliveryChange, currentOption }: Props) => {
    return (
        <ul className="flex gap-2 max-md9:flex-col">
            {Options.map((option) => (
                <li
                    key={v4()}
                    className="segment px-4 py-2 bg-white flex gap-4 items-center cursor-pointer "
                    onClick={() => onDeliveryChange(option.value)}
                >
                    <img src={option.image} className="w-10 h-10 flex-shrink-0" alt="normal delivery" />
                    <span>{option.value}</span>
                    <CheckboxIcon checked={option.value == currentOption} />
                </li>
            ))}
        </ul>
    );
};

export default DeliveryOptions;
