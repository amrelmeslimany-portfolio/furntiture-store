import Head from "../../components/common/Head";
import CategoryStatistics from "../../components/profile/Home/CategoryStatistics";
import TotalStatistics from "../../components/profile/Home/TotalStatistics";
import UserInfo from "../../components/profile/Home/UserInfo";
import CurrentSettingsList from "../../components/profile/Home/CurrentSettingsList";
import History from "../../components/profile/Home/History/History";
import OrderBanner from "../../components/common/OrderBanner";

const ProfileHome = () => {
	return (
		<>
			<Head title="User Name Profile" />
			<div className="flex gap-5 max-md9:flex-col">
				<div className="flex-auto">
					<UserInfo />
					<CurrentSettingsList />
					<History />
				</div>
				<aside className="md9:w-[320px] max-md9:flex max-md9:gap-3 flex-wrap max-md:flex-col max-md:gap-5">
					<OrderBanner className="mb-5 max-md9:w-full" />
					<CategoryStatistics className="flex-1" />
					<TotalStatistics className="flex-1" />
				</aside>
			</div>
		</>
	);
};

export default ProfileHome;
