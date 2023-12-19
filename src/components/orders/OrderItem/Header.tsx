import { Tooltip } from "react-tooltip";
import { OrdersStatusEnum } from "../../../constants/enums";
import SummryItem from "../../cart/SummryItem";
import { AddressCheckoutType } from "../../../interfaces/customer";
import "react-tooltip/dist/react-tooltip.css";

type Props = {
    status: OrdersStatusEnum;
    placed: string;
    totalPrice: number;
    address: Partial<AddressCheckoutType>;
    orderNumber: string;
    id: string;
};

const OrderItemHeader = ({ address, id, orderNumber, placed, status, totalPrice }: Props) => {
    return (
        <div className="flex justify-between gap-2 items-center bg-primary/5 p-4 rounded-t-lg flex-wrap">
            <ul className="flex gap-4 max-sm:flex-col">
                <li>
                    <span className="text-sm text-secondaryText">Status</span>
                    <p className="font-semibold">{status}</p>
                </li>
                <li>
                    <span className="text-sm text-secondaryText">Order Placed</span>
                    <p className="font-semibold">{placed}</p>
                </li>
                <li>
                    <span className="text-sm text-secondaryText">Total</span>
                    <p className="font-semibold" data-tooltip-id="invoice-tooltip">
                        ${totalPrice.toFixed(2)}
                    </p>
                    <Tooltip id="invoice-tooltip">
                        <SummryItem text="Items Cost" value="178$" />
                        <SummryItem text="Shipping Cost" value="87$" />
                    </Tooltip>
                </li>
                <li>
                    <span className="text-sm text-secondaryText">Ship To</span>
                    <p className="font-semibold" data-tooltip-id="address-tooltip">
                        {address.title}
                    </p>
                    <Tooltip id="address-tooltip">{address.address}</Tooltip>
                </li>
            </ul>
            <div>
                <p className="text-sm text-secondaryText">Order # {orderNumber}</p>
                {status == OrdersStatusEnum.Pending && (
                    <button
                        className="bg-red-100 px-2 py-1 text-red-500 mt-1 rounded-full"
                        onClick={() => console.log("Remove order", id)}
                    >
                        Cancel
                    </button>
                )}
            </div>
        </div>
    );
};

export default OrderItemHeader;
