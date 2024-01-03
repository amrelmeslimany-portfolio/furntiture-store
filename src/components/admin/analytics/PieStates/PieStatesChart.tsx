import React from "react";
import ReactApexChart from "react-apexcharts";

type Props = { series: number[]; labels: string[] };

const PieStatesChart: React.FC<Props> = ({ labels, series }) => {
    const options: ApexCharts.ApexOptions | undefined = {
        chart: {
            type: "donut",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "60px",
                },
            },
        },
        labels: labels,
        legend: {
            position: "left",
            offsetY: 40,
            labels: {
                colors: "#717171",
            },
            markers: {
                height: 8,
                width: 8,
            },
            formatter(legendName, opts) {
                return `<b>${opts.w.config.series[opts.seriesIndex]}%</b> <small>${legendName}</small>`;
            },
        },
        dataLabels: {
            enabled: false, // Hide data labels if needed
        },

        theme: {
            monochrome: {
                enabled: true,
                color: "#688272",
                shadeTo: "light",
                shadeIntensity: 0.65,
            },
        },
    };

    return <ReactApexChart options={options} series={series} type="donut" width={270} />;
};

export default PieStatesChart;
