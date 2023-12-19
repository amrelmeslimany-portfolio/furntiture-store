import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderInterface, OrderProductType } from "../../interfaces/orders";
import { OnlinePayFormType } from "../../utils/validations/payment";
import { PaymentMethodsEnum } from "../../constants/enums";

interface OrdersStateInterface {
    temporeryProducts: OrderProductType[];
    temporeryOrder: OrderInterface | null;
    temporeryOnlineForm: OnlinePayFormType | null;
}

const initialState: OrdersStateInterface = {
    temporeryOrder: null,
    temporeryProducts: [],
    temporeryOnlineForm: null,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addTempProducts: (state, { payload }: PayloadAction<OrderProductType[]>) => {
            state.temporeryProducts = payload;
        },
        clearTempProducts: (state) => {
            state.temporeryProducts = [];
        },
        addTempOrder: (
            state,
            { payload }: PayloadAction<{ order: OrderInterface; onlineForm: OnlinePayFormType }>
        ) => {
            state.temporeryOrder = payload.order;
            if (payload.order.paymentMethod != PaymentMethodsEnum.OnDelivery)
                state.temporeryOnlineForm = payload.onlineForm;
        },
        clearTempOrder: (state) => {
            state.temporeryOrder = null;
            state.temporeryOnlineForm = null;
        },
    },
});

export const { addTempProducts, clearTempProducts, clearTempOrder, addTempOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
