import { ReactNode } from "react";
import { OnlinePaymentMethodsEnum } from "../../../constants/enums";
import CreditCardForm from "../OnlinePaymentsForms/CreditCard";
import PayPalForm from "../OnlinePaymentsForms/Paypal";
import { PAYPAL_IMG, VISA_IMG } from "../../../constants/images";

type PaymentListType = { image: string; value: OnlinePaymentMethodsEnum; component: ReactNode };

type Props = {
    onSelect: (method: OnlinePaymentMethodsEnum) => void;
    selected: OnlinePaymentMethodsEnum;
    onSubmit: (values: any) => void;
};

const OnlinePayment = ({ onSelect, selected, onSubmit }: Props) => {
    const PAYMENTS: PaymentListType[] = [
        {
            image: VISA_IMG,
            value: OnlinePaymentMethodsEnum.CreditCard,
            component: <CreditCardForm onSubmit={onSubmit} />,
        },
        {
            image: PAYPAL_IMG,
            value: OnlinePaymentMethodsEnum.Paypal,
            component: <PayPalForm onSubmit={onSubmit} />,
        },
    ];

    return (
        <div>
            {/* Header Radios */}
            <div className="flex mb-4 justify-center">
                {PAYMENTS.map((payment) => (
                    <label
                        key={payment.value}
                        className={`px-2 hover:border-primary cursor-pointer ${
                            selected === payment.value ? "border border-primary" : "border"
                        }`}
                    >
                        <input
                            type="radio"
                            value={payment.value}
                            checked={selected === payment.value}
                            onChange={() => onSelect(payment.value)}
                            className="hidden"
                        />
                        <img src={payment.image} alt={payment.value.toString()} className="w-16 h-10 block" />
                    </label>
                ))}
            </div>
            {/* Body Forms */}
            {PAYMENTS.map((payment) => (
                <div key={payment.value}>{selected === payment.value && payment.component}</div>
            ))}
        </div>
    );
};

export default OnlinePayment;
