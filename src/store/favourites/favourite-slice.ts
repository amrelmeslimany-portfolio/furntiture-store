import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCategriedInterface } from "../../interfaces/products";
import { ProductToasts } from "../../utils/classes/product-toasts";

interface FavouritesStateInterface {
    favourites: ProductCategriedInterface[];
}

const stored = localStorage.getItem("favourites");

const initialState: FavouritesStateInterface = { favourites: stored ? JSON.parse(stored) : [] };

const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        add: (state, { payload }: PayloadAction<ProductCategriedInterface>) => {
            const existingProduct = state.favourites.findIndex(({ id }) => id == payload.id);
            const toast = new ProductToasts(payload.image);
            if (existingProduct == -1) {
                state.favourites.unshift(payload);
                toast.added("Added to favourites");
            }
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
        deleteByID: (state, { payload }: PayloadAction<string[]>) => {
            state.favourites = state.favourites.filter(({ id }) => !payload.includes(id));
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
        clear: (state) => {
            state.favourites = [];
        },
    },
});

export const { add, clear, deleteByID } = favouritesSlice.actions;

export default favouritesSlice.reducer;
