import Card from "../../common/Card";
import { PiArmchair, PiMoney, PiStorefront, PiTruck } from "react-icons/pi";
import { INumberState } from "../../../interfaces/admin";
import { v4 } from "uuid";
import PercentStatus from "../../common/Category/PercentStatus";

const NUMBERS_LIST: INumberState[] = [
    {
        text: "Orders",
        number: 468,
        icon: PiTruck,
        percent: {
            isUp: true,
            value: 8.5,
        },
    },
    {
        text: "Products",
        icon: PiArmchair,
        number: 897,
        percent: {
            isUp: false,
            value: 1.8,
        },
    },
    {
        text: "In Stock",
        number: 468,
        icon: PiStorefront,
        percent: {
            value: 3.0,
        },
    },
    {
        text: "Revenue",
        number: 4677,
        icon: PiMoney,
        percent: {
            isUp: true,
            value: 7.54,
        },
    },
];

const NumbersList = () => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 h-fit">
            {NUMBERS_LIST.map(({ icon: Icon, number, percent, text }) => (
                <Card key={v4()} padding="p-4">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <span>{text}</span>
                            <span className="number">{number}</span>
                        </div>
                        <Icon className="text-3xl flex-shrink-0" />
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                        <PercentStatus percent={percent} />
                        <p className=" text-xs text-secondaryText">Since Last Month</p>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default NumbersList;
