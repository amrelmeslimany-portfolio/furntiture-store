import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsType } from "../../interfaces/products";
import { MAIN_PRODUCTS } from "../../constants";
import { SearchStorageEnum } from "../../constants/enums";

interface ProductsStateINT {
    products: ProductDetailsType[];
    searchHistory: string[];
}

const getSearchHistory = localStorage.getItem(SearchStorageEnum.History)
    ? JSON.parse(localStorage.getItem(SearchStorageEnum.History)!)
    : [];

const initialState: ProductsStateINT = { products: MAIN_PRODUCTS, searchHistory: getSearchHistory };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToSearch: (state, { payload }: PayloadAction<string>) => {
            const elementIndex = state.searchHistory.findIndex((item) => item == payload);
            if (elementIndex < 0) {
                state.searchHistory.unshift(payload);
            } else {
                // Reorder
                if (elementIndex != 0)
                    state.searchHistory = state.searchHistory.filter((item) => item != payload);
                state.searchHistory.unshift(payload);
            }
            localStorage.setItem(SearchStorageEnum.History, JSON.stringify(state.searchHistory));
        },
    },
});

export const { addToSearch } = productsSlice.actions;

export default productsSlice.reducer;
