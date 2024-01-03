import React from "react";
import Card from "../../../common/Card";
import PieStatesChart from "./PieStatesChart";

type Props = { title: string; value: number };

const PieStatesCard: React.FC<Props> = ({ title, value }) => {
    return (
        <Card padding="p-4" className="flex max-2xl:flex-row flex-col max-2xl:items-center gap-2 flex-wrap">
            <div className=" flex-shrink-0">
                <span>{title}</span>
                <span className="number">{value}</span>
                <span className="text-secondaryText text-xs">Since Last Month</span>
            </div>
            <div className="max-2xl:ms-auto">
                <PieStatesChart labels={["New", "Inactive"]} series={[50, 60]} />
            </div>
        </Card>
    );
};

export default PieStatesCard;
