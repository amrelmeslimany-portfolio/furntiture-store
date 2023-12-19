import { ROUTES } from "../../../../constants/routes";
import { NavbarLinkItem } from "./NavbarLinkItem";

type PropsType = { className?: string };

const NavbarLinks = ({ className }: PropsType) => {
	return (
		<ul className={`${className || ""} list-none flex gap-7 2xl:gap-24 md9:gap-14`}>
			{Object.entries(ROUTES.main).map(([key, path]) => (
				<NavbarLinkItem
					actived={
						<span className="h-[5px] w-12 left-[-2px] bg-primary absolute bottom-[-24.5px] block rounded-t-lg" />
					}
					unactivedClassName="text-white"
					text={key}
					to={path}
					key={key}
				/>
			))}
		</ul>
	);
};

export default NavbarLinks;
