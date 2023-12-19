import IconCircleButton from "../../common/Button/CircleIcon";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import SummryItem from "../../cart/SummryItem";
import { AddressSettingsType } from "../../../interfaces/customer";
import CheckboxIcon from "../../common/Form/Checkbox/CheckboxIcon";
import { MouseEvent, useState } from "react";
import Modal from "../../common/Modal";
import ModalHeader from "../../common/Modal/Header";
import Button from "../../common/Button";

type Props = {
    address: AddressSettingsType;
    onSelect: () => void;
    onEdit: (address: AddressSettingsType) => void;
    onDelete: (id: string) => void;
};

const DetailsAddressItem = ({ address, onSelect, onEdit, onDelete }: Props) => {
    const { city, note, street, title, zipCode, id, isCurrent } = address;
    const [isAlert, setIsAlert] = useState<boolean>(false);

    const onEditClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onEdit(address);
    };

    const onDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (isCurrent) setIsAlert(true);
        else onDelete(id);
    };

    return (
        <>
            <li
                className={`shadow-sm mb-3 border rounded-xl p-3 cursor-pointer transition  
			${isCurrent ? "border-primary" : "hover:bg-primary/5"}`}
                onClick={onSelect}
            >
                <CheckboxIcon checked={Boolean(isCurrent)} className="text-lg mx-auto" />
                <hr className="my-2 border-gray-100" />
                <article className="flex items-center justify-between gap-2 mb-3">
                    <h6 className="text-lg font-semibold  line-clamp-2 capitalize">{title}</h6>
                    <div className="flex">
                        <IconCircleButton
                            onClick={onEditClick}
                            className="group w-8 h-8"
                            iconSize="base"
                            icon={<FiEdit className="text-gray-400 group-hover:text-white transition" />}
                        />
                        {!isCurrent && (
                            <IconCircleButton
                                onClick={onDeleteClick}
                                className="group w-8 h-8"
                                iconSize="base"
                                icon={<FiTrash2 className="text-red-400 group-hover:text-white transition" />}
                            />
                        )}
                    </div>
                </article>
                <div className="pe-2 flex flex-col space-y-2">
                    <SummryItem text="City" value={city} />
                    <SummryItem text="Zip Code" value={zipCode} />
                    <SummryItem text="Street" value={street} />
                    <p className="py-1 px-1.5 border border-gray-100 rounded-md block">
                        <span className="block text-sm text-secondaryText">Note</span>
                        <span className=" line-clamp-2">{note}</span>
                    </p>
                </div>
            </li>
            <Modal isOpen={isAlert} contentClassname="max-xs:w-full p-5">
                <div className="rounded-xl p-3 bg-white xs:w-[430px]">
                    <ModalHeader onClose={() => setIsAlert(false)} title="Delete Address" />
                    <p className=" text-secondaryText capitalize">
                        You can't remove the current or selected address. <br />
                        <b>you must change the current address first and you can delete.</b>
                    </p>
                    <hr className="my-2 border-gray-100" />
                    <div className="text-end">
                        <Button className="bg-primary text-base w-28" onClick={() => setIsAlert(false)}>
                            Ok
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DetailsAddressItem;
