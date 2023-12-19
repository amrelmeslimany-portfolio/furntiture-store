import { useEffect } from "react";
import { v4 } from "uuid";
import { AddressCheckoutType } from "../../interfaces/customer";
import CheckboxIcon from "../common/Form/Checkbox/CheckboxIcon";

type Props = {
    onSelect: (address: AddressCheckoutType) => void;
    select: AddressCheckoutType | null;
    className?: string;
};

const ADDRESSES: AddressCheckoutType[] = [
    {
        id: v4(),
        title: "Home Address",
        address: `Area 1, Street, City, Government Area 1, Street, City, Government Area 1, Street, City,
		Government Area 1, Street, City, Government`,
        current: true,
    },
    {
        id: v4(),
        title: "Work Address",
        address: `Area 1, Street, City, Government Area 1, Street, City, Government Area 1, Street, City,
		Government Area 1, Street, City, Government`,
        current: false,
    },
];

const AdressesList = ({ className, onSelect, select }: Props) => {
    useEffect(() => {
        onSelect(ADDRESSES.find((item) => item.current)!);
    }, []);

    return (
        <ul className={className || ""}>
            {select &&
                ADDRESSES.map((address) => (
                    <li
                        key={address.id}
                        className={`
					shadow-sm mb-2 border  rounded-xl p-4 bg-white flex items-center gap-2 justify-between cursor-pointer 
					${select!.id == address.id ? "border-primary" : "border-gray-50"}`}
                        onClick={() => onSelect(address)}
                    >
                        <div className="w-[90%]" key={address.id}>
                            <b className="mb-1 capitalize truncate block">{address.title}</b>
                            <p className="text-sm text-secondaryText capitalize  truncate">
                                {address.address}
                            </p>
                        </div>
                        <CheckboxIcon checked={select!.id == address.id} />
                    </li>
                ))}
        </ul>
    );
};

export default AdressesList;
