import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useInitScroll = () => {
    const { pathname } = useLocation();
    const location = useLocation();

    useEffect(() => {
        // Get the hash from the URL (e.g., #section1)
        const hash = location.hash;

        if (hash) {
            // Remove the "#" symbol
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
                // This clear hash after scroll
                window.history.replaceState({}, document.title, location.pathname + location.search);
            }
        } else {
            window.scrollTo({ top: 0 });
        }
    }, [pathname]);
};

export default useInitScroll;
