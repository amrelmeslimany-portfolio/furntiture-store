import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductCategriedInterface } from "../../interfaces/products";
import { ProductToasts } from "../../utils/classes/product-toasts";

interface CartStateInterface {
    cart: ProductCategriedInterface[];
}

const stored = localStorage.getItem("cart");

const initialState: CartStateInterface = { cart: stored ? JSON.parse(stored) : [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }: PayloadAction<ProductCategriedInterface>) => {
            const existingProduct = state.cart.findIndex(({ id }) => id == payload.id);
            const toast = new ProductToasts(payload.image);
            if (existingProduct > -1) {
                let currentProduct = state.cart[existingProduct];
                currentProduct.quantity! += 1;
                toast.quantity(`+${currentProduct.quantity}`);
            } else {
                state.cart.unshift({ ...payload, quantity: 1 });
                toast.added();
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseQuantity: (state, { payload }: PayloadAction<ProductCategriedInterface>) => {
            const existingProduct = state.cart.findIndex(({ id }) => id == payload.id);
            if (existingProduct > -1) {
                let currentProduct = state.cart[existingProduct];
                if (currentProduct.quantity! > 1) currentProduct.quantity! -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        deleteByIDs: (state, { payload }: PayloadAction<string[]>) => {
            state.cart = state.cart.filter(({ id }) => !payload.includes(id));
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});

export const { addToCart, decreaseQuantity, deleteByIDs } = cartSlice.actions;

export default cartSlice.reducer;
