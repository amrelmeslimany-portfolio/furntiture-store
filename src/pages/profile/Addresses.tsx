import { v4 } from "uuid";
import Head from "../../components/common/Head";
import DetailsAddressList from "../../components/profile/Addresses/DetailsAddressList";
import AddressesForm from "../../components/profile/Addresses/Form";
import { AddressDetailsInterface, AddressSettingsType } from "../../interfaces/customer";
import { useState } from "react";
import { FormikHelpers } from "formik";
import toast from "react-hot-toast";

const fakeAddress: AddressSettingsType[] = [
    {
        id: v4(),
        title: "Home",
        city: "Baumbachburgh",
        street: "Apt. 622 625 Rippin Mall",
        zipCode: "41306",
        note: "Call me on another number 0105646548",
        isCurrent: true,
    },
    {
        id: v4(),
        title: "Work",
        city: "Baumbachburgh",
        street: "Apt. 622 625 Rippin Mall",
        zipCode: "41306",
        note: "Call me on another number 0105646548",
    },
];

const Addresses = () => {
    const [addresses, setAddresses] = useState<AddressSettingsType[]>(fakeAddress);
    const [editAddress, setEditAddress] = useState<AddressSettingsType | null>(null);
    const formType = editAddress ? "edit" : "new";

    const onSelect = (id: string) => {
        setAddresses((prev) => {
            prev.map((item) => delete item.isCurrent);
            const selectedAddress = prev.find((address) => address.id === id);
            selectedAddress!.isCurrent = true;
            return [...prev];
        });
    };

    const onDelete = (id: string) => {
        setAddresses((prev) => [...prev.filter((item) => id != item.id)]);
        toast.success("Address Deleted!");
    };

    // FIXME replace with server
    const onSubmit = (
        values: AddressDetailsInterface,
        { resetForm }: FormikHelpers<AddressDetailsInterface>
    ) => {
        // if Form type is add address
        if (formType === "new") {
            setAddresses((prev) => [...prev, { id: v4(), isCurrent: false, ...values }]);
            toast.success("New Address Added");
        }
        // If Form is Edit address
        else {
            setAddresses((prev) => {
                return prev.map((address) => {
                    if (address.id === editAddress!.id) return { ...address, ...values };
                    return address;
                });
            });
            // clear edit address after update
            setEditAddress(null);
            toast.success("Address Updated");
        }
        // Clear form
        resetForm({ values: { city: "", note: "", street: "", title: "", zipCode: "" } });
    };

    return (
        <>
            <Head title="Addresses" />
            <div className="flex gap-5 max-md9:flex-col-reverse">
                <AddressesForm
                    onSubmit={onSubmit}
                    formType={formType}
                    initial={editAddress}
                    className="md9:flex-1 md9:sticky top-4 h-fit"
                />
                <DetailsAddressList
                    addresses={addresses}
                    className=" md9:w-[320px] xl:w-[400px]"
                    onSelect={onSelect}
                    onEdit={(address) => setEditAddress(address)}
                    onDelete={onDelete}
                />
            </div>
        </>
    );
};

export default Addresses;
