import { AddressSettingsType } from "../../../interfaces/customer";
import Divider from "../../common/Divider";
import DetailsAddressItem from "./DetailsAddressItem";

type Props = {
    addresses: AddressSettingsType[];
    onSelect: (id: string) => void;
    className?: string;
    onEdit: (address: AddressSettingsType) => void;
    onDelete: (id: string) => void;
};

const DetailsAddressList = ({ className, addresses, onSelect, onEdit, onDelete }: Props) => {
    return (
        <ul className={className || ""}>
            <li className="mb-4">
                <Divider text="Select Current" />
            </li>
            {addresses.map((address) => (
                <DetailsAddressItem
                    onDelete={onDelete}
                    onEdit={onEdit}
                    address={address}
                    key={address.id}
                    onSelect={() => onSelect(address.id)}
                />
            ))}
        </ul>
    );
};

export default DetailsAddressList;
