import { Navigate, Outlet } from "react-router-dom";

const Redirect = ({ isAuth }: { isAuth: boolean }) => {
    if (isAuth) return <Navigate to="/" />;
    return <Outlet />;
};

export default Redirect;
