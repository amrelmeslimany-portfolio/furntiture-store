import Home from "./Home";
// @pages Auth
import SignIn from "./auth/SignIn.tsx";
import SignUp from "./auth/SignUp.tsx";
import VerificationCode from "./auth/VerificationCode.tsx";
import ForgotPassword from "./auth/ForgotPassword.tsx";

// @pages Shop
import Shop from "./shop";
import ProductDetails from "./shop/ProductDetails.tsx";
import Favourites from "./shop/Favourites.tsx";
import Cart from "./shop/Cart";
import Checkout from "./shop/Checkout.tsx";
import Invoice from "./shop/Invoice.tsx";
import Orders from "./shop/Orders.tsx";
import ProductRate from "./shop/ProductRate.tsx";

// @pages Profile
import Profile from "./profile/index.tsx";
import ProfileHome from "./profile/ProfileHome";
import Settings from "./profile/Settings.tsx";
import Addresses from "./profile/Addresses.tsx";
import Password from "./profile/Password.tsx";
import Error404 from "./404.tsx";

// @pages Admin Dashboard
import AdminHome from "./admin/Home.tsx";
import AdminProducts from "./admin/Products";
import ProductForm from "./admin/Products/Form.tsx";
import AdminProductDetails from "./admin/Products/Details.tsx";

export {
    Home,
    SignIn,
    Shop,
    ProductDetails,
    Favourites,
    Invoice,
    Cart,
    Checkout,
    Orders,
    Profile,
    ProfileHome,
    Settings,
    Addresses,
    Password,
    ProductRate,
    SignUp,
    VerificationCode,
    ForgotPassword,
    Error404,
    AdminHome,
    AdminProducts,
    ProductForm,
    AdminProductDetails,
};
