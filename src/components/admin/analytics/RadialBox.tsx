import React from "react";
import Card from "../../common/Card";
import ApexChart from "react-apexcharts";
import { MAIN_COLORS } from "../../../constants/theme";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    value: number;
    subText: string;
};

const RadialBox: React.FC<Props> = ({ icon: Icon, subText, value }) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "radialBar",
            toolbar: { show: false },
            width: 120,
            height: 120,
            offsetY: -15,
            offsetX: 20,
        },
        colors: [MAIN_COLORS.primary],
        plotOptions: {
            radialBar: {
                track: {
                    background: MAIN_COLORS.primary,
                    opacity: 0.1,
                },
                dataLabels: {
                    value: { fontSize: "14px", offsetY: 5.5, color: MAIN_COLORS.gray },
                    name: { show: false },
                },
            },
        },
    };
    return (
        <Card className="p-4">
            <div className="flex justify-between gap-2 ">
                <Icon size={50} className=" flex-shrink-0 mt-2.5" />
                <ApexChart width={120} height={120} type="radialBar" options={options} series={[70]} />
            </div>
            <article className="-mt-5 block">
                <small className="text-sm text-secondaryText">{subText}</small>
                <h5 className="number">${value.toFixed(2)}</h5>
                <small className="text-xs text-secondaryText">Current Finacial Year</small>
            </article>
        </Card>
    );
};

export default RadialBox;
