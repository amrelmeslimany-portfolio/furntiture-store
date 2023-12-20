import { Link } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const UnAuthButtons = ({ inClasses, upClasses }: { inClasses?: string; upClasses?: string }) => {
    return (
        <>
            <Link
                to={ROUTES.auth.sign_in}
                className={`font-[500] hover:bg-primary btn-primary transition ${
                    inClasses ? inClasses : "text-white"
                }`}
            >
                Sign In
            </Link>
            <Link to={ROUTES.auth.sign_up} className={`btn-primary ${upClasses ? upClasses : "bg-primary"}`}>
                Sign Up
            </Link>
        </>
    );
};

export default UnAuthButtons;
