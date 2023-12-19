import { useMediaQuery } from "react-responsive";
import { getScreen } from "../utils/functions";
import { SCREENS } from "../constants/breackpoints";
import { useEffect, useState } from "react";

const useScrollEvent = () => {
    const isDesktop = useMediaQuery(getScreen(SCREENS.xl));
	const [isHide, setIsHide] = useState<boolean>(!isDesktop);

	useEffect(() => {
		if (isDesktop) return;
		const handleScroll = () => {
			setIsHide(window.scrollY < 400 && !isDesktop);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    return {isHide}
}

export default useScrollEvent