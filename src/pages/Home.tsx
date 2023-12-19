import Head from "../components/common/Head";
import Benefits from "../components/home/Benefits";
import BestSellers from "../components/home/BestSellers";
import HomeCategory from "../components/home/Category";
import FollowUs from "../components/home/FollowUs";
import HomeHeader from "../components/home/Header";
import OffersHome from "../components/home/Offers";
import Testimonails from "../components/home/Testimonials";
import TodayDeals from "../components/home/TodayDeals";

const Home = () => {
	return (
		<>
			<Head title="Home" />
			<HomeHeader />
			<Benefits />
			<HomeCategory />
			<BestSellers />
			<OffersHome />
			<TodayDeals />
			<Testimonails />
			<FollowUs />
		</>
	);
};

export default Home;
