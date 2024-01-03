import { range, shuffle } from "lodash";
import ApexChart from "react-apexcharts";
import { MAIN_COLORS } from "../../../../constants/theme";

const CurveLineChart = () => {
    const options: ApexCharts.ApexOptions | undefined = {
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    colors: MAIN_COLORS.gray,
                },
            },
        },
        chart: {
            type: "line",
            toolbar: { show: false },
        },

        stroke: { curve: "smooth", lineCap: "round" },
        colors: [MAIN_COLORS.primary],
        dataLabels: { enabled: false },
        grid: { show: false },
        yaxis: {
            labels: {
                style: {
                    colors: [MAIN_COLORS.gray],
                },
                formatter: (val) => {
                    const most1000 = val >= 100_000;
                    return `${most1000 ? val / 1000 : val}${most1000 ? "K" : ""}`;
                },
            },
        },
    };

    return (
        <div className="mt-4">
            <ApexChart
                options={options}
                height={280}
                series={[{ name: "Sales", data: shuffle(range(100_000, 700_000, 50_000)) }]}
            />
        </div>
    );
};

export default CurveLineChart;
