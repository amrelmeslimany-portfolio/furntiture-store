import Checkbox from "../common/Form/Checkbox";
import QuantityInput from "../common/Form/QuantityInput";
import IconCircleButton from "../common/Button/CircleIcon";
import { FiTrash2 } from "react-icons/fi";
import { ProductCategriedInterface } from "../../interfaces/products";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Props = {
    product: ProductCategriedInterface;
    onSelect: () => void;
    onDeleteItem: (id: string) => void;
    isSelected: boolean;
} & HTMLAttributes<HTMLTableRowElement>;

const CartItem = ({ product, onSelect, isSelected, onDeleteItem, ...props }: Props) => {
    return (
        <tr {...props}>
            <td className="p-4">
                <Checkbox checked={isSelected} className="w-4" value={product.id} onChange={onSelect} />
            </td>
            <td className="p-4">
                <Link to={`/shop/${product.id}`} className="w-64 flex items-center space-x-3">
                    <img
                        src={product.image}
                        alt={"Helloa Chair"}
                        className="w-20 h-20 object-cover flex-shrink-0"
                    />
                    <h5 className="flex-grow font-semibold capitalize text-lg">{product.name}</h5>
                </Link>
            </td>

            <td className="p-4">
                <div className="w-20">${product.price.toFixed(2)}</div>
            </td>
            <td className="p-4">
                <QuantityInput product={product} className="w-24" />
            </td>
            <td className="p-4">
                <div className="w-20">${(product.quantity! * product.price).toFixed(2)}</div>
            </td>
            <td className="p-4 ">
                <IconCircleButton
                    icon={<FiTrash2 className="text-lg text-red-500" />}
                    className="w-10 h-10 hover:bg-gray-100"
                    onClick={() => onDeleteItem(product.id)}
                />
            </td>
        </tr>
    );
};

export default CartItem;
