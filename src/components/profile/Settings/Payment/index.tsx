import PaymentCard from "./PaymentCard";
import { OnlinePaymentMethodsEnum } from "../../../../constants/enums";
import { FiPlus } from "react-icons/fi";
import Modal from "../../../common/Modal";
import { useState } from "react";
import OnlinePayment from "../../../checkout/PaymentBody/OnllinePayment";
import ModalHeader from "../../../common/Modal/Header";

const PaymentSettings = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedPayment, setSelectedPayment] = useState<number>(1);
    const [onlineMethod, setOnlineMethod] = useState<OnlinePaymentMethodsEnum>(
        OnlinePaymentMethodsEnum.CreditCard
    );

    return (
        <>
            <ul className="flex flex-wrap gap-3">
                <li
                    onClick={() => setIsOpen(true)}
                    className="segment md9:max-w-[50%]  min-w-[230px] cursor-pointer flex-1 hover:bg-gray-100 transition p-3 flex items-center justify-center flex-col min-h-[165px] bg-gray-50 text-secondaryText text-center"
                >
                    <FiPlus className="text-5xl mb-2" />
                    <span className="text-sm">Add Payment</span>
                </li>
                <PaymentCard
                    onSelect={() => setSelectedPayment(1)}
                    selected={selectedPayment == 1}
                    type={OnlinePaymentMethodsEnum.CreditCard}
                    title="4568"
                />
                <PaymentCard
                    onSelect={() => setSelectedPayment(2)}
                    selected={selectedPayment == 2}
                    type={OnlinePaymentMethodsEnum.Paypal}
                    title="paypalexample@paypal.com"
                />
            </ul>
            <Modal isOpen={isOpen} contentClassname="max-xs:w-full p-5">
                <div className="rounded-xl p-3 bg-white xs:w-[430px]">
                    <ModalHeader onClose={() => setIsOpen(false)} title="Add Payment" />
                    <OnlinePayment
                        onSelect={(method) => setOnlineMethod(method)}
                        selected={onlineMethod}
                        onSubmit={console.log}
                    />
                </div>
            </Modal>
        </>
    );
};

export default PaymentSettings;
