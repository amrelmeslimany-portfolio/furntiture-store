import { OrdersStatusEnum } from "../../../constants/enums";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";
import Tag from "../../common/Tag";
import { BsXCircle } from "react-icons/bs";
import { padStartZero } from "../../../utils/functions";
import { OrdersListProduct } from "../../../interfaces/orders";

const OrderProduct = ({ status, id, image, name, quantity }: OrdersListProduct) => {
    return (
        <>
            <li className="flex gap-2 items-center">
                <img src={image} alt="chair" loading="lazy" className="w-16 h-16" />
                <div className="flex justify-between gap-2 w-full">
                    <div>
                        <Link
                            to={`${ROUTES.main.Shop}/${id}`}
                            className={`font-semibold font-xl capitalize block ${
                                status === OrdersStatusEnum.Cancelled ? "text-red-500 line-through" : ""
                            }`}
                        >
                            {name}
                        </Link>
                        <span className="text-sm text-secondaryText block">
                            Quantity: {padStartZero(quantity)}
                        </span>
                    </div>

                    <div className="flex-shrink-0">
                        {status === OrdersStatusEnum.Completed && (
                            <Link
                                to={`/shop${ROUTES.products.rate}/${id}`}
                                className="px-4 py-1 bg-orange-100 text-orange-400 rounded-full mt-2 block"
                            >
                                Rate
                            </Link>
                        )}

                        {status === OrdersStatusEnum.Pending && (
                            <button
                                className="bg-red-100 px-2 py-1 text-red-500 rounded-full"
                                onClick={() => console.log("Pr id", id)}
                            >
                                Cancel
                            </button>
                        )}

                        {status === OrdersStatusEnum.Cancelled && (
                            <Tag
                                text={OrdersStatusEnum.Cancelled}
                                Icon={BsXCircle}
                                iconParentClassName="bg-red-100 w-5 h-5"
                                iconClassName="text-red-500 text-xs"
                                parentClassName="text-red-500 text-sm"
                            />
                        )}
                    </div>
                </div>
            </li>
        </>
    );
};

export default OrderProduct;
