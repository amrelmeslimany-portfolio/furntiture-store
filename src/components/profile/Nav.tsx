import { PROFILE_NAVs } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import { v4 } from "uuid";

const ProfileNav = () => {
	const location = useLocation();
	return (
		<nav className="sm:sticky top-2 h-fit">
			{PROFILE_NAVs.map((nav, index) => (
				<Link
					key={v4()}
					to={nav.to}
					className={`
                    flex gap-2 items-center p-2 
                    ${index == 0 ? "rounded-t-lg" : ""}  
                    ${index == PROFILE_NAVs.length - 1 ? "rounded-b-lg" : ""} 
                    ${location.pathname == nav.to ? "bg-primary text-white" : "bg-gray-50"}
                    `}
				>
					<div className="p-2">
						<nav.icon className="text-lg" />
					</div>
					<span className="capitalize">{nav.text}</span>
				</Link>
			))}
		</nav>
	);
};

export default ProfileNav;
