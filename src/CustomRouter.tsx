import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import RootLayout from "./layouts/RootLayout";
import {
    Home,
    Shop,
    ProductDetails,
    Favourites,
    Cart,
    Checkout,
    Orders,
    Profile,
    ProfileHome,
    Settings,
    Addresses,
    Password,
    Invoice,
    ProductRate,
    SignIn,
    SignUp,
    VerificationCode,
    ForgotPassword,
    Error404,
    AdminHome,
} from "./pages";
import AuthLayout from "./layouts/AuthLayout";
import Protect from "./pages/guard/Protect";
import { useAppSelector } from "./store";
import Redirect from "./pages/guard/Redirect";
import AdminLayout from "./layouts/AdminLayout";

const CustomRouter = () => {
    const { isAuth } = useAppSelector((state) => state.auth);
    return (
        <Routes>
            {/* @pages Auth */}
            <Route element={<AuthLayout />} path="/auth">
                <Route element={<Redirect isAuth={isAuth} />}>
                    <Route path={ROUTES.auth.sign_in} element={<SignIn />} />
                    <Route path={ROUTES.auth.sign_up} element={<SignUp />} />
                    <Route path={ROUTES.auth.forgotpassword} element={<ForgotPassword />} />
                </Route>
                {/* Type is forgot-password OR verify-email , please exclude it when auth redirection */}
                <Route path={ROUTES.auth.verificationcode + "/:type"} element={<VerificationCode />} />
            </Route>
            {/* @pages Protected */}
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route element={<Protect isAuth={isAuth} />}>
                    {/* @pages: Shop  */}
                    <Route path={ROUTES.main.Shop}>
                        <Route index element={<Shop />} />
                        <Route path=":id" element={<ProductDetails />} />
                        <Route path={ROUTES.shop.favourites.slice(1)} element={<Favourites />} />
                        <Route path={ROUTES.shop.shoppingcart.slice(1)} element={<Cart />} />
                        <Route path={ROUTES.shop.orders.slice(1)} element={<Orders />} />
                        <Route path={ROUTES.products.rate.slice(1) + "/:id"} element={<ProductRate />} />
                        <Route path={ROUTES.shop.checkout.slice(1)} element={<Checkout />} />
                        <Route path={ROUTES.shop.invoice.slice(1)} element={<Invoice />} />
                    </Route>
                    {/* @pages: User  */}
                    <Route path={ROUTES.user.profile} element={<Profile />}>
                        <Route index element={<ProfileHome />} />
                        <Route path={ROUTES.user.settings} element={<Settings />} />
                        <Route path={ROUTES.user.addresses} element={<Addresses />} />
                        <Route path={ROUTES.user.password} element={<Password />} />
                    </Route>
                </Route>

                {/* @page: 404 */}
                <Route path="/*" element={<Error404 />} />
            </Route>
            {/* @pages: Admin */}
            <Route path={ROUTES.admin.home} element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
            </Route>
        </Routes>
    );
};

export default CustomRouter;
