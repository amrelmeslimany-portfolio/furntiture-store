import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import productSlice from "./products/product-slice";
import cartSlice from "./cart/cart-slice";
import ordersSlice from "./orders/orders-slice";
import favouriteSlice from "./favourites/favourite-slice";

const reducer = {
    products: productSlice,
    cart: cartSlice,
    orders: ordersSlice,
    favourites: favouriteSlice,
};

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
