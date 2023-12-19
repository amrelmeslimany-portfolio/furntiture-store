import { PaymentMethodsEnum } from "../../../constants/enums";

type Props = {
    paymentMethod: PaymentMethodsEnum;
    onSelect: (method: PaymentMethodsEnum) => void;
};

const PaySummeryHeader = ({ onSelect, paymentMethod }: Props) => {
    return (
        <section className="mb-5">
            <h4 className="text-lg capitalize text-secondary font-semibold mb-2">Select Payment</h4>
            <div className="flex space-x-1">
                {Object.values(PaymentMethodsEnum).map((method) => (
                    <label key={method} className="flex items-center space-x-2 flex-1 text-center">
                        <input
                            type="radio"
                            value={method}
                            checked={method === paymentMethod}
                            onChange={() => onSelect(method)}
                            className="hidden"
                        />
                        <div
                            className={`btn-secondary flex-1 cursor-pointer ${
                                method === paymentMethod
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-secondaryText"
                            }`}
                        >
                            {method}
                        </div>
                    </label>
                ))}
            </div>
        </section>
    );
};

export default PaySummeryHeader;
