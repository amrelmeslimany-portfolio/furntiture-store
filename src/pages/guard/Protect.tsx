import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Protect = ({ isAuth }: { isAuth: boolean }) => {
    if (isAuth) return <Outlet />;
    return <Navigate to={ROUTES.auth.sign_in} />;
};

export default Protect;
