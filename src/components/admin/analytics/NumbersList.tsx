import Card from "../../common/Card";
import { INumberState } from "../../../interfaces/admin";
import { v4 } from "uuid";
import PercentStatus from "../../common/Category/PercentStatus";

type Props = {
    states: INumberState[];
    className?: string;
};

const NumbersList = ({ className, states }: Props) => {
    return (
        <div className={`grid gap-4  h-fit ${className || "grid-cols-1 xs:grid-cols-2 "}`}>
            {states.map(({ icon: Icon, number, percent, text }) => (
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
