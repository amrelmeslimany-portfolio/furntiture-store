import { range, shuffle } from "lodash";
import ApexChart from "react-apexcharts";
import { MAIN_COLORS } from "../../../../constants/theme";

const ColumnChart = () => {
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
            type: "bar",
            toolbar: { show: false },
        },

        plotOptions: {
            bar: {
                columnWidth: 10,
                borderRadius: 5,
                isDumbbell: false,
                isFunnel: false,

                colors: {
                    backgroundBarOpacity: 1,
                    backgroundBarColors: [MAIN_COLORS.primary_5],
                    backgroundBarRadius: 5,
                },
            },
        },
        stroke: { show: false },
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
        fill: {
            opacity: 1,
            colors: [MAIN_COLORS.primary],
        },
    };

    return (
        <div className="mt-4">
            <ApexChart
                type="bar"
                options={options}
                height={280}
                series={[{ name: "Sales", data: shuffle(range(100_000, 700_000, 50_000)) }]}
            />
        </div>
    );
};

export default ColumnChart;
