import Head from "../../components/common/Head";
import NumbersList from "../../components/admin/analytics/NumbersList";
import PieStatesCard from "../../components/admin/analytics/PieStates/PieStatesCard";
import Box from "../../components/admin/analytics/YearsChartsBox/Box";
import ColumnChart from "../../components/admin/analytics/YearsChartsBox/ColumnChart";
import CurveLineChart from "../../components/admin/analytics/YearsChartsBox/CurveLineChart";
import RadialBox from "../../components/admin/analytics/RadialBox";
import { CiMoneyBill, CiWallet } from "react-icons/ci";
import OrdersTable from "../../components/admin/analytics/OrdersTable";
import TrendingProduct from "../../components/admin/analytics/TrendingProduct";

const Home = () => {
    return (
        <>
            <Head title="Dashbaord" />
            <section>
                <h3 className="font-semibold text-2xl mb-8">Analytics</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    <NumbersList />
                    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                        <PieStatesCard title="Users" value={503} />
                        <PieStatesCard title="Products" value={15898} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <Box chart={<ColumnChart />} className="mb-4" title="Sales" />
                        <Box chart={<CurveLineChart />} title="User Activity" />
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <RadialBox icon={CiWallet} subText="Paid Invoices" value={30587} />
                            <RadialBox icon={CiMoneyBill} subText="Funds Received" value={49887} />
                        </div>
                        <OrdersTable />
                        <TrendingProduct />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
