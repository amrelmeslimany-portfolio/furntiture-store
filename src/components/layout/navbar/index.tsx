import NavbarLinks from "./NavbarLinks/NavbarLinks";
import Contianer from "../../common/Container";
import FeaturesLinks from "./FeatureLinks/FeaturesLinks";
import { useMediaQuery } from "react-responsive";
import { getScreen } from "../../../utils/functions";
import { SCREENS } from "../../../constants/breackpoints";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import Button from "../../common/Button";
import { FiSearch } from "react-icons/fi";
import GlobalLogo from "../../common/GlobalLogo";
import SearchModalContent from "./Search";
import { useState } from "react";

const Navbar = () => {
	const [searchModal, setSearchModal] = useState<boolean>(false);
	const isTablet = useMediaQuery(getScreen(SCREENS.md));
	return (
		<>
			<nav className="bg-secondary py-4">
				<Contianer className="flex justify-between items-center">
					<GlobalLogo />

					{isTablet && (
						<>
							<NavbarLinks />
							<FeaturesLinks />
						</>
					)}

					{!isTablet && (
						<Button onClick={() => setSearchModal(true)}>
							<FiSearch />
						</Button>
					)}
				</Contianer>
				{!isTablet && <BottomNavbar />}
			</nav>
			<SearchModalContent isOpen={searchModal} setIsOpen={setSearchModal} />
		</>
	);
};

export default Navbar;
