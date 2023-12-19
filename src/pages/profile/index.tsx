import { BreadcrumbType } from "../../interfaces";
import Contianer from "../../components/common/Container";
import Breadcrumb from "../../components/common/Breadcrumb";
import ProfileNav from "../../components/profile/Nav";
import { Outlet } from "react-router-dom";

const BREADCRUMBS: BreadcrumbType[] = [
	{ label: "Home", url: "/" },
	{ label: "Profile", isCurrentPage: true },
];

const Profile = () => {
	return (
		<Contianer className="py-10">
			<Breadcrumb items={BREADCRUMBS} />
			<div className="grid sm:grid-cols-[240px,auto] gap-5 mt-4">
				<ProfileNav />
				<Outlet />
			</div>
		</Contianer>
	);
};

export default Profile;
